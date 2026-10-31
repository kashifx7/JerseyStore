# Second Half Store — Shopify Headless Storefront

An ultra-modern, high-performance e-commerce frontend dedicated exclusively to football jerseys, featuring real-time **Shopify Storefront GraphQL API integration**, an interactive **360° Custom Football Kit Studio**, a **Customer Favorite Options Engine**, and a real-time **Matchday Live Center**.

- **Website Domain:** [secondhalfstore.in](https://secondhalfstore.in)
- **Shopify Store Domain:** `q4z4z7-ns.myshopify.com`
- **Frontend Stack:** HTML5, CSS3, Vanilla JavaScript (ES6+), Shopify Storefront GraphQL API
- **Deployment:** GitHub Pages (Static hosting)
- **Git Branch:** `shopify-integration`

---

## 🚀 Key Features & Shopify Architecture

### 1. 🛍️ Real Shopify Storefront API Integration
- **Source of Truth:** Shopify powers live products, pricing, inventory availability, images, variants, cart lines, and checkout.
- **Dynamic Catalogue:** Automatically queries and normalizes live Shopify products, handles, descriptions, and media.
- **Variant Engine:** Reads sizes and editions directly from Shopify variants. If an item or size is out of stock, it is automatically marked as sold-out and disabled from checkout.
- **Safe Fallback:** If the public token is not yet configured, the application displays a friendly developer banner and keeps the UI fully functional with a preview collection.

### 2. 🛒 Official Shopify Cart API
- Native Cart API (`cartCreate`, `cartLinesAdd`, `cartLinesUpdate`, `cartLinesRemove`).
- Persists the active `cartId` in browser `localStorage` (`shopify_cart_id`), maintaining cart contents across page reloads.
- Automatic recovery: If a stored cart expires on Shopify, the client gracefully cleans up and provisions a fresh cart.

### 3. 💳 Genuine Shopify Checkout Flow
- When clicking **"Checkout Securely"**, the customer is redirected directly to Shopify's secure, encrypted checkout URL (`cart.checkoutUrl`).
- Shopify handles customer shipping addresses, payment gateways (Cards, UPI, Apple Pay, PayPal), discount codes, order confirmation emails, and inventory fulfillment.

### 4. 🎽 360° Custom Football Kit Studio
- Dynamic vector SVG rendering of front and back jersey angles.
- Customizations (Player Surname, Squad Number, Match Edition, Sleeve Type, Tournament Patches) are attached directly to the Shopify Cart line item as **Line Item Attributes** and sent to Shopify Checkout!

### 5. 🔴 Matchday Live Center & Customer Favorite Hub
- Real-time football match score tracker, upcoming fixtures, and recent results with a simulated ticking score engine.
- Direct **"👕 Shop Kit"** button on match cards to quickly find and customize the corresponding team's jersey.
- Club preference selector persisted across visits.

---

## 📁 Project Structure

```text
jersey-store/
├── index.html                 # Semantic HTML5 layout, modals (<dialog>), and store branding
├── style.css                  # Modern athletic dark theme, gallery, drawer & responsive CSS
├── shopify-config.js          # Shopify Storefront domain, API version, and public token config
├── shopify-config.local.js    # (Optional, git-ignored) Local configuration override
├── shopify-api.js             # Standalone vanilla JS GraphQL Storefront API client
├── app.js                     # Storefront controller: catalog, cart drawer, customizer, matchday
└── README.md                  # Documentation and setup guide
```

---

## ⚡ How to Configure Shopify Credentials

1. Open `shopify-config.js` in your editor.
2. Enter your Public Storefront API token from your Shopify Admin:
   * Go to **Shopify Admin** -> **Sales Channels** -> **Headless**.
   * Under your storefront credentials, copy your **Storefront API public access token**.
   * In `shopify-config.js`, update:
     ```javascript
     const SHOPIFY_CONFIG = {
       storeDomain: "q4z4z7-ns.myshopify.com",
       apiVersion: "2024-10", // Supported stable Storefront API version
       storefrontAccessToken: "YOUR_PUBLIC_STOREFRONT_TOKEN_HERE",
       // ...
     };
     ```
3. **Optional Git-Ignored Config:**
   If you prefer not to touch `shopify-config.js` or keep your local token uncommitted, create a file named `shopify-config.local.js` (which is already added to `.gitignore`) containing:
   ```javascript
   window.SHOPIFY_CONFIG_OVERRIDE = {
     storefrontAccessToken: "YOUR_PUBLIC_STOREFRONT_TOKEN_HERE"
   };
   ```
   Or set it in your browser console:
   ```javascript
   localStorage.setItem("shopify_token_override", "YOUR_PUBLIC_STOREFRONT_TOKEN_HERE");
   ```

> [!NOTE]
> The Storefront API Access Token is an unprivileged, public token designed specifically for client-side browsers. Never expose private Admin API keys (`shpat_...`) in frontend code.

---

## 💻 How to Run Locally

Launch directly in your web browser:
```powershell
Start-Process "index.html"
```

Or run using a lightweight static HTTP server:
```powershell
python -m http.server 3000
```
Then visit `http://localhost:3000` in your web browser.
