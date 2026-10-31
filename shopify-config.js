/**
 * Second Half Store - Shopify Headless Storefront Configuration
 *
 * Store: Second Half Store (secondhalfstore.in)
 * Shopify Domain: q4z4z7-ns.myshopify.com
 */

const SHOPIFY_CONFIG = {
  // Shopify permanent myshopify.com domain
  storeDomain: "q4z4z7-ns.myshopify.com",

  // Supported Storefront API version
  apiVersion: "2024-10",

  // Public Storefront API access token (Public Key for client-side queries)
  storefrontAccessToken: "55aadefe6e2b643d826e0d8b7a938cc7",

  // GraphQL endpoint
  get endpoint() {
    return `https://${this.storeDomain}/api/${this.apiVersion}/graphql.json`;
  },

  // Helper to check if credentials have been configured
  get isConfigured() {
    const token = this.storefrontAccessToken;
    return Boolean(this.storeDomain) && Boolean(token) && token.length > 10;
  }
};

// Check for optional window override or localStorage override if present
if (typeof window !== "undefined") {
  if (window.SHOPIFY_CONFIG_OVERRIDE && window.SHOPIFY_CONFIG_OVERRIDE.storefrontAccessToken) {
    SHOPIFY_CONFIG.storefrontAccessToken = window.SHOPIFY_CONFIG_OVERRIDE.storefrontAccessToken;
  } else {
    try {
      const storedToken = localStorage.getItem("shopify_token_override");
      if (storedToken) SHOPIFY_CONFIG.storefrontAccessToken = storedToken;
    } catch (_) {}
  }
  window.SHOPIFY_CONFIG = SHOPIFY_CONFIG;
}
