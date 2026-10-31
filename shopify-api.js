/**
 * Second Half Store - Shopify Storefront GraphQL API Client
 *
 * Provides vanilla JavaScript client functions for:
 * - Querying products, variants, images, pricing, and availability
 * - Querying product details by handle or ID
 * - Creating and managing shopping carts via the Storefront Cart API
 * - Managing line items (add, update, remove, custom line attributes)
 * - Generating direct Shopify checkout URLs
 */

// ==========================================
// 1. CORE GRAPHQL EXECUTION ENGINE & CONNECTIVITY
// ==========================================

const SHOP_INFO_QUERY = `
  query GetShopInfo {
    shop {
      name
      primaryDomain {
        url
        host
      }
      paymentSettings {
        currencyCode
      }
    }
  }
`;

/**
 * Checks connectivity to the Shopify Storefront API
 * @returns {Promise<{ status: string, shopName?: string, currencyCode?: string, message?: string }>}
 */
async function shopifyCheckConnection() {
  if (!window.SHOPIFY_CONFIG || !window.SHOPIFY_CONFIG.isConfigured) {
    return {
      status: "missing_config",
      message: "Storefront access token is not yet configured in shopify-config.js"
    };
  }

  try {
    const data = await shopifyFetch(SHOP_INFO_QUERY);
    return {
      status: "connected",
      shopName: data?.shop?.name || "Second Half Store",
      currencyCode: data?.shop?.paymentSettings?.currencyCode || "USD"
    };
  } catch (err) {
    return {
      status: "error",
      message: err.message
    };
  }
}

/**
 * Execute a GraphQL query or mutation against Shopify Storefront API
 * @param {string} query - GraphQL query/mutation string
 * @param {Object} [variables={}] - GraphQL variables
 * @returns {Promise<Object>} The `data` property of the response
 */
async function shopifyFetch(query, variables = {}) {
  if (!window.SHOPIFY_CONFIG || !window.SHOPIFY_CONFIG.endpoint) {
    throw new Error("Shopify configuration not found. Check shopify-config.js.");
  }

  const { endpoint, storefrontAccessToken, isConfigured } = window.SHOPIFY_CONFIG;

  if (!isConfigured) {
    throw new Error(
      "Shopify Storefront API credentials are not set. " +
      "Please enter your Storefront Access Token in shopify-config.js."
    );
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": storefrontAccessToken
    },
    body: JSON.stringify({ query, variables })
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Shopify API HTTP Error (${response.status} ${response.statusText}): ${errorBody}`);
  }

  const json = await response.json();

  if (json.errors && json.errors.length > 0) {
    const errorMsg = json.errors.map(e => e.message).join(", ");
    throw new Error(`Shopify GraphQL Error: ${errorMsg}`);
  }

  return json.data;
}

// ==========================================
// 2. PRODUCT RETRIEVAL & NORMALIZATION
// ==========================================

const PRODUCTS_QUERY = `
  query GetProducts($first: Int = 50, $after: String) {
    products(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          id
          title
          handle
          description
          descriptionHtml
          productType
          tags
          vendor
          availableForSale
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
            maxVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 10) {
            edges {
              node {
                url
                altText
                width
                height
              }
            }
          }
          options {
            id
            name
            values
          }
          variants(first: 50) {
            edges {
              node {
                id
                title
                availableForSale
                price {
                  amount
                  currencyCode
                }
                compareAtPrice {
                  amount
                  currencyCode
                }
                selectedOptions {
                  name
                  value
                }
                image {
                  url
                  altText
                }
              }
            }
          }
        }
      }
    }
  }
`;

/**
 * Normalizes a raw GraphQL Shopify product node into a clean application object
 */
function normalizeShopifyProduct(node) {
  const minPrice = parseFloat(node.priceRange?.minVariantPrice?.amount || 0);
  const maxPrice = parseFloat(node.priceRange?.maxVariantPrice?.amount || 0);
  const currencyCode = node.priceRange?.minVariantPrice?.currencyCode || "USD";

  const images = (node.images?.edges || []).map(e => ({
    url: e.node.url,
    altText: e.node.altText || node.title
  }));

  const featuredImage = images.length > 0 ? images[0].url : null;

  const variants = (node.variants?.edges || []).map(e => ({
    id: e.node.id,
    title: e.node.title,
    availableForSale: Boolean(e.node.availableForSale),
    price: parseFloat(e.node.price?.amount || 0),
    compareAtPrice: e.node.compareAtPrice ? parseFloat(e.node.compareAtPrice.amount) : null,
    currencyCode: e.node.price?.currencyCode || currencyCode,
    selectedOptions: e.node.selectedOptions || [],
    image: e.node.image?.url || featuredImage
  }));

  // Detect size and edition options if available
  const sizes = [];
  const editions = [];
  variants.forEach(v => {
    v.selectedOptions.forEach(opt => {
      const optName = opt.name.toLowerCase();
      if (optName.includes("size") && !sizes.includes(opt.value)) {
        sizes.push(opt.value);
      }
      if ((optName.includes("edition") || optName.includes("version")) && !editions.includes(opt.value)) {
        editions.push(opt.value);
      }
    });
  });

  // Extract football metadata from tags if present (e.g. "League: Premier League", "Team: Arsenal")
  const metadata = parseProductTags(node.tags || []);

  return {
    id: node.id,
    title: node.title,
    handle: node.handle,
    description: node.description || "",
    descriptionHtml: node.descriptionHtml || "",
    productType: node.productType || "Football Jersey",
    tags: node.tags || [],
    vendor: node.vendor || "",
    availableForSale: Boolean(node.availableForSale),
    price: minPrice,
    maxPrice: maxPrice,
    currencyCode: currencyCode,
    images: images,
    featuredImage: featuredImage,
    variants: variants,
    options: node.options || [],
    sizes: sizes.length > 0 ? sizes : ["S", "M", "L", "XL", "XXL"],
    editions: editions,
    // Football-specific metadata with safe fallbacks
    league: metadata.league || node.productType || "Football",
    team: metadata.team || node.vendor || node.title.split(" ")[0] || "Club",
    season: metadata.season || "2024/25",
    edition: metadata.edition || (editions[0] || "Stadium Fan"),
    type: metadata.type || "Match Kit",
    isShopifyProduct: true
  };
}

/**
 * Extracts structured metadata from Shopify tags (e.g., "league:La Liga", "team:Real Madrid")
 */
function parseProductTags(tags) {
  const meta = {};
  tags.forEach(tag => {
    const trimmed = tag.trim();
    if (trimmed.includes(":")) {
      const [key, ...rest] = trimmed.split(":");
      const value = rest.join(":").trim();
      const lowerKey = key.toLowerCase().trim();
      if (lowerKey === "league") meta.league = value;
      else if (lowerKey === "team") meta.team = value;
      else if (lowerKey === "season") meta.season = value;
      else if (lowerKey === "edition") meta.edition = value;
      else if (lowerKey === "type") meta.type = value;
    }
  });
  return meta;
}

/**
 * Fetch all active products from Shopify
 * @param {number} [first=50]
 * @returns {Promise<Array<Object>>}
 */
async function shopifyGetProducts(first = 50) {
  const data = await shopifyFetch(PRODUCTS_QUERY, { first });
  const edges = data?.products?.edges || [];
  return edges.map(edge => normalizeShopifyProduct(edge.node));
}

// ==========================================
// 3. CART OPERATIONS (Storefront Cart API)
// ==========================================

const CART_FIELDS = `
  id
  checkoutUrl
  totalQuantity
  cost {
    subtotalAmount {
      amount
      currencyCode
    }
    totalAmount {
      amount
      currencyCode
    }
    totalTaxAmount {
      amount
      currencyCode
    }
  }
  lines(first: 100) {
    edges {
      node {
        id
        quantity
        attributes {
          key
          value
        }
        cost {
          totalAmount {
            amount
            currencyCode
          }
        }
        merchandise {
          ... on ProductVariant {
            id
            title
            availableForSale
            price {
              amount
              currencyCode
            }
            product {
              id
              title
              handle
              productType
            }
            image {
              url
              altText
            }
            selectedOptions {
              name
              value
            }
          }
        }
      }
    }
  }
`;

const CART_CREATE_MUTATION = `
  mutation CartCreate($input: CartInput!) {
    cartCreate(input: $input) {
      cart {
        ${CART_FIELDS}
      }
      userErrors {
        field
        message
      }
    }
  }
`;

const CART_QUERY = `
  query GetCart($id: ID!) {
    cart(id: $id) {
      ${CART_FIELDS}
    }
  }
`;

const CART_LINES_ADD_MUTATION = `
  mutation CartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        ${CART_FIELDS}
      }
      userErrors {
        field
        message
      }
    }
  }
`;

const CART_LINES_UPDATE_MUTATION = `
  mutation CartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        ${CART_FIELDS}
      }
      userErrors {
        field
        message
      }
    }
  }
`;

const CART_LINES_REMOVE_MUTATION = `
  mutation CartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart {
        ${CART_FIELDS}
      }
      userErrors {
        field
        message
      }
    }
  }
`;

/**
 * Normalizes a raw Cart response into a consistent JavaScript cart object
 */
function normalizeShopifyCart(cart) {
  if (!cart) return null;

  const lines = (cart.lines?.edges || []).map(e => {
    const node = e.node;
    const merch = node.merchandise || {};
    const product = merch.product || {};

    // Transform attributes array into a key-value object as well
    const attributes = node.attributes || [];
    const attrMap = {};
    attributes.forEach(a => {
      attrMap[a.key] = a.value;
    });

    return {
      id: node.id,
      quantity: node.quantity,
      variantId: merch.id,
      variantTitle: merch.title,
      productTitle: product.title || "Football Jersey",
      productHandle: product.handle || "",
      price: parseFloat(merch.price?.amount || 0),
      totalPrice: parseFloat(node.cost?.totalAmount?.amount || 0),
      currencyCode: merch.price?.currencyCode || cart.cost?.totalAmount?.currencyCode || "USD",
      imageUrl: merch.image?.url || null,
      selectedOptions: merch.selectedOptions || [],
      attributes: attributes,
      attrMap: attrMap
    };
  });

  return {
    id: cart.id,
    checkoutUrl: cart.checkoutUrl,
    totalQuantity: cart.totalQuantity || 0,
    subtotal: parseFloat(cart.cost?.subtotalAmount?.amount || 0),
    total: parseFloat(cart.cost?.totalAmount?.amount || 0),
    tax: parseFloat(cart.cost?.totalTaxAmount?.amount || 0),
    currencyCode: cart.cost?.totalAmount?.currencyCode || "USD",
    lines: lines
  };
}

/**
 * Create a new Shopify cart
 * @param {Array<Object>} [initialLines=[]]
 * @returns {Promise<Object>}
 */
async function shopifyCreateCart(initialLines = []) {
  const formattedLines = initialLines.map(l => ({
    merchandiseId: l.variantId,
    quantity: l.quantity || 1,
    attributes: l.attributes || []
  }));

  const data = await shopifyFetch(CART_CREATE_MUTATION, {
    input: { lines: formattedLines }
  });

  const userErrors = data?.cartCreate?.userErrors || [];
  if (userErrors.length > 0) {
    throw new Error(userErrors.map(e => e.message).join(", "));
  }

  const rawCart = data?.cartCreate?.cart;
  const cart = normalizeShopifyCart(rawCart);

  if (cart && cart.id) {
    try {
      localStorage.setItem("shopify_cart_id", cart.id);
    } catch (_) {}
  }

  return cart;
}

/**
 * Retrieve an existing cart by ID
 * @param {string} cartId
 * @returns {Promise<Object|null>} Returns null if cart does not exist or expired
 */
async function shopifyGetCart(cartId) {
  if (!cartId) return null;

  try {
    const data = await shopifyFetch(CART_QUERY, { id: cartId });
    if (!data || !data.cart) {
      // Cart not found or expired on Shopify
      try {
        localStorage.removeItem("shopify_cart_id");
      } catch (_) {}
      return null;
    }
    return normalizeShopifyCart(data.cart);
  } catch (err) {
    console.warn("Could not fetch existing Shopify cart; will recreate when needed:", err.message);
    try {
      localStorage.removeItem("shopify_cart_id");
    } catch (_) {}
    return null;
  }
}

/**
 * Add an item to the cart (creates cart if cartId is missing or expired)
 * @param {string|null} cartId
 * @param {string} variantId - Shopify Variant ID (gid://shopify/ProductVariant/...)
 * @param {number} [quantity=1]
 * @param {Array<{key: string, value: string}>} [attributes=[]]
 * @returns {Promise<Object>} Updated normalized cart
 */
async function shopifyAddToCart(cartId, variantId, quantity = 1, attributes = []) {
  if (!variantId) {
    throw new Error("Cannot add to cart: Missing Shopify variant ID.");
  }

  const lineInput = {
    merchandiseId: variantId,
    quantity: quantity,
    attributes: attributes
  };

  // If we don't have a cart yet, create one
  if (!cartId) {
    return await shopifyCreateCart([lineInput]);
  }

  try {
    const data = await shopifyFetch(CART_LINES_ADD_MUTATION, {
      cartId: cartId,
      lines: [lineInput]
    });

    const userErrors = data?.cartLinesAdd?.userErrors || [];
    if (userErrors.length > 0) {
      throw new Error(userErrors.map(e => e.message).join(", "));
    }

    return normalizeShopifyCart(data?.cartLinesAdd?.cart);
  } catch (err) {
    // If the cart expired on Shopify, create a brand new cart with the item
    if (err.message.includes("does not exist") || err.message.includes("invalid") || err.message.includes("cart")) {
      console.warn("Cart invalid or expired. Creating a new cart with this item.");
      return await shopifyCreateCart([lineInput]);
    }
    throw err;
  }
}

/**
 * Update the quantity of a cart line item
 * @param {string} cartId
 * @param {string} lineId - Cart Line ID (gid://shopify/CartLine/...)
 * @param {number} quantity
 * @returns {Promise<Object>} Updated normalized cart
 */
async function shopifyUpdateCartLine(cartId, lineId, quantity) {
  if (!cartId || !lineId) {
    throw new Error("Missing cartId or lineId for cart line update.");
  }

  const data = await shopifyFetch(CART_LINES_UPDATE_MUTATION, {
    cartId: cartId,
    lines: [{ id: lineId, quantity: quantity }]
  });

  const userErrors = data?.cartLinesUpdate?.userErrors || [];
  if (userErrors.length > 0) {
    throw new Error(userErrors.map(e => e.message).join(", "));
  }

  return normalizeShopifyCart(data?.cartLinesUpdate?.cart);
}

const CART_BUYER_IDENTITY_UPDATE_MUTATION = `
  mutation CartBuyerIdentityUpdate($buyerIdentity: CartBuyerIdentityInput!, $cartId: ID!) {
    cartBuyerIdentityUpdate(buyerIdentity: $buyerIdentity, cartId: $cartId) {
      cart {
        id
        checkoutUrl
      }
      userErrors {
        field
        message
      }
    }
  }
`;

/**
 * Remove a line item from the cart
 * @param {string} cartId
 * @param {string} lineId - Cart Line ID (gid://shopify/CartLine/...)
 * @returns {Promise<Object>} Updated normalized cart
 */
async function shopifyRemoveCartLine(cartId, lineId) {
  if (!cartId || !lineId) {
    throw new Error("Missing cartId or lineId for line removal.");
  }

  const data = await shopifyFetch(CART_LINES_REMOVE_MUTATION, {
    cartId: cartId,
    lineIds: [lineId]
  });

  const userErrors = data?.cartLinesRemove?.userErrors || [];
  if (userErrors.length > 0) {
    throw new Error(userErrors.map(e => e.message).join(", "));
  }

  return normalizeShopifyCart(data?.cartLinesRemove?.cart);
}

/**
 * Update the buyer's contact info on the cart (email/phone)
 * @param {string} cartId
 * @param {{ email?: string, phone?: string }} buyerIdentity
 * @returns {Promise<Object|null>} Updated cart or null
 */
async function shopifyUpdateCartBuyerIdentity(cartId, buyerIdentity = {}) {
  if (!cartId) return null;
  const input = {};
  if (buyerIdentity.email && buyerIdentity.email.trim()) {
    input.email = buyerIdentity.email.trim();
  }
  if (buyerIdentity.phone && buyerIdentity.phone.trim()) {
    input.phone = buyerIdentity.phone.trim();
  }

  if (Object.keys(input).length === 0) return null;

  try {
    const data = await shopifyFetch(CART_BUYER_IDENTITY_UPDATE_MUTATION, {
      cartId: cartId,
      buyerIdentity: input
    });
    return data?.cartBuyerIdentityUpdate?.cart || null;
  } catch (err) {
    console.warn("Could not update buyer identity:", err.message);
    return null;
  }
}

// Attach to window object for global availability in vanilla JS
if (typeof window !== "undefined") {
  window.shopifyApi = {
    fetch: shopifyFetch,
    checkConnection: shopifyCheckConnection,
    getProducts: shopifyGetProducts,
    getCart: shopifyGetCart,
    createCart: shopifyCreateCart,
    addToCart: shopifyAddToCart,
    updateCartLine: shopifyUpdateCartLine,
    removeCartLine: shopifyRemoveCartLine,
    updateCartBuyerIdentity: shopifyUpdateCartBuyerIdentity,
    normalizeShopifyProduct: normalizeShopifyProduct,
    normalizeShopifyCart: normalizeShopifyCart
  };
}
