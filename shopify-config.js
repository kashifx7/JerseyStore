/**
 * Second Half Store - Shopify Headless Storefront Configuration
 *
 * Store: Second Half Store (secondhalfstore.in)
 * Shopify Domain: q4z4z7-ns.myshopify.com
 *
 * Instructions:
 * 1. Replace 'REPLACE_WITH_SUPPORTED_API_VERSION' with your Shopify API version (e.g. '2024-10' or '2025-01').
 * 2. Replace 'REPLACE_WITH_PUBLIC_STOREFRONT_TOKEN' with your public Storefront API access token
 *    found in your Shopify Admin -> Sales Channels -> Headless -> Storefront API credentials.
 *
 * Note on GitHub / Git commits:
 * - If you prefer not to commit your token directly in this file, you can create a file named
 *   'shopify-config.local.js' (which is git-ignored) and define:
 *     window.SHOPIFY_CONFIG_OVERRIDE = { storefrontAccessToken: "YOUR_TOKEN_HERE" };
 *   Or set it in your browser console: localStorage.setItem("shopify_token_override", "YOUR_TOKEN_HERE");
 */

const DEFAULT_SHOPIFY_CONFIG = {
  // Shopify permanent myshopify.com domain
  storeDomain: "q4z4z7-ns.myshopify.com",

  // Supported Storefront API version (recommended stable version: '2024-10')
  apiVersion: "2024-10",

  // Public Storefront API access token (fill in locally)
  storefrontAccessToken: "REPLACE_WITH_PUBLIC_STOREFRONT_TOKEN",

  // GraphQL endpoint
  get endpoint() {
    return `https://${this.storeDomain}/api/${this.apiVersion}/graphql.json`;
  },

  // Helper to check if credentials have been configured
  get isConfigured() {
    const token = this.storefrontAccessToken;
    return (
      Boolean(this.storeDomain) &&
      Boolean(this.apiVersion) &&
      this.apiVersion !== "REPLACE_WITH_SUPPORTED_API_VERSION" &&
      Boolean(token) &&
      token !== "REPLACE_WITH_PUBLIC_STOREFRONT_TOKEN" &&
      token !== "PASTE_YOUR_PUBLIC_STOREFRONT_TOKEN_HERE"
    );
  }
};

// Check for local overrides (via local file or localStorage)
let localOverride = {};
if (typeof window !== "undefined") {
  if (window.SHOPIFY_CONFIG_OVERRIDE) {
    localOverride = window.SHOPIFY_CONFIG_OVERRIDE;
  } else {
    try {
      const storedToken = localStorage.getItem("shopify_token_override");
      if (storedToken) {
        localOverride.storefrontAccessToken = storedToken;
      }
    } catch (_) {}
  }
}

const SHOPIFY_CONFIG = Object.assign({}, DEFAULT_SHOPIFY_CONFIG, localOverride);

// Re-attach getters since Object.assign copies value snapshots
Object.defineProperty(SHOPIFY_CONFIG, "endpoint", {
  get() {
    return `https://${this.storeDomain}/api/${this.apiVersion}/graphql.json`;
  }
});
Object.defineProperty(SHOPIFY_CONFIG, "isConfigured", {
  get() {
    const token = this.storefrontAccessToken;
    return (
      Boolean(this.storeDomain) &&
      Boolean(this.apiVersion) &&
      this.apiVersion !== "REPLACE_WITH_SUPPORTED_API_VERSION" &&
      Boolean(token) &&
      token !== "REPLACE_WITH_PUBLIC_STOREFRONT_TOKEN" &&
      token !== "PASTE_YOUR_PUBLIC_STOREFRONT_TOKEN_HERE"
    );
  }
});

// Attach to window object for global script access
if (typeof window !== "undefined") {
  window.SHOPIFY_CONFIG = SHOPIFY_CONFIG;
}
