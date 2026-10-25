# VORTEX KITS - 100% Pure Football Jersey Storefront & Matchday Live Center

An ultra-modern, high-performance e-commerce frontend dedicated **exclusively to football (soccer) jerseys**, featuring a **Customer Favorite Options Engine**, an interactive **360° Custom Football Kit Studio**, and a real-time **Matchday Live Center** with live scores, upcoming fixtures, and direct match-to-kit shopping integration.

---

## 🚀 Key Features

### 1. ⚽ 100% Pure Football Focus
- Exclusively dedicated to the world's most prestigious football competitions:
  - 🇪🇸 **La Liga**: Real Madrid 24/25 Home, FC Barcelona 125th Anniversary Home
  - 🇬🇧 **Premier League**: Arsenal 24/25 Away, Liverpool FC 24/25 Home, Manchester City 24/25 Home, Chelsea FC 24/25 Home
  - 🇮🇹 **Serie A**: Inter Milan Two-Star Home, AC Milan 24/25 Home
  - 🇩🇪 **Bundesliga**: Bayern Munich Triple Red, Borussia Dortmund 24/25 Home
  - 🇫🇷 **Ligue 1**: Paris Saint-Germain 24/25 Home
  - 🌍 **National Teams**: Argentina 3-Star Champions, Brazil 2024 Home, Spain Euro 2024 Champions, Portugal Euro 2024 Home, Japan Y-3 Special Edition
  - ⏳ **Retro Football Legends**: France 1998 World Cup Final Retro (#10 Zidane), Brazil 1970 World Cup Final Retro (#10 Pelé)

---

### 2. ⭐ Customer Favorite Options Engine
- **Favorite Club Selector**:
  - Customers can choose their favorite football team (*Real Madrid, Barcelona, Arsenal, Liverpool, Manchester City, Bayern, Argentina, Brazil, etc.*) via the header button or the **Favorite Team Hub**.
  - Persisted in `localStorage` across visits.
  - Personalized greeting and automatic filtering via the **"⭐ My Favorite Team"** filter pill.
  - Highlighted with a special **"⭐ YOUR FAVORITE TEAM"** badge on matching jersey cards.
- **Personalized Kit Preferences Modal**:
  - Set default preferred edition: **Stadium Fan (Relaxed)** vs. **Match Player Issue (Slim Athletic)**.
  - Set default sleeve length: **Short Sleeve** vs. **Long Sleeve**.
  - Set default custom print: Preferred surname and squad number.
  - 1-click **"⚡ Load My Favorite Team"** button inside the Custom Kit Studio automatically configures your favorite kit!

---

### 3. 🔴 Matchday Live Center (Live Scores & Upcoming Fixtures Tab)
- Located prominently below the catalog and accessible directly via the top navigation bar.
- **Three Match Categories**:
  - **🔴 Live Now**: Real-time matches with in-play minute ticker (e.g., `LIVE 76'`), live scores, goal scorers, timeline commentary, and possession stats bars.
  - **📅 Upcoming Fixtures**: Fixture cards featuring scheduled kickoff times, countdowns (e.g., `Starts in 2h 45m`), and venue details.
  - **🏆 Recent Results**: Full-time scores with scorers recap.
- **Direct Match-to-Kit E-Commerce Bridge**:
  - Every team on each match card features a direct **"👕 Shop Kit"** button.
  - Clicking automatically filters the store or opens that team's jersey directly in the 360° Customizer Studio!
- **Interactive Match Simulator**:
  - Toggle auto-updates or click **"Refresh Scores"** to simulate in-play match progression and goal alert toast notifications.

---

### 4. 🎽 360° Custom Football Kit Studio
- **Dynamic Vector SVG Renderer**: Live 2D graphic rendering of both Front and Back jersey angles in real-time as you type your name and number.
- **Sleeve Options**: Toggle between **Short Sleeve** and **Long Sleeve Classic** (+ $10.00).
- **Legend Presets**: Fast pre-fills for *Bellingham #5, Messi #10, Vinicius Jr #7, Saka #7, Salah #11, Palmer #20, Yamal #19, Ronaldo #7, Zidane #10*.
- **Official Tournament Badges**: Domestic League Champion or UEFA Champions League Starball + Foundation patch.

---

### 5. 🛍️ Bag & Secure Checkout Flow
- **Slide-Over Drawer**: Native `<dialog>` modal with backdrop blur and light-dismiss boundary fallback.
- **Line-item Breakdown**: Custom name, squad number, edition, sleeve length, and attached patches.
- **Free Shipping Progress Tracker**: Live progress toward the $85 threshold.
- **Coupon Code Engine**: Try `KICKOFF15` for 15% discount.
- **Mock Checkout**: Form validation, payment selector (Card, Apple Pay, PayPal), and celebratory order confirmation modal with order number.

---

### 6. 🌐 Modern Web Guidance Compliant
- Semantic HTML5 dialogs with declarative `closedby="any"` and light dismiss click boundary fallback.
- CSS scroll containment (`overscroll-behavior: contain`) on `dialog:modal` and `dialog::backdrop` with `overflow: hidden` to eliminate page scroll chaining.

---

## 📁 Project Structure

```
jersey-store/
├── index.html        # Pure football storefront layout, Favorite Team Hub & Matchday Live Center
├── style.css         # Modern athletic styling, scoreboard cards, dialogs & responsive CSS
├── app.js            # Football catalog, favorite options store, live match engine, SVG generator & cart
└── README.md         # Documentation & setup guide
```

---

## ⚡ How to Run

Open `index.html` directly in your browser:

```powershell
# Directly launch in your default browser:
Start-Process "C:\Users\kashi\.gemini\antigravity\scratch\jersey-store\index.html"
```

Or run a local server:

```powershell
python -m http.server 3000 --directory "C:\Users\kashi\.gemini\antigravity\scratch\jersey-store"
```
Then visit `http://localhost:3000` in your web browser.
