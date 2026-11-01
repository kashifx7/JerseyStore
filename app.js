/**
 * VORTEX KITS - Football Storefront Engine
 * Features:
 * - 100% Pure Football Jersey Catalog (Clubs, Nations, Retro)
 * - Customer Favorite Option Engine (Favorite Club, Edition, Sleeve & Print Preferences)
 * - Matchday Live Center: Real-Time Live Scores, Upcoming Fixtures & Match Results
 * - Direct Match-to-Kit E-Commerce Bridge (Shop playing teams' kits directly from match cards)
 * - Dynamic SVG Vector Jersey Generation (Front & Back Views, Short & Long Sleeves)
 * - 360° Custom Football Kit Studio (Player Name, Squad Number, Sleeve Patches)
 * - Multi-Currency Engine (USD, EUR, GBP)
 * - Modern Web Guidance Compliant Dialogs (<dialog closedby="any"> with light-dismiss fallbacks)
 * - Reactive LocalStorage Cart & Wishlist Store
 */

// ==========================================
// 1. FOOTBALL PRODUCT CATALOG (100% FOOTBALL)
// ==========================================

const products = [
  {
    id: 1,
    name: "Argentina Jersey",
    price: 799
  }
];

const JERSEYS_DATA = [
  {
    id: "rm-home-24",
    title: "Real Madrid 24/25 Home Kit",
    team: "Real Madrid",
    league: "La Liga",
    category: "Football",
    type: "Home",
    edition: "Player Issue",
    priceUSD: 119.99,
    rating: 4.9,
    reviewsCount: 342,
    season: "2024/25",
    description: "The pristine white aesthetic with an embossed houndstooth texture and golden trim accents. Features lightweight HEAT.RDY air-mesh fabric, heat-applied crest, and official La Liga badges.",
    colors: {
      primary: "#FFFFFF",
      secondary: "#0E1A35",
      accent: "#CCA352",
      collar: "#0E1A35",
      cuff: "#CCA352",
      text: "#0E1A35",
      number: "#0E1A35",
      patternType: "houndstooth"
    },
    defaultName: "BELLINGHAM",
    defaultNum: 5,
    patch: "La Liga Champions"
  },
  {
    id: "fcb-home-24",
    title: "FC Barcelona 125th Anniv. Home Kit",
    team: "FC Barcelona",
    league: "La Liga",
    category: "Football",
    type: "Home",
    edition: "Player Issue",
    priceUSD: 124.99,
    rating: 5.0,
    reviewsCount: 450,
    season: "2024/25",
    description: "Commemorating 125 years of Blaugrana history with the legendary half-and-half deep royal blue and noble red design, centered club crest, and gold commemorative lettering.",
    colors: {
      primary: "#004D98",
      secondary: "#A50044",
      accent: "#EDBB00",
      collar: "#004D98",
      cuff: "#A50044",
      text: "#EDBB00",
      number: "#EDBB00",
      patternType: "half"
    },
    defaultName: "LAMINE YAMAL",
    defaultNum: 19,
    patch: "La Liga"
  },
  {
    id: "ars-away-24",
    title: "Arsenal 24/25 Away Kit",
    team: "Arsenal FC",
    league: "Premier League",
    category: "Football",
    type: "Away",
    edition: "Stadium Fan",
    priceUSD: 89.99,
    rating: 4.8,
    reviewsCount: 215,
    season: "2024/25",
    description: "Celebrates the club's African diaspora connection with black base and vibrant pan-African red and green ribbon accents along the collar and flanks.",
    colors: {
      primary: "#111417",
      secondary: "#00994C",
      accent: "#E31B23",
      collar: "#00994C",
      cuff: "#E31B23",
      text: "#FFFFFF",
      number: "#FFFFFF",
      patternType: "accents"
    },
    defaultName: "SAKA",
    defaultNum: 7,
    patch: "Premier League"
  },
  {
    id: "liv-home-24",
    title: "Liverpool FC 24/25 Home Kit",
    team: "Liverpool FC",
    league: "Premier League",
    category: "Football",
    type: "Home",
    edition: "Player Issue",
    priceUSD: 119.99,
    rating: 4.9,
    reviewsCount: 380,
    season: "2024/25",
    description: "A retro tribute to the immortal 1984 Rome treble winners. Gym Red foundation with chrome yellow pinstripes forming an embossed YNWA heritage motif.",
    colors: {
      primary: "#C8102E",
      secondary: "#F6EB61",
      accent: "#00B2A9",
      collar: "#F6EB61",
      cuff: "#F6EB61",
      text: "#FFFFFF",
      number: "#FFFFFF",
      patternType: "pinstripes"
    },
    defaultName: "SALAH",
    defaultNum: 11,
    patch: "Premier League"
  },
  {
    id: "mancity-home-24",
    title: "Manchester City 24/25 Home Kit",
    team: "Manchester City",
    league: "Premier League",
    category: "Football",
    type: "Home",
    edition: "Stadium Fan",
    priceUSD: 89.99,
    rating: 4.7,
    reviewsCount: 190,
    season: "2024/25",
    description: "The unmistakable sky blue shade featuring an homage to Manchester's 0161 phone dialing code knit into the crew collar and sleeve trim.",
    colors: {
      primary: "#6CABDD",
      secondary: "#1C2C5B",
      accent: "#FFFFFF",
      collar: "#1C2C5B",
      cuff: "#1C2C5B",
      text: "#FFFFFF",
      number: "#FFFFFF",
      patternType: "plain"
    },
    defaultName: "HAALAND",
    defaultNum: 9,
    patch: "Premier League Champions"
  },
  {
    id: "che-home-24",
    title: "Chelsea FC 24/25 Home Kit",
    team: "Chelsea FC",
    league: "Premier League",
    category: "Football",
    type: "Home",
    edition: "Player Issue",
    priceUSD: 119.99,
    rating: 4.8,
    reviewsCount: 175,
    season: "2024/25",
    description: "Bold 'blue flame' aesthetic in royal blue with liquid metallic silver and energetic orange contour ripples capturing the hottest part of fire.",
    colors: {
      primary: "#034694",
      secondary: "#EE242C",
      accent: "#DBA111",
      collar: "#034694",
      cuff: "#EE242C",
      text: "#FFFFFF",
      number: "#FFFFFF",
      patternType: "flame"
    },
    defaultName: "PALMER",
    defaultNum: 20,
    patch: "Premier League"
  },
  {
    id: "inter-home-24",
    title: "Inter Milan 24/25 Two-Star Home Kit",
    team: "Inter Milan",
    league: "Serie A",
    category: "Football",
    type: "Home",
    edition: "Player Issue",
    priceUSD: 119.99,
    rating: 4.9,
    reviewsCount: 235,
    season: "2024/25",
    description: "Marking their historic 20th Scudetto with the official second gold star. Merges traditional vertical Nerazzurri stripes with dynamic modern diagonal transitions.",
    colors: {
      primary: "#001EA0",
      secondary: "#0A0A0A",
      accent: "#FFD700",
      collar: "#0A0A0A",
      cuff: "#001EA0",
      text: "#FFD700",
      number: "#FFD700",
      patternType: "stripes"
    },
    defaultName: "LAUTARO",
    defaultNum: 10,
    patch: "Scudetto Champions"
  },
  {
    id: "milan-home-24",
    title: "AC Milan 24/25 Home Kit",
    team: "AC Milan",
    league: "Serie A",
    category: "Football",
    type: "Home",
    edition: "Stadium Fan",
    priceUSD: 89.99,
    rating: 4.7,
    reviewsCount: 168,
    season: "2024/25",
    description: "The timeless Rossoneri red and black stripes, refreshed with a DNA flame motif inside the stripes representing the passion of the Curva Sud.",
    colors: {
      primary: "#FB090B",
      secondary: "#101010",
      accent: "#FFFFFF",
      collar: "#101010",
      cuff: "#101010",
      text: "#FFFFFF",
      number: "#FFFFFF",
      patternType: "stripes"
    },
    defaultName: "LEÃO",
    defaultNum: 10,
    patch: "Serie A"
  },
  {
    id: "bayern-home-24",
    title: "Bayern Munich 24/25 Triple Red Kit",
    team: "Bayern Munich",
    league: "Bundesliga",
    category: "Football",
    type: "Home",
    edition: "Stadium Fan",
    priceUSD: 89.99,
    rating: 4.8,
    reviewsCount: 154,
    season: "2024/25",
    description: "An intense all-red design composed of three distinct shades of crimson and maroon forming vertical pulse stripes across the chest and back.",
    colors: {
      primary: "#DC052D",
      secondary: "#8B0000",
      accent: "#FFFFFF",
      collar: "#8B0000",
      cuff: "#8B0000",
      text: "#FFFFFF",
      number: "#FFFFFF",
      patternType: "stripes"
    },
    defaultName: "KANE",
    defaultNum: 9,
    patch: "Bundesliga"
  },
  {
    id: "bvb-home-24",
    title: "Borussia Dortmund 24/25 Home Kit",
    team: "Borussia Dortmund",
    league: "Bundesliga",
    category: "Football",
    type: "Home",
    edition: "Player Issue",
    priceUSD: 114.99,
    rating: 4.9,
    reviewsCount: 210,
    season: "2024/25",
    description: "Iconic Cyber Yellow base with black pinstripes inspired by the 1997 Champions League triumph in Munich. Breathable ultraweave fabric.",
    colors: {
      primary: "#FDE100",
      secondary: "#111111",
      accent: "#FFFFFF",
      collar: "#111111",
      cuff: "#111111",
      text: "#111111",
      number: "#111111",
      patternType: "pinstripes"
    },
    defaultName: "BRANDT",
    defaultNum: 10,
    patch: "Bundesliga"
  },
  {
    id: "psg-home-24",
    title: "Paris Saint-Germain 24/25 Home Kit",
    team: "Paris Saint-Germain",
    league: "Ligue 1",
    category: "Football",
    type: "Home",
    edition: "Player Issue",
    priceUSD: 119.99,
    rating: 4.8,
    reviewsCount: 195,
    season: "2024/25",
    description: "Returns to the iconic central Hechter red and white brushstroke stripe over a deep midnight Parisian blue base, celebrating French street art culture.",
    colors: {
      primary: "#002044",
      secondary: "#DA291C",
      accent: "#FFFFFF",
      collar: "#002044",
      cuff: "#DA291C",
      text: "#FFFFFF",
      number: "#FFFFFF",
      patternType: "hechter"
    },
    defaultName: "DEMBÉLÉ",
    defaultNum: 10,
    patch: "Ligue 1 Champions"
  },
  {
    id: "arg-copa-24",
    title: "Argentina 2024 3-Star Champions Kit",
    team: "Argentina",
    league: "International",
    category: "National",
    type: "Home",
    edition: "Player Issue",
    priceUSD: 129.99,
    rating: 5.0,
    reviewsCount: 620,
    season: "2024",
    description: "Worn during their triumphant Copa América title defense. Classic Albiceleste vertical sky blue and white stripes with brilliant metallic gold 3-stars crest.",
    colors: {
      primary: "#75AADB",
      secondary: "#FFFFFF",
      accent: "#D4AF37",
      collar: "#FFFFFF",
      cuff: "#75AADB",
      text: "#D4AF37",
      number: "#D4AF37",
      patternType: "stripes"
    },
    defaultName: "MESSI",
    defaultNum: 10,
    patch: "Copa América Champions"
  },
  {
    id: "esp-euro-24",
    title: "Spain 2024 Euro Champions Kit",
    team: "Spain",
    league: "International",
    category: "National",
    type: "Home",
    edition: "Player Issue",
    priceUSD: 124.99,
    rating: 5.0,
    reviewsCount: 410,
    season: "2024",
    description: "Worn by La Roja while conquering Euro 2024. Dynamic wave patterns embedded into vibrant Spanish red, featuring the iconic national carnation flower emblem.",
    colors: {
      primary: "#CE1126",
      secondary: "#FCD116",
      accent: "#002B7F",
      collar: "#FCD116",
      cuff: "#FCD116",
      text: "#FCD116",
      number: "#FCD116",
      patternType: "plain"
    },
    defaultName: "LAMINE YAMAL",
    defaultNum: 19,
    patch: "UEFA Euro 2024 Champions"
  },
  {
    id: "por-euro-24",
    title: "Portugal 2024 Euro Home Kit",
    team: "Portugal",
    league: "International",
    category: "National",
    type: "Home",
    edition: "Stadium Fan",
    priceUSD: 94.99,
    rating: 4.9,
    reviewsCount: 330,
    season: "2024",
    description: "Classic rich University Red paired with dark green contrast trims honoring the Portuguese national flag, crafted for Cristiano Ronaldo's 6th European Championship campaign.",
    colors: {
      primary: "#C4161C",
      secondary: "#006600",
      accent: "#FFD700",
      collar: "#006600",
      cuff: "#006600",
      text: "#FFD700",
      number: "#FFD700",
      patternType: "plain"
    },
    defaultName: "RONALDO",
    defaultNum: 7,
    patch: "UEFA Euro 2024"
  },
  {
    id: "brazil-home-24",
    title: "Brazil 2024 Copa Home Kit",
    team: "Brazil",
    league: "International",
    category: "National",
    type: "Home",
    edition: "Stadium Fan",
    priceUSD: 89.99,
    rating: 4.8,
    reviewsCount: 290,
    season: "2024",
    description: "Bright energetic Canarinho yellow infused with an intricate all-over embossed graphic celebrating Brazilian fauna, flora, and Rio coastline textures.",
    colors: {
      primary: "#FFDF00",
      secondary: "#009C3B",
      accent: "#002776",
      collar: "#009C3B",
      cuff: "#009C3B",
      text: "#002776",
      number: "#002776",
      patternType: "plain"
    },
    defaultName: "VINICIUS JR",
    defaultNum: 7,
    patch: "CBF 5 Stars"
  },
  {
    id: "japan-y3-24",
    title: "Japan 2024 Y-3 Special Edition Kit",
    team: "Japan",
    league: "International",
    category: "National",
    type: "Special",
    edition: "Player Issue",
    priceUSD: 134.99,
    rating: 5.0,
    reviewsCount: 340,
    season: "2024",
    description: "Avant-garde collaboration designed by Yohji Yamamoto. Features hand-painted blue flame graphics surging through a pitch-black foundation.",
    colors: {
      primary: "#0B111E",
      secondary: "#0091FF",
      accent: "#FFFFFF",
      collar: "#0B111E",
      cuff: "#0091FF",
      text: "#FFFFFF",
      number: "#00D9F5",
      patternType: "flame"
    },
    defaultName: "KUBO",
    defaultNum: 20,
    patch: "JFA Samurai Blue"
  },
  {
    id: "fra-retro-98",
    title: "France 1998 World Cup Final Retro",
    team: "France",
    league: "Retro",
    category: "Retro",
    type: "Home",
    edition: "Retro",
    priceUSD: 94.99,
    rating: 5.0,
    reviewsCount: 560,
    season: "1998",
    description: "The immortal tri-color masterpiece worn by Zinedine Zidane when scoring twice in the 1998 World Cup Final at the Stade de France.",
    colors: {
      primary: "#0A3B8C",
      secondary: "#E2001A",
      accent: "#FFFFFF",
      collar: "#FFFFFF",
      cuff: "#FFFFFF",
      text: "#FFFFFF",
      number: "#FFFFFF",
      patternType: "tri-stripe"
    },
    defaultName: "ZIDANE",
    defaultNum: 10,
    patch: "FIFA World Cup 1998 Final"
  },
  {
    id: "bra-retro-70",
    title: "Brazil 1970 World Cup Final Retro",
    team: "Brazil",
    league: "Retro",
    category: "Retro",
    type: "Home",
    edition: "Retro",
    priceUSD: 94.99,
    rating: 5.0,
    reviewsCount: 480,
    season: "1970",
    description: "The legendary Pelé #10 classic kit worn by the greatest World Cup squad in history. Pure canary yellow with green crew collar and cuffs.",
    colors: {
      primary: "#FFD200",
      secondary: "#008000",
      accent: "#002B7F",
      collar: "#008000",
      cuff: "#008000",
      text: "#002B7F",
      number: "#002B7F",
      patternType: "plain"
    },
    defaultName: "PELÉ",
    defaultNum: 10,
    patch: "FIFA World Cup 1970 Champions"
  }
];

// ==========================================
// 2. REAL-TIME FOOTBALL MATCHES DATA
// ==========================================
let MATCHES_DATA = {
  live: [
    {
      id: "match-ucl-1",
      tournament: "UEFA Champions League • Semi-Final",
      status: "live",
      minute: "76'",
      homeTeam: "Real Madrid",
      homeKitId: "rm-home-24",
      homeScore: 2,
      awayTeam: "Bayern Munich",
      awayKitId: "bayern-home-24",
      awayScore: 1,
      venue: "Santiago Bernabéu, Madrid",
      events: [
        "⚽ 32' Bellingham (Real Madrid)",
        "⚽ 53' Kane (Penalty, Bayern Munich)",
        "⚽ 74' Vinicius Jr (Real Madrid)"
      ],
      possession: { home: 56, away: 44 }
    },
    {
      id: "match-pl-1",
      tournament: "Premier League • Matchday 9",
      status: "live",
      minute: "63'",
      homeTeam: "Arsenal FC",
      homeKitId: "ars-away-24",
      homeScore: 2,
      awayTeam: "Chelsea FC",
      awayKitId: "che-home-24",
      awayScore: 0,
      venue: "Emirates Stadium, London",
      events: [
        "⚽ 19' Saka (Arsenal)",
        "⚽ 61' Havertz (Arsenal)"
      ],
      possession: { home: 52, away: 48 }
    },
    {
      id: "match-ucl-2",
      tournament: "UEFA Champions League • Group Stage",
      status: "live",
      minute: "81'",
      homeTeam: "FC Barcelona",
      homeKitId: "fcb-home-24",
      homeScore: 3,
      awayTeam: "Paris Saint-Germain",
      awayKitId: "psg-home-24",
      awayScore: 2,
      venue: "Estadi Olímpic, Barcelona",
      events: [
        "⚽ 14' Lewandowski (Barcelona)",
        "⚽ 29' Dembélé (PSG)",
        "⚽ 48' Raphinha (Barcelona)",
        "⚽ 63' Barcola (PSG)",
        "⚽ 79' Lamine Yamal (Barcelona)"
      ],
      possession: { home: 58, away: 42 }
    }
  ],
  upcoming: [
    {
      id: "match-up-1",
      tournament: "Premier League • Super Sunday",
      kickoff: "Tonight 20:00 GMT",
      countdown: "Starts in 2h 45m",
      homeTeam: "Liverpool FC",
      homeKitId: "liv-home-24",
      awayTeam: "Manchester City",
      awayKitId: "mancity-home-24",
      venue: "Anfield, Liverpool",
      note: "Top of the table clash"
    },
    {
      id: "match-up-2",
      tournament: "Serie A • Derby della Madonnina",
      kickoff: "Tomorrow 19:45 GMT",
      countdown: "Starts in 24h",
      homeTeam: "Inter Milan",
      homeKitId: "inter-home-24",
      awayTeam: "AC Milan",
      awayKitId: "milan-home-24",
      venue: "San Siro, Milan",
      note: "Historic Milan Derby"
    },
    {
      id: "match-up-3",
      tournament: "Bundesliga • Der Klassiker",
      kickoff: "Saturday 17:30 GMT",
      countdown: "3 days to kickoff",
      homeTeam: "Borussia Dortmund",
      homeKitId: "bvb-home-24",
      awayTeam: "Bayern Munich",
      awayKitId: "bayern-home-24",
      venue: "Signal Iduna Park, Dortmund",
      note: "Germany's biggest rivalry"
    },
    {
      id: "match-up-4",
      tournament: "FIFA World Cup Qualifiers",
      kickoff: "Sunday 21:00 GMT",
      countdown: "4 days to kickoff",
      homeTeam: "Argentina",
      homeKitId: "arg-copa-24",
      awayTeam: "Brazil",
      awayKitId: "brazil-home-24",
      venue: "Estadio Monumental, Buenos Aires",
      note: "South American Superclásico"
    },
    {
      id: "match-up-5",
      tournament: "UEFA Nations League • League A",
      kickoff: "Tuesday 19:45 GMT",
      countdown: "6 days to kickoff",
      homeTeam: "Spain",
      homeKitId: "esp-euro-24",
      awayTeam: "Portugal",
      awayKitId: "por-euro-24",
      venue: "Santiago Bernabéu, Madrid",
      note: "Iberian Derby"
    },
    {
      id: "match-up-6",
      tournament: "International Friendly",
      kickoff: "Wednesday 18:30 GMT",
      countdown: "7 days to kickoff",
      homeTeam: "France",
      homeKitId: "fra-retro-98",
      awayTeam: "Japan",
      awayKitId: "japan-y3-24",
      venue: "Stade de France, Paris",
      note: "Intercontinental showcase"
    }
  ],
  results: [
    {
      id: "match-res-1",
      tournament: "UEFA Champions League Final",
      homeTeam: "Real Madrid",
      homeKitId: "rm-home-24",
      homeScore: 2,
      awayTeam: "Borussia Dortmund",
      awayKitId: "bvb-home-24",
      awayScore: 0,
      venue: "Wembley Stadium, London",
      events: ["⚽ 74' Carvajal", "⚽ 83' Vinicius Jr"],
      status: "finished"
    },
    {
      id: "match-res-2",
      tournament: "UEFA Euro 2024 Final",
      homeTeam: "Spain",
      homeKitId: "esp-euro-24",
      homeScore: 2,
      awayTeam: "Arsenal FC", // represented by English players
      awayScore: 1,
      venue: "Olympiastadion, Berlin",
      events: ["⚽ 47' Williams", "⚽ 86' Oyarzabal | ⚽ 73' Palmer"],
      status: "finished"
    },
    {
      id: "match-res-3",
      tournament: "Copa América 2024 Final",
      homeTeam: "Argentina",
      homeKitId: "arg-copa-24",
      homeScore: 1,
      awayTeam: "Brazil",
      awayKitId: "brazil-home-24",
      awayScore: 0,
      venue: "Hard Rock Stadium, Miami",
      events: ["⚽ 112' Lautaro Martínez (AET)"],
      status: "finished"
    }
  ]
};

// ==========================================
// 3. CURRENCY & EXCHANGE RATES
// ==========================================
const CURRENCIES = {
  USD: { symbol: "$", rate: 1.0 },
  EUR: { symbol: "€", rate: 0.92 },
  GBP: { symbol: "£", rate: 0.79 },
  INR: { symbol: "₹", rate: 83.5 }
};

let currentCurrency = "INR";

function formatPrice(amount, explicitCurrency = null) {
  const num = typeof amount === "number" ? amount : parseFloat(amount || 0);
  const targetCurrency = explicitCurrency || currentCurrency || "INR";

  if (targetCurrency === "INR") {
    return `₹${Math.round(num).toLocaleString("en-IN")}`;
  }
  if (targetCurrency === "USD") {
    return `$${num.toFixed(2)}`;
  }
  if (targetCurrency === "EUR") {
    return `€${num.toFixed(2)}`;
  }
  if (targetCurrency === "GBP") {
    return `£${num.toFixed(2)}`;
  }

  const curr = CURRENCIES[targetCurrency] || CURRENCIES.INR;
  const converted = (explicitCurrency && explicitCurrency === targetCurrency)
    ? Math.round(num)
    : Math.round(num * (targetCurrency === currentCurrency ? 1 : curr.rate));

  return `${curr.symbol}${converted}`;
}

// ==========================================
// SHOPIFY INTEGRATION STATE & CART HANDLERS
// ==========================================
let shopifyProducts = [];
let activeCart = null;
let shopifyCartId = (function() {
  try {
    const stored = localStorage.getItem("shopify_cart_id");
    return (stored && stored.startsWith("gid://shopify/Cart/")) ? stored : null;
  } catch (_) { return null; }
})();
let isShopifyLoading = false;
let shopifyLoadError = null;

function openCartDrawer() {
  const dialog = document.getElementById("cartDrawerDialog");
  if (dialog && !dialog.open) {
    dialog.showModal();
  }
}

/**
 * Global helper to add an item to the cart (Shopify Cart API or local demo fallback)
 */
async function handleAddToCart(variantIdOrKitId, quantity = 1, attributes = []) {
  if (window.shopifyApi && window.SHOPIFY_CONFIG && window.SHOPIFY_CONFIG.isConfigured) {
    try {
      activeCart = await window.shopifyApi.addToCart(shopifyCartId, variantIdOrKitId, quantity, attributes);
      if (activeCart && activeCart.id) {
        shopifyCartId = activeCart.id;
      }
      updateCartUI();
      return activeCart;
    } catch (err) {
      console.error("Shopify addToCart failed:", err);
      showToast("Shopify Cart Error: " + err.message, true);
      throw err;
    }
  } else {
    // Local demo cart fallback
    const allKits = shopifyProducts.length > 0 ? shopifyProducts : JERSEYS_DATA;
    const kit = allKits.find(k => k.id === variantIdOrKitId) || allKits[0];
    cart.push({
      cartId: "demo-" + Date.now() + Math.random().toString(36).substr(2, 4),
      kitId: kit.id,
      title: kit.title,
      team: kit.team || "Official Kit",
      edition: kit.edition || "Fan Edition",
      size: "M",
      priceUSD: kit.price !== undefined ? kit.price : kit.priceUSD,
      quantity: quantity
    });
    saveCart();
    return null;
  }
}

/**
 * Global helper to update cart line quantity
 */
async function handleUpdateCartLine(lineId, quantity) {
  if (window.shopifyApi && window.SHOPIFY_CONFIG && window.SHOPIFY_CONFIG.isConfigured && activeCart) {
    try {
      activeCart = await window.shopifyApi.updateCartLine(shopifyCartId, lineId, quantity);
      updateCartUI();
    } catch (err) {
      console.error("Shopify updateCartLine failed:", err);
      showToast("Could not update item: " + err.message, true);
    }
  } else {
    const item = cart.find(i => i.cartId === lineId);
    if (!item) return;
    item.quantity = quantity;
    if (item.quantity <= 0) {
      cart = cart.filter(i => i.cartId !== lineId);
    }
    saveCart();
  }
}

/**
 * Global helper to remove a line from cart
 */
async function handleRemoveCartLine(lineId) {
  if (window.shopifyApi && window.SHOPIFY_CONFIG && window.SHOPIFY_CONFIG.isConfigured && activeCart) {
    try {
      activeCart = await window.shopifyApi.removeCartLine(shopifyCartId, lineId);
      updateCartUI();
    } catch (err) {
      console.error("Shopify removeCartLine failed:", err);
      showToast("Could not remove item: " + err.message, true);
    }
  } else {
    cart = cart.filter(i => i.cartId !== lineId);
    saveCart();
  }
}

// ==========================================
// 4. CUSTOMER PROFILE & ACCOUNT MANAGEMENT
// ==========================================
let customerState = {
  name: "",
  email: "",
  phone: ""
};

function loadCustomerState() {
  try {
    const saved = localStorage.getItem("half_time_customer");
    if (saved) {
      customerState = JSON.parse(saved);
    }
  } catch (_) {}
  updateCustomerUI();
}

function saveCustomerState(name, email, phone) {
  customerState = {
    name: name ? name.trim() : "",
    email: email ? email.trim() : "",
    phone: phone ? phone.trim() : ""
  };
  try {
    localStorage.setItem("half_time_customer", JSON.stringify(customerState));
  } catch (_) {}
  updateCustomerUI();
}

function updateCustomerUI() {
  const headerName = document.getElementById("headerCustomerName");
  if (headerName) {
    headerName.textContent = customerState.name ? customerState.name.split(" ")[0] : "Account";
  }

  const cartName = document.getElementById("cartCustomerName");
  const cartEmail = document.getElementById("cartCustomerEmail");
  const cartPhone = document.getElementById("cartCustomerPhone");
  if (cartName && !cartName.value) cartName.value = customerState.name || "";
  if (cartEmail && !cartEmail.value) cartEmail.value = customerState.email || "";
  if (cartPhone && !cartPhone.value) cartPhone.value = customerState.phone || "";

  const modalName = document.getElementById("modalCustomerName");
  const modalEmail = document.getElementById("modalCustomerEmail");
  const modalPhone = document.getElementById("modalCustomerPhone");
  if (modalName) modalName.value = customerState.name || "";
  if (modalEmail) modalEmail.value = customerState.email || "";
  if (modalPhone) modalPhone.value = customerState.phone || "";
  const modalFavClub = document.getElementById("modalCustomerFavClub");
  if (modalFavClub && customerPreferences && customerPreferences.favoriteTeam) {
    modalFavClub.value = customerPreferences.favoriteTeam;
  }
}

function initCustomerProfileModal() {
  const openBtn = document.getElementById("openCustomerBtn");
  const footerBtn = document.getElementById("footerCustomerLink");
  const closeBtn = document.getElementById("closeCustomerModalBtn");
  const dialog = document.getElementById("customerProfileDialog");
  const form = document.getElementById("customerProfileForm");

  const openModal = (e) => {
    if (e) e.preventDefault();
    updateCustomerUI();
    if (dialog) dialog.showModal();
  };

  if (openBtn) openBtn.addEventListener("click", openModal);
  if (footerBtn) footerBtn.addEventListener("click", openModal);
  if (closeBtn && dialog) closeBtn.addEventListener("click", () => dialog.close());

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("modalCustomerName")?.value || "";
      const email = document.getElementById("modalCustomerEmail")?.value || "";
      const phone = document.getElementById("modalCustomerPhone")?.value || "";
      saveCustomerState(name, email, phone);
      showToast("✓ Customer details saved!");
      if (dialog) dialog.close();
    });
  }

  loadCustomerState();
}

// ==========================================
// 4B. CUSTOMER FAVORITE PREFERENCES STATE
// ==========================================
let customerPreferences = JSON.parse(localStorage.getItem("vortex_customer_preferences") || JSON.stringify({
  favoriteTeam: "Real Madrid",
  edition: "fan",
  sleeve: "short",
  customName: "BELLINGHAM",
  customNum: 5
}));

function saveCustomerPreferences(prefs) {
  customerPreferences = { ...customerPreferences, ...prefs };
  localStorage.setItem("vortex_customer_preferences", JSON.stringify(customerPreferences));
  applyCustomerPreferencesUI();
}

function applyCustomerPreferencesUI() {
  const favTeam = customerPreferences.favoriteTeam;
  const headerBtnLabel = document.getElementById("headerFavClubLabel");
  const greetingHeading = document.getElementById("favClubGreeting");
  const greetingDesc = document.getElementById("favClubDescription");
  const favSelect = document.getElementById("favClubSelect");
  const modalSelect = document.getElementById("modalFavTeamSelect");
  const favPill = document.getElementById("filterByFavClubPill");

  if (headerBtnLabel) {
    headerBtnLabel.textContent = favTeam ? `⭐ ${favTeam}` : "Select Favorite Club";
  }

  if (favSelect && favTeam) favSelect.value = favTeam;
  if (modalSelect && favTeam) modalSelect.value = favTeam;
  const modalFavClub = document.getElementById("modalCustomerFavClub");
  if (modalFavClub && favTeam) modalFavClub.value = favTeam;

  if (greetingHeading) {
    greetingHeading.textContent = favTeam ? `⭐ Your Favorite Football Club: ${favTeam}` : "Select Your Favorite Football Club";
  }

  if (greetingDesc) {
    greetingDesc.textContent = favTeam
      ? `We've personalized your football experience for ${favTeam}. Kits from your club are starred below with 1-click filtering.`
      : "Choose your favorite team to personalize your store experience, highlight matchday kits, and auto-apply your favorite player preferences.";
  }

  if (favPill) {
    if (favTeam) {
      favPill.hidden = false;
      favPill.textContent = `⭐ My Team: ${favTeam}`;
    } else {
      favPill.hidden = true;
    }
  }

  renderProducts(); // Refresh favorite badges on products
}

// ==========================================
// 5. PERSISTENT CART & WISHLIST STORE
// ==========================================
let cart = JSON.parse(localStorage.getItem("vortex_cart_items") || "[]");
let wishlist = JSON.parse(localStorage.getItem("vortex_wishlist_ids") || "[]");
let activeCoupon = null;

function saveCart() {
  localStorage.setItem("vortex_cart_items", JSON.stringify(cart));
  updateCartUI();
}

function saveWishlist() {
  localStorage.setItem("vortex_wishlist_ids", JSON.stringify(wishlist));
  updateWishlistUI();
}

// ==========================================
// 6. DYNAMIC SVG VECTOR FOOTBALL JERSEY GENERATOR
// ==========================================
function generateJerseySVG(kit, options = {}) {
  const isBack = options.isBack || false;
  const isLongSleeve = options.isLongSleeve || false;
  const name = (options.name || kit.defaultName || "").toUpperCase();
  const num = options.number !== undefined ? options.number : kit.defaultNum;

  const c = kit.colors;
  const primary = c.primary;
  const secondary = c.secondary;
  const accent = c.accent;
  const collar = c.collar;
  const cuff = c.cuff;
  const textColor = c.text || "#FFFFFF";
  const numColor = c.number || "#FFFFFF";

  // Dynamic Pattern overlays
  let patternMarkup = "";

  if (c.patternType === "stripes") {
    patternMarkup = `
      <g opacity="0.95">
        <rect x="110" y="55" width="22" height="280" fill="${secondary}"/>
        <rect x="168" y="55" width="22" height="280" fill="${secondary}"/>
        <rect x="65" y="80" width="20" height="250" fill="${secondary}"/>
        <rect x="215" y="80" width="20" height="250" fill="${secondary}"/>
      </g>
    `;
  } else if (c.patternType === "half") {
    patternMarkup = `
      <path d="M 150 50 L 150 335 L 240 335 C 245 335 250 330 250 320 L 255 130 L 210 50 Z" fill="${secondary}"/>
    `;
  } else if (c.patternType === "hechter") {
    patternMarkup = `
      <rect x="130" y="50" width="40" height="285" fill="${secondary}"/>
      <rect x="126" y="50" width="4" height="285" fill="${accent}"/>
      <rect x="170" y="50" width="4" height="285" fill="${accent}"/>
    `;
  } else if (c.patternType === "tri-stripe") {
    patternMarkup = `
      <rect x="60" y="160" width="180" height="24" fill="${secondary}"/>
      <rect x="60" y="188" width="180" height="6" fill="${accent}"/>
      <rect x="60" y="198" width="180" height="6" fill="${accent}"/>
      <rect x="60" y="208" width="180" height="6" fill="${accent}"/>
    `;
  } else if (c.patternType === "pinstripes") {
    patternMarkup = `
      <g opacity="0.85">
        <line x1="100" y1="60" x2="100" y2="335" stroke="${secondary}" stroke-width="2.5" stroke-dasharray="8 4"/>
        <line x1="125" y1="60" x2="125" y2="335" stroke="${secondary}" stroke-width="2.5" stroke-dasharray="8 4"/>
        <line x1="150" y1="60" x2="150" y2="335" stroke="${secondary}" stroke-width="2.5" stroke-dasharray="8 4"/>
        <line x1="175" y1="60" x2="175" y2="335" stroke="${secondary}" stroke-width="2.5" stroke-dasharray="8 4"/>
        <line x1="200" y1="60" x2="200" y2="335" stroke="${secondary}" stroke-width="2.5" stroke-dasharray="8 4"/>
      </g>
    `;
  } else if (c.patternType === "flame") {
    patternMarkup = `
      <path d="M 150 120 Q 130 190 145 240 Q 120 280 150 330 Q 175 270 158 230 Q 170 180 150 120 Z" fill="${secondary}" opacity="0.8" filter="blur(2px)"/>
      <path d="M 148 150 Q 136 200 148 240 Q 160 200 148 150 Z" fill="#FFFFFF" opacity="0.6"/>
    `;
  } else if (c.patternType === "houndstooth") {
    patternMarkup = `
      <defs>
        <pattern id="htPattern" width="12" height="12" patternUnits="userSpaceOnUse">
          <rect width="6" height="6" fill="rgba(0,0,0,0.04)"/>
          <rect x="6" y="6" width="6" height="6" fill="rgba(0,0,0,0.04)"/>
        </pattern>
      </defs>
      <rect x="80" y="50" width="140" height="280" fill="url(#htPattern)"/>
    `;
  }

  // Sleeves path: short vs long sleeve
  const sleevePath = isLongSleeve
    ? `
      <!-- Long Sleeves Extension -->
      <polygon points="30,142 15,250 42,255 72,158" fill="${primary}"/>
      <polygon points="270,142 285,250 258,255 228,158" fill="${primary}"/>
      <polygon points="15,250 42,255 40,245 17,242" fill="${cuff}"/>
      <polygon points="285,250 258,255 260,245 283,242" fill="${cuff}"/>
    `
    : `
      <!-- Short Sleeve Cuffs -->
      <polygon points="30,142 72,158 75,150 35,135" fill="${cuff}"/>
      <polygon points="270,142 228,158 225,150 265,135" fill="${cuff}"/>
    `;

  return `
    <svg viewBox="0 0 300 360" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="jerseyDrop" x="-15%" y="-15%" width="130%" height="130%">
          <feDropShadow dx="0" dy="14" stdDeviation="12" flood-color="#000" flood-opacity="0.45"/>
        </filter>
        <linearGradient id="bodyMesh" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#000" stop-opacity="0.22"/>
          <stop offset="30%" stop-color="#fff" stop-opacity="0.08"/>
          <stop offset="70%" stop-color="#fff" stop-opacity="0.06"/>
          <stop offset="100%" stop-color="#000" stop-opacity="0.25"/>
        </linearGradient>
      </defs>

      <!-- Jersey Silhouette -->
      <g filter="url(#jerseyDrop)">
        <path d="
          M 105 45 
          L 55 78 
          L 30 142 
          L 72 158 
          L 80 125 
          L 80 325 
          C 80 335 88 340 98 340 
          L 202 340 
          C 212 340 220 335 220 325 
          L 220 125 
          L 228 158 
          L 270 142 
          L 245 78 
          L 195 45 
          Z" 
          fill="${primary}" 
        />

        <!-- Pattern Overlay -->
        ${patternMarkup}

        <!-- 3D Shading Overlay -->
        <path d="
          M 105 45 
          L 55 78 
          L 30 142 
          L 72 158 
          L 80 125 
          L 80 325 
          C 80 335 88 340 98 340 
          L 202 340 
          C 212 340 220 335 220 325 
          L 220 125 
          L 228 158 
          L 270 142 
          L 245 78 
          L 195 45 
          Z" 
          fill="url(#bodyMesh)" 
        />

        <!-- Sleeves (Short vs Long) -->
        ${sleevePath}

        <!-- Collar Structure -->
        <path d="M 110 45 C 130 68 170 68 190 45 C 175 60 125 60 110 45 Z" fill="${collar}"/>
        <path d="M 125 45 C 138 56 162 56 175 45 Z" fill="#000" opacity="0.3"/>
      </g>

      ${!isBack ? `
        <!-- FRONT DETAILS: Crest, Sponsor, Brand -->
        <g transform="translate(112, 105)">
          <circle cx="0" cy="0" r="14" fill="${accent}" stroke="#FFFFFF" stroke-width="1.5"/>
          <path d="M -6 -4 L 6 -4 L 4 5 L 0 8 L -4 5 Z" fill="${secondary}"/>
        </g>
        <g transform="translate(188, 105)">
          <path d="M -8 3 L 8 -5 L 4 5 Z" fill="${accent}"/>
        </g>
        <g transform="translate(150, 190)">
          <rect x="-46" y="-12" width="92" height="24" rx="4" fill="rgba(0,0,0,0.22)" stroke="${textColor}" stroke-width="1.5"/>
          <text x="0" y="5" font-family="'Inter', sans-serif" font-size="11" font-weight="800" fill="${textColor}" text-anchor="middle" letter-spacing="1.5">AUTHENTIC</text>
        </g>
        <rect x="90" y="315" width="18" height="10" rx="2" fill="#D4AF37" stroke="#FFF" stroke-width="0.5"/>
      ` : `
        <!-- BACK DETAILS: Custom Football Name & Squad Number -->
        <text x="150" y="115" 
          font-family="'Inter', sans-serif" 
          font-size="18" 
          font-weight="800" 
          fill="${textColor}" 
          text-anchor="middle" 
          letter-spacing="3"
          filter="drop-shadow(0 2px 4px rgba(0,0,0,0.6))"
        >
          ${name}
        </text>

        <text x="150" y="235" 
          font-family="'Bebas Neue', sans-serif" 
          font-size="110" 
          font-weight="700" 
          fill="${numColor}" 
          text-anchor="middle"
          stroke="rgba(0,0,0,0.4)"
          stroke-width="2"
          letter-spacing="2"
          filter="drop-shadow(0 4px 8px rgba(0,0,0,0.6))"
        >
          ${num}
        </text>

        <rect x="140" y="60" width="20" height="4" rx="2" fill="${accent}"/>
        <circle cx="150" cy="325" r="5" fill="${accent}" opacity="0.7"/>
      `}
    </svg>
  `;
}

// Simple Club Crest Logo SVG helper for Match Center
function getClubCrestSVG(teamName) {
  const kit = JERSEYS_DATA.find(k => k.team.toLowerCase() === teamName.toLowerCase());
  const primary = kit ? kit.colors.primary : "#FFFFFF";
  const secondary = kit ? kit.colors.secondary : "#00F5A0";
  const accent = kit ? kit.colors.accent : "#FFB800";

  return `
    <svg viewBox="0 0 32 32" width="100%" height="100%">
      <circle cx="16" cy="16" r="14" fill="${secondary}" stroke="${accent}" stroke-width="2"/>
      <path d="M 10 12 L 22 12 L 19 23 L 16 26 L 13 23 Z" fill="${primary}"/>
      <circle cx="16" cy="18" r="3" fill="${accent}"/>
    </svg>
  `;
}

// ==========================================
// 7. TOAST NOTIFICATION UTILITY
// ==========================================
function showToast(message, isError = false) {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${isError ? 'toast-error' : ''}`;
  toast.innerHTML = `
    <svg viewBox="0 0 24 24" width="18" height="18" stroke="${isError ? '#FF3B56' : '#00F5A0'}" stroke-width="2" fill="none">
      ${isError ? '<circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>' : '<polyline points="20 6 9 17 4 12"></polyline>'}
    </svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// ==========================================
// 8. MODERN DIALOG SETUP WITH LIGHT DISMISS
// ==========================================
function setupDialog(dialogId, closeBtnId) {
  const dialog = document.getElementById(dialogId);
  const closeBtn = document.getElementById(closeBtnId);
  if (!dialog) return;

  if (closeBtn) {
    closeBtn.addEventListener("click", () => dialog.close());
  }

  // MANDATORY Modern Web Guidance Fallback:
  if (!('closedBy' in HTMLDialogElement.prototype)) {
    dialog.addEventListener("click", (event) => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      const isContent = (
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width
      );
      if (!isContent) {
        dialog.close();
      }
    });
  }
}

// ==========================================
// 9. HERO BANNER INITIALIZATION
// ==========================================
function initHeroShowcase() {
  const container = document.getElementById("heroJerseySvgContainer");
  const titleEl = document.getElementById("heroJerseyTitle");
  const subEl = document.getElementById("heroJerseySubtitle");
  const quickBuyBtn = document.getElementById("heroQuickBuyBtn");
  if (!container) return;

  if (shopifyProducts.length > 0) {
    const featured = shopifyProducts.find(p => p.availableForSale) || shopifyProducts[0];
    if (featured.featuredImage) {
      container.innerHTML = `<img src="${featured.featuredImage}" alt="${featured.title}" class="hero-featured-img">`;
    }
    if (titleEl) titleEl.textContent = featured.title;
    if (subEl) subEl.textContent = `Official Match Edition • ${formatPrice(featured.price, featured.currencyCode)} • ${featured.availableForSale ? 'In Stock' : 'Sold Out'}`;
    if (quickBuyBtn) {
      quickBuyBtn.textContent = `⚡ Quick View • ${formatPrice(featured.price, featured.currencyCode)}`;
      quickBuyBtn.onclick = () => openQuickView(featured.id);
    }
    return;
  }

  // Initial placeholder while loading
  if (quickBuyBtn) {
    quickBuyBtn.onclick = () => {
      const section = document.getElementById("productGridSection");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    };
  }
}

// ==========================================
// 10. CUSTOM FOOTBALL KIT STUDIO
// ==========================================
let customizerState = {
  selectedKitId: JERSEYS_DATA[0].id,
  isBack: false,
  isLongSleeve: false,
  edition: "fan", // 'fan' or 'player' (+35)
  customName: "BELLINGHAM",
  customNum: 5,
  patchLeague: true, // +8
  patchStarball: false, // +10
  size: "M"
};

function initCustomizerStudio() {
  const stage = document.getElementById("customizerStage");
  if (!stage) return;
  renderCustomizerKitList();
  bindCustomizerEvents();
  updateCustomizerView();
}

function renderCustomizerKitList() {
  const tray = document.getElementById("customizerKitSelector");
  if (!tray) return;

  tray.innerHTML = JERSEYS_DATA.map(kit => `
    <div class="kit-selector-card ${kit.id === customizerState.selectedKitId ? 'active' : ''}" data-id="${kit.id}">
      <div class="kit-thumb-mini">
        ${generateJerseySVG(kit, { isBack: false })}
      </div>
      <span class="kit-card-name">${kit.team}</span>
      <span class="kit-card-team">${kit.type} ${kit.season}</span>
    </div>
  `).join("");

  tray.querySelectorAll(".kit-selector-card").forEach(card => {
    card.addEventListener("click", () => {
      selectCustomizerKit(card.dataset.id);
    });
  });
}

function selectCustomizerKit(kitId) {
  const kit = JERSEYS_DATA.find(k => k.id === kitId);
  if (!kit) return;

  customizerState.selectedKitId = kit.id;
  customizerState.customName = kit.defaultName || "CHAMPION";
  customizerState.customNum = kit.defaultNum || 10;

  const nameInput = document.getElementById("customNameInput");
  const numInput = document.getElementById("customNumberInput");
  if (nameInput) nameInput.value = customizerState.customName;
  if (numInput) numInput.value = customizerState.customNum;

  document.querySelectorAll("#customizerKitSelector .kit-selector-card").forEach(el => {
    el.classList.toggle("active", el.dataset.id === kit.id);
  });

  updateCustomizerView();
}

function bindCustomizerEvents() {
  const frontBtn = document.getElementById("viewFrontBtn");
  const backBtn = document.getElementById("viewBackBtn");
  const resetBtn = document.getElementById("resetZoomBtn");

  if (frontBtn && backBtn) {
    frontBtn.addEventListener("click", () => {
      customizerState.isBack = false;
      frontBtn.classList.add("active");
      backBtn.classList.remove("active");
      updateCustomizerView();
    });

    backBtn.addEventListener("click", () => {
      customizerState.isBack = true;
      backBtn.classList.add("active");
      frontBtn.classList.remove("active");
      updateCustomizerView();
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      customizerState.isBack = false;
      if (frontBtn) frontBtn.classList.add("active");
      if (backBtn) backBtn.classList.remove("active");
      updateCustomizerView();
    });
  }

  // Edition Radio
  document.querySelectorAll("input[name='editionRadio']").forEach(radio => {
    radio.addEventListener("change", (e) => {
      customizerState.edition = e.target.value;
      updateCustomizerView();
    });
  });

  // Sleeve Radio
  document.querySelectorAll("input[name='sleeveRadio']").forEach(radio => {
    radio.addEventListener("change", (e) => {
      customizerState.isLongSleeve = e.target.value === "long";
      updateCustomizerView();
    });
  });

  // Name & Number inputs
  const nameInput = document.getElementById("customNameInput");
  const numInput = document.getElementById("customNumberInput");

  if (nameInput) {
    nameInput.addEventListener("input", (e) => {
      customizerState.customName = e.target.value.toUpperCase();
      if (!customizerState.isBack) {
        customizerState.isBack = true;
        if (backBtn) backBtn.classList.add("active");
        if (frontBtn) frontBtn.classList.remove("active");
      }
      updateCustomizerView();
    });
  }

  if (numInput) {
    numInput.addEventListener("input", (e) => {
      customizerState.customNum = e.target.value.slice(0, 2);
      if (!customizerState.isBack) {
        customizerState.isBack = true;
        if (backBtn) backBtn.classList.add("active");
        if (frontBtn) frontBtn.classList.remove("active");
      }
      updateCustomizerView();
    });
  }

  // Legend Presets Toggle
  const quickLegendBtn = document.getElementById("quickLegendBtn");
  const legendPresetsTray = document.getElementById("legendPresetsTray");
  if (quickLegendBtn && legendPresetsTray) {
    quickLegendBtn.addEventListener("click", () => {
      legendPresetsTray.hidden = !legendPresetsTray.hidden;
    });

    legendPresetsTray.querySelectorAll(".preset-pill").forEach(pill => {
      pill.addEventListener("click", () => {
        customizerState.customName = pill.dataset.name;
        customizerState.customNum = parseInt(pill.dataset.num, 10);
        if (nameInput) nameInput.value = customizerState.customName;
        if (numInput) numInput.value = customizerState.customNum;
        legendPresetsTray.hidden = true;
        customizerState.isBack = true;
        if (backBtn) backBtn.classList.add("active");
        if (frontBtn) frontBtn.classList.remove("active");
        updateCustomizerView();
      });
    });
  }

  // Sleeve Badges
  const patchLeague = document.getElementById("patchLeagueCheckbox");
  const patchStarball = document.getElementById("patchStarballCheckbox");

  if (patchLeague) {
    patchLeague.addEventListener("change", (e) => {
      customizerState.patchLeague = e.target.checked;
      updateCustomizerView();
    });
  }

  if (patchStarball) {
    patchStarball.addEventListener("change", (e) => {
      customizerState.patchStarball = e.target.checked;
      updateCustomizerView();
    });
  }

  // Size pills
  document.querySelectorAll("#customizerSizePills .size-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      document.querySelectorAll("#customizerSizePills .size-pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      customizerState.size = pill.dataset.size;
    });
  });

  // Load My Favorite Team button in customizer
  const loadFavBtn = document.getElementById("applyFavoriteToCustomizerBtn");
  if (loadFavBtn) {
    loadFavBtn.addEventListener("click", () => {
      const favTeam = customerPreferences.favoriteTeam;
      if (!favTeam) {
        showToast("Please choose your favorite team first!");
        const dialog = document.getElementById("favoriteOptionsDialog");
        if (dialog) dialog.showModal();
        return;
      }
      const matchKit = JERSEYS_DATA.find(k => k.team.toLowerCase().includes(favTeam.toLowerCase()));
      if (matchKit) {
        selectCustomizerKit(matchKit.id);
        if (customerPreferences.customName) {
          customizerState.customName = customerPreferences.customName;
          if (nameInput) nameInput.value = customizerState.customName;
        }
        if (customerPreferences.customNum) {
          customizerState.customNum = customerPreferences.customNum;
          if (numInput) numInput.value = customizerState.customNum;
        }
        if (customerPreferences.edition) {
          customizerState.edition = customerPreferences.edition;
          const radio = document.querySelector(`input[name='editionRadio'][value='${customerPreferences.edition}']`);
          if (radio) radio.checked = true;
        }
        if (customerPreferences.sleeve) {
          customizerState.isLongSleeve = customerPreferences.sleeve === "long";
          const radio = document.querySelector(`input[name='sleeveRadio'][value='${customerPreferences.sleeve}']`);
          if (radio) radio.checked = true;
        }
        updateCustomizerView();
        showToast(`Loaded your favorite ${favTeam} preferences!`);
      }
    });
  }

  // Add Custom Kit to Cart
  const addBtn = document.getElementById("addCustomKitToCartBtn");
  if (addBtn) {
    addBtn.addEventListener("click", addCustomKitToCart);
  }
}

function updateCustomizerView() {
  const kit = JERSEYS_DATA.find(k => k.id === customizerState.selectedKitId) || JERSEYS_DATA[0];
  const holder = document.getElementById("liveJerseySvgHolder");
  if (holder) {
    holder.innerHTML = generateJerseySVG(kit, {
      isBack: customizerState.isBack,
      isLongSleeve: customizerState.isLongSleeve,
      name: customizerState.customName,
      number: customizerState.customNum
    });
  }

  const indicator = document.getElementById("badgeIndicatorText");
  if (indicator) {
    const badges = [];
    if (customizerState.patchLeague) badges.push("League Patch");
    if (customizerState.patchStarball) badges.push("UCL Starball");
    indicator.textContent = badges.length ? `${badges.join(" + ")} Attached` : "No Badges Attached";
  }

  // Pricing calculations
  const basePrice = kit.priceUSD;
  const editionFee = customizerState.edition === "player" ? 35 : 0;
  const sleeveFee = customizerState.isLongSleeve ? 10 : 0;
  const printingFee = (customizerState.customName || customizerState.customNum) ? 15 : 0;
  let badgesFee = 0;
  if (customizerState.patchLeague) badgesFee += 8;
  if (customizerState.patchStarball) badgesFee += 10;

  const total = basePrice + editionFee + sleeveFee + printingFee + badgesFee;

  document.getElementById("custBasePrice").textContent = formatPrice(basePrice);
  document.getElementById("custEditionPrice").textContent = editionFee > 0 ? `Match Player Issue (+${formatPrice(editionFee)})` : `Fan Issue ($0.00)`;
  document.getElementById("custSleevePrice").textContent = sleeveFee > 0 ? `Long Sleeve (+${formatPrice(sleeveFee)})` : `Short Sleeve ($0.00)`;
  document.getElementById("custPrintingPrice").textContent = `+${formatPrice(printingFee)}`;
  document.getElementById("custBadgesPrice").textContent = `+${formatPrice(badgesFee)}`;
  document.getElementById("custTotalPrice").textContent = formatPrice(total);
}

async function addCustomKitToCart() {
  const kit = JERSEYS_DATA.find(k => k.id === customizerState.selectedKitId) || JERSEYS_DATA[0];
  const editionFee = customizerState.edition === "player" ? 35 : 0;
  const sleeveFee = customizerState.isLongSleeve ? 10 : 0;
  const printingFee = (customizerState.customName || customizerState.customNum) ? 15 : 0;
  let badgesFee = 0;
  if (customizerState.patchLeague) badgesFee += 8;
  if (customizerState.patchStarball) badgesFee += 10;

  const unitPrice = kit.priceUSD + editionFee + sleeveFee + printingFee + badgesFee;

  // If connected to Shopify, attach custom attributes to Shopify line item
  if (window.shopifyApi && window.SHOPIFY_CONFIG && window.SHOPIFY_CONFIG.isConfigured && shopifyProducts.length > 0) {
    const matchedProduct = shopifyProducts.find(p =>
      p.title.toLowerCase().includes(kit.team.toLowerCase()) ||
      (p.team && p.team.toLowerCase().includes(kit.team.toLowerCase()))
    ) || shopifyProducts[0];

    const matchedVariant = matchedProduct.variants.find(v =>
      v.title.toUpperCase().includes(customizerState.size.toUpperCase())
    ) || matchedProduct.variants.find(v => v.availableForSale) || matchedProduct.variants[0];

    if (!matchedVariant || !matchedVariant.availableForSale) {
      showToast(`Sorry, ${matchedProduct.title} is currently out of stock.`, true);
      return;
    }

    const customAttrs = [
      { key: "Custom Name", value: (customizerState.customName || "NONE").toUpperCase() },
      { key: "Custom Number", value: String(customizerState.customNum || "") },
      { key: "Edition", value: customizerState.edition === "player" ? "Match Player Issue" : "Stadium Fan" },
      { key: "Sleeve", value: customizerState.isLongSleeve ? "Long Sleeve" : "Short Sleeve" },
      {
        key: "Patches",
        value: [
          customizerState.patchLeague ? "Official League Patch" : null,
          customizerState.patchStarball ? "UCL Starball Badge" : null
        ].filter(Boolean).join(", ") || "None"
      }
    ];

    try {
      await handleAddToCart(matchedVariant.id, 1, customAttrs);
      showToast(`Added custom ${matchedProduct.title} (${customizerState.customName} #${customizerState.customNum}) to your bag!`);
      openCartDrawer();
      return;
    } catch (err) {
      showToast("Shopify: " + err.message, true);
      return;
    }
  }

  // Fallback demo cart
  const cartItem = {
    cartId: "custom-" + Date.now(),
    kitId: kit.id,
    title: kit.title,
    team: kit.team,
    edition: customizerState.edition === "player" ? "Match Player Issue" : "Stadium Fan",
    sleeve: customizerState.isLongSleeve ? "Long Sleeve" : "Short Sleeve",
    size: customizerState.size,
    customName: customizerState.customName,
    customNum: customizerState.customNum,
    patches: [
      customizerState.patchLeague ? "League Badge" : null,
      customizerState.patchStarball ? "UCL Starball" : null
    ].filter(Boolean),
    priceUSD: unitPrice,
    quantity: 1
  };

  cart.push(cartItem);
  saveCart();
  showToast(`Added custom ${kit.team} kit (${customizerState.customName} #${customizerState.customNum}) to your bag!`);

  openCartDrawer();
}

// ==========================================
// 11. CUSTOMER FAVORITE HUB & OPTIONS MODAL
// ==========================================
function initFavoriteOptions() {
  const dialog = document.getElementById("favoriteOptionsDialog");
  if (!dialog) return;
  setupDialog("favoriteOptionsDialog", "closeFavOptionsBtn");

  const openHeaderBtn = document.getElementById("openFavOptionsBtn");
  const openHubBtn = document.getElementById("hubOpenOptionsBtn");

  const openModal = () => {
    const dialog = document.getElementById("favoriteOptionsDialog");
    if (!dialog) return;

    // Populate current values
    const select = document.getElementById("modalFavTeamSelect");
    if (select) select.value = customerPreferences.favoriteTeam || "";

    const nameInput = document.getElementById("prefCustomName");
    if (nameInput) nameInput.value = customerPreferences.customName || "";

    const numInput = document.getElementById("prefCustomNum");
    if (numInput) numInput.value = customerPreferences.customNum || "";

    const editionRadio = document.querySelector(`input[name='prefEdition'][value='${customerPreferences.edition}']`);
    if (editionRadio) editionRadio.checked = true;

    const sleeveRadio = document.querySelector(`input[name='prefSleeve'][value='${customerPreferences.sleeve}']`);
    if (sleeveRadio) sleeveRadio.checked = true;

    dialog.showModal();
  };

  if (openHeaderBtn) openHeaderBtn.addEventListener("click", openModal);
  if (openHubBtn) openHubBtn.addEventListener("click", openModal);

  // Quick save from the hub dropdown
  const saveHubBtn = document.getElementById("saveFavClubBtn");
  const favHubSelect = document.getElementById("favClubSelect");
  if (saveHubBtn && favHubSelect) {
    saveHubBtn.addEventListener("click", () => {
      const selected = favHubSelect.value;
      if (!selected) {
        showToast("Please choose a team from the dropdown!");
        return;
      }
      saveCustomerPreferences({ favoriteTeam: selected });
      showToast(`⭐ Set ${selected} as your favorite team!`);
    });
  }

  // Save from modal form
  const form = document.getElementById("favOptionsForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const team = document.getElementById("modalFavTeamSelect")?.value;
      const customName = document.getElementById("prefCustomName")?.value.toUpperCase().trim() || "CHAMPION";
      const customNum = parseInt(document.getElementById("prefCustomNum")?.value || "10", 10);
      const edition = document.querySelector("input[name='prefEdition']:checked")?.value || "fan";
      const sleeve = document.querySelector("input[name='prefSleeve']:checked")?.value || "short";

      saveCustomerPreferences({
        favoriteTeam: team,
        customName: customName,
        customNum: customNum,
        edition: edition,
        sleeve: sleeve
      });

      const dialog = document.getElementById("favoriteOptionsDialog");
      if (dialog) dialog.close();
      showToast(`⭐ Your favorite football preferences have been saved!`);
    });
  }

  applyCustomerPreferencesUI();

  // Favorite club filter pill toggle
  const favPill = document.getElementById("filterByFavClubPill");
  if (favPill) {
    favPill.addEventListener("click", () => {
      const favTeam = customerPreferences.favoriteTeam;
      if (!favTeam) return;

      const searchInput = document.getElementById("headerSearchInput");
      const clearBtn = document.getElementById("clearSearchBtn");

      if (filterState.searchQuery === favTeam.toLowerCase().trim()) {
        filterState.searchQuery = "";
        if (searchInput) searchInput.value = "";
        if (clearBtn) clearBtn.hidden = true;
        favPill.classList.remove("active");
        renderProducts();
        showToast("Cleared favorite club filter.");
      } else {
        filterState.searchQuery = favTeam.toLowerCase().trim();
        if (searchInput) searchInput.value = favTeam;
        if (clearBtn) clearBtn.hidden = false;
        favPill.classList.add("active");
        renderProducts();
        const section = document.getElementById("productGridSection");
        if (section) section.scrollIntoView({ behavior: "smooth" });
        showToast(`Filtered jerseys for your favorite club: ${favTeam}!`);
      }
    });
  }

  // Top header Live Scores navigation click
  const liveScoresBtn = document.getElementById("navLiveScoresBtn");
  if (liveScoresBtn) {
    liveScoresBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const section = document.getElementById("matchCenterSection");
      if (section) section.scrollIntoView({ behavior: "smooth" });
      const liveTab = document.getElementById("tabLiveBtn");
      if (liveTab) liveTab.click();
    });
  }
}

// ==========================================
// 12. PRODUCT CATALOG GRID & FILTERING
// ==========================================
let filterState = {
  searchQuery: "",
  status: "all", // "all", "in-stock", "sold-out"
  sortBy: "featured"
};

function initProductGrid() {
  bindCatalogControls();
  renderProducts();
}

function bindCatalogControls() {
  const searchInput = document.getElementById("headerSearchInput");
  const clearSearchBtn = document.getElementById("clearSearchBtn");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      filterState.searchQuery = e.target.value.toLowerCase().trim();
      if (clearSearchBtn) clearSearchBtn.hidden = !filterState.searchQuery;
      renderProducts();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener("click", () => {
      if (searchInput) searchInput.value = "";
      filterState.searchQuery = "";
      clearSearchBtn.hidden = true;
      renderProducts();
    });
  }

  // Status Filter Pills (All, In Stock, Sold Out)
  const statusPills = document.querySelectorAll("#statusFilterPills .pill-btn");
  statusPills.forEach(pill => {
    pill.addEventListener("click", () => {
      statusPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      filterState.status = pill.dataset.filter || "all";
      renderProducts();
    });
  });

  // Sort dropdown
  const sortSelect = document.getElementById("priceSortSelect");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      filterState.sortBy = e.target.value;
      renderProducts();
    });
  }

  // Reset filters
  const resetBtn = document.getElementById("resetFiltersBtn");
  const clearAllBtn = document.getElementById("clearAllFiltersBtn");
  const resetAction = () => {
    filterState = {
      searchQuery: "",
      status: "all",
      sortBy: "featured"
    };
    if (searchInput) searchInput.value = "";
    if (clearSearchBtn) clearSearchBtn.hidden = true;
    if (sortSelect) sortSelect.value = "featured";
    const allPill = document.querySelector('#statusFilterPills [data-filter="all"]');
    if (allPill) {
      statusPills.forEach(p => p.classList.remove("active"));
      allPill.classList.add("active");
    }
    renderProducts();
  };

  if (resetBtn) resetBtn.addEventListener("click", resetAction);
  if (clearAllBtn) clearAllBtn.addEventListener("click", resetAction);

  // In Stock shortcut buttons
  const heroInStockBtn = document.getElementById("heroInStockCtaBtn");
  const navInStockBtn = document.getElementById("navInStockBtn");
  const footerInStockLink = document.getElementById("footerInStockLink");
  const switchToInStock = (e) => {
    if (e) e.preventDefault();
    const inStockPill = document.querySelector('#statusFilterPills [data-filter="in-stock"]');
    if (inStockPill) inStockPill.click();
    const section = document.getElementById("productGridSection");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };
  if (heroInStockBtn) heroInStockBtn.addEventListener("click", switchToInStock);
  if (navInStockBtn) navInStockBtn.addEventListener("click", switchToInStock);
  if (footerInStockLink) footerInStockLink.addEventListener("click", switchToInStock);

  // Size Advisor shortcuts
  const navSizeBtn = document.getElementById("navSizeAdvisorBtn");
  const footerSizeGuideLink = document.getElementById("footerSizeGuideLink");
  const openSizeAdvisor = (e) => {
    if (e) e.preventDefault();
    const guide = document.getElementById("sizeGuideDialog");
    if (guide) guide.showModal();
  };
  if (navSizeBtn) navSizeBtn.addEventListener("click", openSizeAdvisor);
  if (footerSizeGuideLink) footerSizeGuideLink.addEventListener("click", openSizeAdvisor);

  // Sync from Shopify button
  const refreshShopifyBtn = document.getElementById("refreshShopifyBtn");
  if (refreshShopifyBtn) {
    refreshShopifyBtn.addEventListener("click", async () => {
      refreshShopifyBtn.classList.add("loading");
      showToast("🔄 Syncing latest products from Shopify...");
      await loadShopifyData();
      refreshShopifyBtn.classList.remove("loading");
    });
  }
}

function updateFilterCounts() {
  const allBtn = document.querySelector('#statusFilterPills [data-filter="all"]');
  const inStockBtn = document.querySelector('#statusFilterPills [data-filter="in-stock"]');
  const soldOutBtn = document.querySelector('#statusFilterPills [data-filter="sold-out"]');

  const total = shopifyProducts.length;
  const inStock = shopifyProducts.filter(p => p.availableForSale).length;
  const soldOut = total - inStock;

  if (allBtn) allBtn.textContent = `All Products (${total})`;
  if (inStockBtn) inStockBtn.textContent = `In Stock (${inStock})`;
  if (soldOutBtn) soldOutBtn.textContent = `Sold Out (${soldOut})`;
}

function renderProducts() {
  const grid = document.getElementById("productGrid");
  const emptyState = document.getElementById("emptySearchState");
  const counterText = document.getElementById("productCounterText");
  if (!grid) return;

  const activeProductList = shopifyProducts;

  if (isShopifyLoading && activeProductList.length === 0) {
    grid.innerHTML = `
      <div class="catalog-loading" style="grid-column: 1 / -1; padding: 60px 20px;">
        <div class="loading-spinner"></div>
        <span style="font-size: 1.05rem; font-weight: 500;">Connecting to Half Time Store live catalogue...</span>
      </div>
    `;
    if (counterText) counterText.textContent = "Connecting to Shopify...";
    if (emptyState) emptyState.hidden = true;
    return;
  }

  if (shopifyLoadError && activeProductList.length === 0) {
    grid.innerHTML = `
      <div class="shopify-config-banner" style="grid-column: 1 / -1; text-align: center; padding: 40px 20px;">
        <span class="banner-icon" style="font-size: 2rem; display: block; margin-bottom: 12px;">⚠️</span>
        <div>
          <strong style="font-size: 1.1rem; color: #fff;">Unable to load Shopify Storefront products:</strong><br>
          <span style="color: #ef4444; font-size: 0.95rem; display: block; margin-top: 8px;">${shopifyLoadError}</span>
          <p style="margin-top: 12px; font-size: 0.88rem; color: var(--text-muted); max-width: 500px; margin-left: auto; margin-right: auto;">
            Note: Browsers block cross-origin API calls on <code>file:///</code> URLs. Run via a local web server (e.g. <code>python -m http.server 3000</code>) or on GitHub Pages to connect.
          </p>
          <button type="button" class="btn btn-secondary btn-sm" onclick="loadShopifyData()" style="margin-top: 16px;">
            🔄 Retry Shopify Sync
          </button>
        </div>
      </div>
    `;
    if (counterText) counterText.textContent = "Shopify connection error";
    if (emptyState) emptyState.hidden = true;
    return;
  }

  let filtered = activeProductList.filter(kit => {
    // Status filter (in-stock vs sold-out)
    if (filterState.status === "in-stock" && !kit.availableForSale) {
      return false;
    }
    if (filterState.status === "sold-out" && kit.availableForSale) {
      return false;
    }

    if (filterState.searchQuery) {
      const q = filterState.searchQuery.toLowerCase();
      const matchTitle = (kit.title || "").toLowerCase().includes(q);
      const matchTeam = (kit.team || "").toLowerCase().includes(q);
      const matchDesc = (kit.description || "").toLowerCase().includes(q);
      const matchTags = (kit.tags || []).some(t => t.toLowerCase().includes(q));
      if (!matchTitle && !matchTeam && !matchDesc && !matchTags) return false;
    }

    return true;
  });

  // Sorting
  if (filterState.sortBy === "price-asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (filterState.sortBy === "price-desc") {
    filtered.sort((a, b) => b.price - a.price);
  }

  if (counterText) {
    counterText.textContent = `Showing ${filtered.length} of ${activeProductList.length} jerseys from Half Time Store`;
  }

  updateFilterCounts();

  if (filtered.length === 0) {
    grid.innerHTML = "";
    if (emptyState) emptyState.hidden = false;
    return;
  }

  if (emptyState) emptyState.hidden = true;

  const cardsHtml = filtered.map(kit => {
    const isWished = wishlist.includes(kit.id);
    const isSoldOut = !kit.availableForSale;
    const priceDisplay = formatPrice(kit.price, kit.currencyCode);

    const imageHtml = kit.featuredImage
      ? `<img src="${kit.featuredImage}" alt="${kit.title}" class="product-card-img" loading="lazy">`
      : `<div class="product-card-placeholder"><svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" stroke-width="1.5" fill="none"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path></svg><span>Official Kit</span></div>`;

    const variantLabel = kit.variants && kit.variants.length > 1
      ? `${kit.variants.length} Sizes Available (${kit.variants.map(v => v.title).join(", ")})`
      : (kit.variants && kit.variants.length === 1 ? `Size: ${kit.variants[0].title}` : 'Official Match Edition');

    return `
      <div class="product-card ${isSoldOut ? 'is-sold-out' : ''}" data-id="${kit.id}">
        <div class="card-top-badges">
          <span class="card-edition-pill ${isSoldOut ? 'pill-sold-out' : 'pill-in-stock'}">
            ${isSoldOut ? 'Sold Out' : 'In Stock'}
          </span>
          <button class="wishlist-heart-btn ${isWished ? 'active' : ''}" data-id="${kit.id}" title="${isWished ? 'Remove from Saved' : 'Save Kit'}" aria-label="Toggle Saved Kit">
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="${isWished ? 'currentColor' : 'none'}">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
        </div>

        <div class="card-image-wrap" data-id="${kit.id}">
          ${imageHtml}
          <button class="quick-view-overlay-btn" data-id="${kit.id}">⚡ Quick View</button>
        </div>

        <div class="card-body">
          <div class="card-league-row">
            <span class="card-league">${kit.league || kit.productType || 'Official Kit'}</span>
            <span class="card-rating">★ 4.9</span>
          </div>

          <h3 class="card-title">${kit.title}</h3>
          <p class="card-season-type">${variantLabel}</p>

          <div class="card-footer">
            <div class="card-price-box">
              <span class="card-price-label">Price</span>
              <span class="card-price">${priceDisplay}</span>
            </div>
            <div class="card-actions">
              <button class="card-quick-add" data-id="${kit.id}" ${isSoldOut ? 'disabled style="opacity:0.5; cursor:not-allowed;"' : ''}>
                <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" stroke-width="2" fill="none"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line></svg>
                <span>${isSoldOut ? 'Sold Out' : (kit.variants && kit.variants.length > 1 ? 'Select Size' : 'Add to Bag')}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join("");

  grid.innerHTML = cardsHtml;
  bindProductCardEvents();
}

function bindProductCardEvents() {
  document.querySelectorAll(".wishlist-heart-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleWishlist(btn.dataset.id);
    });
  });

  document.querySelectorAll(".quick-view-overlay-btn, .card-image-wrap").forEach(el => {
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      openQuickView(el.dataset.id);
    });
  });

  document.querySelectorAll(".card-quick-add").forEach(btn => {
    btn.addEventListener("click", async (e) => {
      e.stopPropagation();
      const kit = shopifyProducts.find(k => k.id === btn.dataset.id);
      if (!kit) return;

      if (!kit.availableForSale) {
        showToast(`Sorry, ${kit.title} is sold out!`, true);
        return;
      }

      // If multiple size variants exist, open Quick View so customer can pick size
      if (kit.variants && kit.variants.length > 1) {
        openQuickView(kit.id);
        return;
      }

      const availableVariant = kit.variants[0];
      if (!availableVariant || !availableVariant.availableForSale) {
        showToast(`Sorry, ${kit.title} is sold out!`, true);
        return;
      }

      const originalHtml = btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML = `<span>Adding...</span>`;

      try {
        await handleAddToCart(availableVariant.id, 1, []);
        showToast(`Added ${kit.title} to your bag!`);
        openCartDrawer();
      } catch (err) {
        showToast("Shopify: " + err.message, true);
      } finally {
        btn.disabled = false;
        btn.innerHTML = originalHtml;
      }
    });
  });
}

// ==========================================
// 13. MATCHDAY LIVE CENTER ENGINE
// ==========================================
let currentMatchTab = "live";
let liveSimulationTimer = null;

function initMatchCenter() {
  const container = document.getElementById("matchCardsContainer");
  if (!container) return;
  bindMatchCenterTabs();
  renderMatchCards();
  initMatchSimulator();

  const refreshBtn = document.getElementById("refreshScoresBtn");
  if (refreshBtn) {
    refreshBtn.addEventListener("click", () => {
      simulateScoreUpdate(true);
      showToast("⚡ Football scores refreshed to live minute!");
    });
  }
}

function bindMatchCenterTabs() {
  const tabs = document.querySelectorAll(".match-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");
      currentMatchTab = tab.dataset.tab;
      renderMatchCards();
    });
  });
}

function renderMatchCards() {
  const container = document.getElementById("matchCardsContainer");
  if (!container) return;

  const matches = MATCHES_DATA[currentMatchTab] || [];

  if (matches.length === 0) {
    container.innerHTML = `<div class="empty-state">No ${currentMatchTab} matches at this moment.</div>`;
    return;
  }

  if (currentMatchTab === "live") {
    container.innerHTML = matches.map(match => `
      <div class="match-card is-live" data-match-id="${match.id}">
        <div class="match-card-header">
          <span class="match-league-name">${match.tournament}</span>
          <span class="match-status-badge live">
            <span class="live-dot-pulse"></span>
            <span>LIVE ${match.minute}</span>
          </span>
        </div>

        <div class="match-card-body">
          <!-- Home Team -->
          <div class="match-team">
            <div class="match-team-crest">
              ${getClubCrestSVG(match.homeTeam)}
            </div>
            <span class="match-team-name">${match.homeTeam}</span>
            <button class="shop-kit-match-btn" onclick="shopKitForTeam('${match.homeKitId}')">
              👕 Shop Kit
            </button>
          </div>

          <!-- Scoreboard -->
          <div class="match-scoreboard">
            <div class="live-score-display">${match.homeScore} - ${match.awayScore}</div>
            <span class="match-minute-label">${match.minute}</span>
          </div>

          <!-- Away Team -->
          <div class="match-team">
            <div class="match-team-crest">
              ${getClubCrestSVG(match.awayTeam)}
            </div>
            <span class="match-team-name">${match.awayTeam}</span>
            <button class="shop-kit-match-btn" onclick="shopKitForTeam('${match.awayKitId}')">
              👕 Shop Kit
            </button>
          </div>
        </div>

        <!-- Live Events -->
        ${match.events && match.events.length ? `
          <div class="match-events-list">
            ${match.events.map(ev => `<div class="match-event-item">${ev}</div>`).join("")}
          </div>
        ` : ''}

        <!-- Live Stats Bar -->
        <div class="match-stats-bar-wrap">
          <div class="match-stats-labels">
            <span>Possession: ${match.possession.home}%</span>
            <span>${match.possession.away}%</span>
          </div>
          <div class="match-stats-bar">
            <div class="stats-fill-home" style="width: ${match.possession.home}%;"></div>
            <div class="stats-fill-away" style="width: ${match.possession.away}%;"></div>
          </div>
        </div>
      </div>
    `).join("");
  } else if (currentMatchTab === "upcoming") {
    container.innerHTML = matches.map(fixture => `
      <div class="match-card" data-match-id="${fixture.id}">
        <div class="match-card-header">
          <span class="match-league-name">${fixture.tournament}</span>
          <span class="match-status-badge upcoming">
            <span>📅 ${fixture.kickoff}</span>
          </span>
        </div>

        <div class="match-card-body">
          <div class="match-team">
            <div class="match-team-crest">
              ${getClubCrestSVG(fixture.homeTeam)}
            </div>
            <span class="match-team-name">${fixture.homeTeam}</span>
            <button class="shop-kit-match-btn" onclick="shopKitForTeam('${fixture.homeKitId}')">
              👕 Match Kit
            </button>
          </div>

          <div class="match-scoreboard">
            <div class="live-score-display" style="font-size: 1.8rem; color: var(--secondary);">VS</div>
            <span class="match-minute-label" style="color: var(--secondary);">${fixture.countdown}</span>
          </div>

          <div class="match-team">
            <div class="match-team-crest">
              ${getClubCrestSVG(fixture.awayTeam)}
            </div>
            <span class="match-team-name">${fixture.awayTeam}</span>
            <button class="shop-kit-match-btn" onclick="shopKitForTeam('${fixture.awayKitId}')">
              👕 Match Kit
            </button>
          </div>
        </div>

        <div class="upcoming-fixture-info">
          <span>🏟️ <strong>${fixture.venue}</strong></span>
          <span style="color: var(--text-dim); font-size: 0.74rem;">${fixture.note || ''}</span>
        </div>
      </div>
    `).join("");
  } else if (currentMatchTab === "results") {
    container.innerHTML = matches.map(res => `
      <div class="match-card" data-match-id="${res.id}">
        <div class="match-card-header">
          <span class="match-league-name">${res.tournament}</span>
          <span class="match-status-badge finished">FULL TIME</span>
        </div>

        <div class="match-card-body">
          <div class="match-team">
            <div class="match-team-crest">
              ${getClubCrestSVG(res.homeTeam)}
            </div>
            <span class="match-team-name">${res.homeTeam}</span>
            <button class="shop-kit-match-btn" onclick="shopKitForTeam('${res.homeKitId}')">
              👕 Shop Kit
            </button>
          </div>

          <div class="match-scoreboard">
            <div class="live-score-display">${res.homeScore} - ${res.awayScore}</div>
            <span class="match-minute-label" style="color: var(--text-muted);">FT</span>
          </div>

          <div class="match-team">
            <div class="match-team-crest">
              ${getClubCrestSVG(res.awayTeam)}
            </div>
            <span class="match-team-name">${res.awayTeam}</span>
            <button class="shop-kit-match-btn" onclick="shopKitForTeam('${res.awayKitId}')">
              👕 Shop Kit
            </button>
          </div>
        </div>

        <div class="match-events-list">
          ${res.events.map(ev => `<div class="match-event-item">${ev}</div>`).join("")}
        </div>
      </div>
    `).join("");
  }
}

// Global hook for direct Shop Kit buttons from Match cards
window.shopKitForTeam = function(kitId) {
  const kit = JERSEYS_DATA.find(k => k.id === kitId);
  const teamName = kit ? kit.team : kitId;

  const searchInput = document.getElementById("headerSearchInput");
  const clearBtn = document.getElementById("clearSearchBtn");
  if (searchInput) {
    searchInput.value = teamName;
    if (clearBtn) clearBtn.hidden = false;
  }
  filterState.searchQuery = teamName.toLowerCase().trim();
  renderProducts();

  const section = document.getElementById("productGridSection");
  if (section) section.scrollIntoView({ behavior: "smooth" });
  showToast(`Showing official jerseys for ${teamName}!`);
};

// Simulation of live football action
function initMatchSimulator() {
  const toggle = document.getElementById("liveTickerToggle");
  if (!toggle) return;

  const startLoop = () => {
    if (liveSimulationTimer) clearInterval(liveSimulationTimer);
    liveSimulationTimer = setInterval(() => {
      if (toggle.checked) {
        simulateScoreUpdate(false);
      }
    }, 28000); // Check every 28 seconds
  };

  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      startLoop();
      showToast("Live score auto-updates enabled!");
    } else {
      if (liveSimulationTimer) clearInterval(liveSimulationTimer);
      showToast("Live score auto-updates paused.");
    }
  });

  startLoop();
}

function simulateScoreUpdate(isManual = false) {
  const liveMatches = MATCHES_DATA.live;
  if (!liveMatches.length) return;

  // Increment minute
  liveMatches.forEach(m => {
    let currMin = parseInt(m.minute, 10);
    if (!isNaN(currMin) && currMin < 90) {
      currMin += 1;
      m.minute = `${currMin}'`;
    }
  });

  // Small probability of a goal for excitement
  if (!isManual && Math.random() > 0.4) {
    const match = liveMatches[0]; // Real Madrid vs Bayern
    match.homeScore += 1;
    match.events.push(`⚽ ${match.minute} Bellingham (Real Madrid)`);
    showToast(`⚽ GOAL! Bellingham scores for Real Madrid in the ${match.minute}! (Real Madrid ${match.homeScore} - ${match.awayScore} Bayern)`);
  }

  if (currentMatchTab === "live") {
    renderMatchCards();
  }
}

// ==========================================
// 14. PRODUCT QUICK VIEW MODAL
// ==========================================
let currentQvKit = null;
let qvIsBack = false;
let qvSize = "M";
let qvSelectedVariant = null;

function initQuickViewDialog() {
  setupDialog("quickViewDialog", "closeQuickViewBtn");

  const frontBtn = document.getElementById("qvFrontBtn");
  const backBtn = document.getElementById("qvBackBtn");

  if (frontBtn && backBtn) {
    frontBtn.addEventListener("click", () => {
      qvIsBack = false;
      frontBtn.classList.add("active");
      backBtn.classList.remove("active");
      updateQvSvg();
    });

    backBtn.addEventListener("click", () => {
      qvIsBack = true;
      backBtn.classList.add("active");
      frontBtn.classList.remove("active");
      updateQvSvg();
    });
  }

  const customToggle = document.getElementById("qvCustomToggle");
  const customInputs = document.getElementById("qvCustomInputs");
  if (customToggle && customInputs) {
    customToggle.addEventListener("change", (e) => {
      customInputs.hidden = !e.target.checked;
      if (e.target.checked) {
        qvIsBack = true;
        if (backBtn) backBtn.classList.add("active");
        if (frontBtn) frontBtn.classList.remove("active");
      }
      updateQvPrice();
      updateQvSvg();
    });
  }

  const qvName = document.getElementById("qvCustomName");
  const qvNum = document.getElementById("qvCustomNum");
  if (qvName) qvName.addEventListener("input", updateQvSvg);
  if (qvNum) qvNum.addEventListener("input", updateQvSvg);

  const qvAddToCartBtn = document.getElementById("qvAddToCartBtn");
  if (qvAddToCartBtn) {
    qvAddToCartBtn.addEventListener("click", async () => {
      if (!currentQvKit) return;
      const isCustom = customToggle && customToggle.checked;
      const custName = (qvName ? qvName.value : "").toUpperCase().trim();
      const custNum = qvNum ? parseInt(qvNum.value, 10) : (currentQvKit.defaultNum || 10);

      // Shopify product path
      if (currentQvKit.isShopifyProduct) {
        if (!qvSelectedVariant || !qvSelectedVariant.availableForSale) {
          showToast("Selected size/variant is currently out of stock.", true);
          return;
        }

        const customAttrs = [];
        if (isCustom && custName) customAttrs.push({ key: "Player Name", value: custName });
        if (isCustom && !isNaN(custNum)) customAttrs.push({ key: "Squad Number", value: String(custNum) });

        const originalText = qvAddToCartBtn.innerHTML;
        qvAddToCartBtn.disabled = true;
        qvAddToCartBtn.innerHTML = `<span>Adding to Bag...</span>`;

        try {
          await handleAddToCart(qvSelectedVariant.id, 1, customAttrs);
          const dialog = document.getElementById("quickViewDialog");
          if (dialog) dialog.close();
          showToast(`Added ${currentQvKit.title} (${qvSelectedVariant.title}) to your bag!`);
          openCartDrawer();
        } catch (err) {
          showToast("Shopify: " + err.message, true);
        } finally {
          qvAddToCartBtn.disabled = false;
          qvAddToCartBtn.innerHTML = originalText;
        }
        return;
      }

      // Demo kit path
      const itemPrice = (currentQvKit.priceUSD || 89.99) + (isCustom ? 15 : 0);
      cart.push({
        cartId: "qv-" + Date.now(),
        kitId: currentQvKit.id,
        title: currentQvKit.title,
        team: currentQvKit.team || "Club",
        edition: currentQvKit.edition || "Fan Edition",
        size: qvSize,
        customName: isCustom && custName ? custName : null,
        customNum: isCustom && !isNaN(custNum) ? custNum : null,
        priceUSD: itemPrice,
        quantity: 1
      });

      saveCart();
      const dialog = document.getElementById("quickViewDialog");
      if (dialog) dialog.close();
      showToast(`Added ${currentQvKit.title} to bag!`);
      openCartDrawer();
    });
  }

  const qvStudioBtn = document.getElementById("qvOpenInStudioBtn");
  if (qvStudioBtn) {
    qvStudioBtn.addEventListener("click", () => {
      if (!currentQvKit) return;
      const dialog = document.getElementById("quickViewDialog");
      if (dialog) dialog.close();
      selectCustomizerKit(currentQvKit.id);
      const section = document.getElementById("customizerSection");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    });
  }

  const sizeGuideLink = document.getElementById("qvSizeGuideLink");
  if (sizeGuideLink) {
    sizeGuideLink.addEventListener("click", () => {
      const guide = document.getElementById("sizeGuideDialog");
      if (guide) guide.showModal();
    });
  }
}

function openQuickView(kitId) {
  const kit = shopifyProducts.find(k => k.id === kitId) || shopifyProducts[0];
  if (!kit) return;
  currentQvKit = kit;
  qvIsBack = false;

  const leagueEl = document.getElementById("qvLeague");
  if (leagueEl) leagueEl.textContent = kit.league || kit.productType || "Official Kit";
  const titleEl = document.getElementById("quickViewTitle");
  if (titleEl) titleEl.textContent = kit.title;
  const editionEl = document.getElementById("qvEditionTag");
  if (editionEl) editionEl.textContent = kit.availableForSale ? "In Stock" : "Sold Out";
  const descEl = document.getElementById("qvDescription");
  if (descEl) descEl.textContent = kit.description || "Authentic official football jersey from Half Time Store.";

  const customToggle = document.getElementById("qvCustomToggle");
  const customInputs = document.getElementById("qvCustomInputs");
  if (customToggle) customToggle.checked = false;
  if (customInputs) customInputs.hidden = true;

  // Render variant pills (sizes)
  renderQvVariants();

  // Render imagery (Real Shopify gallery or SVG)
  renderQvImagery();

  updateQvPrice();

  const dialog = document.getElementById("quickViewDialog");
  if (dialog) dialog.showModal();
}

function renderQvVariants() {
  const sizeRow = document.getElementById("qvSizeRow");
  if (!sizeRow || !currentQvKit) return;

  if (currentQvKit.isShopifyProduct && currentQvKit.variants && currentQvKit.variants.length > 0) {
    // Render real Shopify variants
    const available = currentQvKit.variants.find(v => v.availableForSale) || currentQvKit.variants[0];
    qvSelectedVariant = available;
    qvSize = available.title;

    sizeRow.innerHTML = currentQvKit.variants.map(v => {
      const isSelected = v.id === qvSelectedVariant.id;
      const isSoldOut = !v.availableForSale;
      return `
        <button type="button" class="size-pill ${isSelected ? 'active' : ''} ${isSoldOut ? 'sold-out' : ''}"
          data-variant-id="${v.id}"
          data-size="${v.title}"
          ${isSoldOut ? 'disabled title="Variant Sold Out"' : ''}>
          ${v.title}
        </button>
      `;
    }).join("");

    sizeRow.querySelectorAll(".size-pill:not([disabled])").forEach(pill => {
      pill.addEventListener("click", () => {
        sizeRow.querySelectorAll(".size-pill").forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        qvSelectedVariant = currentQvKit.variants.find(v => v.id === pill.dataset.variantId);
        qvSize = pill.dataset.size;
        updateQvPrice();
      });
    });
  } else {
    // Standard sizes for demo kits
    const defaultSizes = ["S", "M", "L", "XL", "2XL"];
    qvSize = "M";
    qvSelectedVariant = null;

    sizeRow.innerHTML = defaultSizes.map(s => `
      <button type="button" class="size-pill ${s === 'M' ? 'active' : ''}" data-size="${s}">${s}</button>
    `).join("");

    sizeRow.querySelectorAll(".size-pill").forEach(pill => {
      pill.addEventListener("click", () => {
        sizeRow.querySelectorAll(".size-pill").forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        qvSize = pill.dataset.size;
        updateQvPrice();
      });
    });
  }
}

function renderQvImagery() {
  const holder = document.getElementById("qvSvgHolder");
  const toggles = document.querySelector(".qv-view-toggles");
  if (!holder || !currentQvKit) return;

  if (currentQvKit.images && currentQvKit.images.length > 0) {
    if (toggles) toggles.style.display = "none";

    const mainImgUrl = currentQvKit.images[0].url;
    let thumbnailsHtml = "";
    if (currentQvKit.images.length > 1) {
      thumbnailsHtml = `
        <div class="qv-thumbnails-row">
          ${currentQvKit.images.map((img, idx) => `
            <button type="button" class="qv-thumb-btn ${idx === 0 ? 'active' : ''}" data-url="${img.url}">
              <img src="${img.url}" alt="${img.altText || currentQvKit.title}">
            </button>
          `).join("")}
        </div>
      `;
    }

    holder.innerHTML = `
      <div class="qv-gallery-main">
        <img src="${mainImgUrl}" alt="${currentQvKit.title}" class="qv-main-img" id="qvMainDisplayImg">
      </div>
      ${thumbnailsHtml}
    `;

    holder.querySelectorAll(".qv-thumb-btn").forEach(thumb => {
      thumb.addEventListener("click", () => {
        holder.querySelectorAll(".qv-thumb-btn").forEach(t => t.classList.remove("active"));
        thumb.classList.add("active");
        const mainImg = document.getElementById("qvMainDisplayImg");
        if (mainImg) mainImg.src = thumb.dataset.url;
      });
    });
  } else {
    if (toggles) toggles.style.display = "flex";
    updateQvSvg();
  }
}

function updateQvSvg() {
  if (!currentQvKit || (currentQvKit.images && currentQvKit.images.length > 0)) return;
  const holder = document.getElementById("qvSvgHolder");
  const qvName = document.getElementById("qvCustomName");
  const qvNum = document.getElementById("qvCustomNum");

  const name = qvName && qvName.value ? qvName.value.toUpperCase() : (currentQvKit.defaultName || "NAME");
  const num = qvNum && qvNum.value ? parseInt(qvNum.value, 10) : (currentQvKit.defaultNum || 10);

  if (holder) {
    holder.innerHTML = generateJerseySVG(currentQvKit, {
      isBack: qvIsBack,
      name: name,
      number: num
    });
  }
}

function updateQvPrice() {
  if (!currentQvKit) return;
  const customToggle = document.getElementById("qvCustomToggle");
  const isCustom = customToggle && customToggle.checked;
  const customFee = isCustom ? 15 : 0;

  let basePrice = 89.99;
  let currencyCode = "USD";
  let isAvailable = currentQvKit.availableForSale;

  if (currentQvKit.isShopifyProduct && qvSelectedVariant) {
    basePrice = qvSelectedVariant.price;
    currencyCode = qvSelectedVariant.currencyCode || currentQvKit.currencyCode;
    isAvailable = Boolean(qvSelectedVariant.availableForSale);
  } else if (currentQvKit.price !== undefined) {
    basePrice = currentQvKit.price;
    currencyCode = currentQvKit.currencyCode;
  }

  const finalTotal = basePrice + customFee;

  const priceTag = document.getElementById("qvPrice");
  const finalPriceTag = document.getElementById("qvFinalPrice");
  const qvAddToCartBtn = document.getElementById("qvAddToCartBtn");
  const qvEditionTag = document.getElementById("qvEditionTag");

  if (priceTag) priceTag.textContent = formatPrice(basePrice, currencyCode);
  if (finalPriceTag) finalPriceTag.textContent = formatPrice(finalTotal, currencyCode);

  if (qvEditionTag) {
    qvEditionTag.textContent = isAvailable ? "In Stock" : "Sold Out";
    qvEditionTag.className = `qv-tag-edition ${isAvailable ? 'pill-in-stock' : 'pill-sold-out'}`;
  }

  if (qvAddToCartBtn) {
    if (!isAvailable) {
      qvAddToCartBtn.disabled = true;
      qvAddToCartBtn.style.opacity = "0.5";
      qvAddToCartBtn.style.cursor = "not-allowed";
      qvAddToCartBtn.innerHTML = `<span>Out of Stock in Shopify</span>`;
    } else {
      qvAddToCartBtn.disabled = false;
      qvAddToCartBtn.style.opacity = "1";
      qvAddToCartBtn.style.cursor = "pointer";
      qvAddToCartBtn.innerHTML = `
        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
        <span>Add to Bag • <span id="qvFinalPrice">${formatPrice(finalTotal, currencyCode)}</span></span>
      `;
    }
  }
}

// ==========================================
// 15. SHOPPING CART DRAWER & CHECKOUT
// ==========================================
function initCartDrawer() {
  setupDialog("cartDrawerDialog", "closeCartBtn");

  const cartOpenBtn = document.getElementById("cartOpenBtn");
  if (cartOpenBtn) {
    cartOpenBtn.addEventListener("click", () => {
      const dialog = document.getElementById("cartDrawerDialog");
      if (dialog) dialog.showModal();
    });
  }

  const exploreBtn = document.getElementById("exploreKitsBtn");
  if (exploreBtn) {
    exploreBtn.addEventListener("click", () => {
      const dialog = document.getElementById("cartDrawerDialog");
      if (dialog) dialog.close();
      const grid = document.getElementById("productGridSection");
      if (grid) grid.scrollIntoView({ behavior: "smooth" });
    });
  }

  // Coupon Engine
  const couponBtn = document.getElementById("applyCouponBtn");
  const couponInput = document.getElementById("couponInput");
  const couponStatus = document.getElementById("couponStatus");

  if (couponBtn && couponInput) {
    couponBtn.addEventListener("click", () => {
      const code = couponInput.value.trim().toUpperCase();
      if (code === "KICKOFF15") {
        activeCoupon = { code: "KICKOFF15", percent: 15 };
        couponStatus.textContent = "✓ Code KICKOFF15 applied: 15% discount!";
        couponStatus.className = "coupon-status success";
        updateCartUI();
        showToast("15% discount code applied!");
      } else {
        couponStatus.textContent = "Invalid code. Try 'KICKOFF15' for 15% off.";
        couponStatus.className = "coupon-status error";
      }
    });
  }

  // Proceed to Checkout
  const checkoutBtn = document.getElementById("proceedCheckoutBtn") || document.getElementById("proceedToCheckoutBtn");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", async () => {
      // 1. Live Shopify Cart checkout
      if (activeCart && activeCart.lines && activeCart.lines.length > 0) {
        if (!activeCart.checkoutUrl) {
          showToast("Shopify checkout URL unavailable. Refreshing cart...", true);
          return;
        }

        // Capture customer details if entered in cart drawer
        const nameVal = document.getElementById("cartCustomerName")?.value || "";
        const emailVal = document.getElementById("cartCustomerEmail")?.value || "";
        const phoneVal = document.getElementById("cartCustomerPhone")?.value || "";

        if (nameVal || emailVal || phoneVal) {
          saveCustomerState(nameVal, emailVal, phoneVal);
        }

        checkoutBtn.disabled = true;
        checkoutBtn.innerHTML = `<span>Connecting to Shopify Checkout...</span>`;

        // If email or phone provided, update Shopify cart buyer identity
        if (window.shopifyApi && window.shopifyApi.updateCartBuyerIdentity && (emailVal || phoneVal)) {
          try {
            await window.shopifyApi.updateCartBuyerIdentity(shopifyCartId, {
              email: emailVal,
              phone: phoneVal
            });
          } catch (_) {}
        }

        showToast("Redirecting to secure Shopify Checkout...");
        window.location.href = activeCart.checkoutUrl;
        return;
      }

      showToast("Your cart is empty! Add a football jersey first.", true);
    });
  }

  updateCartUI();
}

function updateCartUI() {
  const badge = document.getElementById("cartBadge");
  const headerCount = document.getElementById("cartCountHeader");
  const list = document.getElementById("cartItemsList");
  const emptyView = document.getElementById("cartEmptyState");
  const footerView = document.getElementById("cartFooter");
  const customerCard = document.getElementById("cartCustomerCard");

  // Determine if we are rendering Shopify Cart or Demo Cart
  const isShopifyMode = Boolean(activeCart && activeCart.lines);
  const totalCount = isShopifyMode
    ? activeCart.totalQuantity
    : cart.reduce((sum, item) => sum + item.quantity, 0);

  if (badge) badge.textContent = totalCount;
  if (headerCount) headerCount.textContent = totalCount;

  if (totalCount === 0) {
    if (list) list.innerHTML = "";
    if (emptyView) emptyView.hidden = false;
    if (footerView) footerView.hidden = true;
    if (customerCard) customerCard.hidden = true;
    updateFreeShippingTracker(0);
    return;
  }

  if (emptyView) emptyView.hidden = true;
  if (footerView) footerView.hidden = false;
  if (customerCard) customerCard.hidden = false;

  if (list) {
    if (isShopifyMode) {
      // Render live Shopify Cart lines
      list.innerHTML = activeCart.lines.map(item => {
        const currency = item.currencyCode || activeCart.currencyCode;
        const thumbHtml = item.imageUrl
          ? `<img src="${item.imageUrl}" alt="${item.productTitle}">`
          : `<div style="font-size:24px;">⚽</div>`;

        return `
          <div class="cart-line-item" data-line-id="${item.id}">
            <div class="cart-item-img-box">
              ${thumbHtml}
            </div>
            <div class="cart-item-info">
              <h4 class="cart-item-title">${item.productTitle}</h4>
              <div class="cart-item-variant">Option: <strong>${item.variantTitle}</strong></div>
              <div class="cart-item-price">${formatPrice(item.totalPrice, currency)}</div>
            </div>
            <div class="cart-item-actions">
              <div class="qty-control">
                <button class="qty-btn" data-action="dec" data-line-id="${item.id}">-</button>
                <span class="qty-display">${item.quantity}</span>
                <button class="qty-btn" data-action="inc" data-line-id="${item.id}">+</button>
              </div>
              <button class="remove-item-btn" data-line-id="${item.id}" title="Remove item">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
              </button>
            </div>
          </div>
        `;
      }).join("");

      list.querySelectorAll(".remove-item-btn").forEach(btn => {
        btn.addEventListener("click", async () => {
          btn.disabled = true;
          await handleRemoveCartLine(btn.dataset.lineId);
        });
      });

      list.querySelectorAll(".qty-btn").forEach(btn => {
        btn.addEventListener("click", async () => {
          const id = btn.dataset.lineId;
          const item = activeCart.lines.find(i => i.id === id);
          if (!item) return;

          btn.disabled = true;
          if (btn.dataset.action === "inc") {
            await handleUpdateCartLine(id, item.quantity + 1);
          } else if (btn.dataset.action === "dec") {
            if (item.quantity <= 1) {
              await handleRemoveCartLine(id);
            } else {
              await handleUpdateCartLine(id, item.quantity - 1);
            }
          }
        });
      });

      const subtotal = activeCart.subtotal;
      const currency = activeCart.currencyCode;
      const grandTotal = activeCart.total > 0 ? activeCart.total : subtotal;

      const subtotalEl = document.getElementById("cartSubtotal");
      if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal, currency);
      const grandTotalEl = document.getElementById("cartFinalTotal") || document.getElementById("cartGrandTotal");
      if (grandTotalEl) grandTotalEl.textContent = formatPrice(grandTotal, currency);

      updateFreeShippingTracker(subtotal, currency);
      return;
    }

    // Demo Cart Mode
    list.innerHTML = cart.map(item => {
      const kit = JERSEYS_DATA.find(k => k.id === item.kitId) || JERSEYS_DATA[0];
      const hasCustom = item.customName || item.customNum;
      return `
        <div class="cart-item-card" data-cart-id="${item.cartId}">
          <div class="cart-item-thumb">
            ${generateJerseySVG(kit, { isBack: !!hasCustom, name: item.customName, number: item.customNum, isLongSleeve: item.sleeve === "Long Sleeve" })}
          </div>
          <div class="cart-item-details">
            <h4 class="cart-item-title">${item.title}</h4>
            <div class="cart-item-meta">
              <span>Size: <strong>${item.size}</strong> • ${item.edition} ${item.sleeve ? `• ${item.sleeve}` : ''}</span>
            </div>
            ${hasCustom ? `
              <span class="cart-item-customization-pill">
                ⭐ ${item.customName} #${item.customNum} ${item.patches ? `(${item.patches.join(", ")})` : ''}
              </span>
            ` : ''}
          </div>
          <div class="cart-item-price-side">
            <button class="cart-remove-item" data-cart-id="${item.cartId}" title="Remove kit">&times;</button>
            <span class="cart-item-price">${formatPrice(item.priceUSD * item.quantity)}</span>
            <div class="cart-qty-controls">
              <button class="qty-btn" data-action="dec" data-cart-id="${item.cartId}">-</button>
              <span class="qty-val">${item.quantity}</span>
              <button class="qty-btn" data-action="inc" data-cart-id="${item.cartId}">+</button>
            </div>
          </div>
        </div>
      `;
    }).join("");

    list.querySelectorAll(".cart-remove-item").forEach(btn => {
      btn.addEventListener("click", () => {
        cart = cart.filter(i => i.cartId !== btn.dataset.cartId);
        saveCart();
      });
    });

    list.querySelectorAll(".qty-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.cartId;
        const item = cart.find(i => i.cartId === id);
        if (!item) return;

        if (btn.dataset.action === "inc") {
          item.quantity += 1;
        } else if (btn.dataset.action === "dec") {
          item.quantity -= 1;
          if (item.quantity <= 0) {
            cart = cart.filter(i => i.cartId !== id);
          }
        }
        saveCart();
      });
    });

    const subtotalUSD = cart.reduce((sum, item) => sum + (item.priceUSD * item.quantity), 0);
    const freeShippingThreshold = 85.0;
    const isFreeShipping = subtotalUSD >= freeShippingThreshold;
    const shippingFeeUSD = isFreeShipping ? 0 : 9.99;

    let discountUSD = 0;
    if (activeCoupon) {
      discountUSD = (subtotalUSD * (activeCoupon.percent / 100));
    }

    const grandTotalUSD = Math.max(0, subtotalUSD - discountUSD + shippingFeeUSD);

    document.getElementById("cartSubtotal").textContent = formatPrice(subtotalUSD);
    document.getElementById("cartShippingFee").textContent = isFreeShipping ? "FREE" : formatPrice(shippingFeeUSD);
    document.getElementById("cartGrandTotal").textContent = formatPrice(grandTotalUSD);

    const discountRow = document.getElementById("cartDiscountRow");
    const discountAmt = document.getElementById("cartDiscountAmount");
    if (discountRow && discountAmt) {
      if (activeCoupon && discountUSD > 0) {
        discountRow.hidden = false;
        discountAmt.textContent = `-${formatPrice(discountUSD)}`;
      } else {
        discountRow.hidden = true;
      }
    }

    updateFreeShippingTracker(subtotalUSD);
  }
}

function updateFreeShippingTracker(subtotal, explicitCurrency = null) {
  const goal = 1999;
  const progress = Math.min(100, (subtotal / goal) * 100);
  const bar = document.getElementById("shippingProgressBar");
  const label = document.getElementById("shippingGoalText");

  if (bar) bar.style.width = `${progress}%`;
  if (label) {
    if (subtotal >= goal) {
      label.textContent = "✓ You've unlocked FREE Express Shipping!";
    } else {
      const diff = formatPrice(goal - subtotal, explicitCurrency || "INR");
      label.textContent = `Add ${diff} more for Free Tracked Shipping`;
    }
  }
}

// ==========================================
// 16. WISHLIST MANAGEMENT
// ==========================================
function initWishlist() {
  setupDialog("wishlistDialog", "closeWishlistBtn");

  const openBtn = document.getElementById("wishlistOpenBtn");
  if (openBtn) {
    openBtn.addEventListener("click", () => {
      const dialog = document.getElementById("wishlistDialog");
      if (dialog) dialog.showModal();
    });
  }

  updateWishlistUI();
}

function toggleWishlist(kitId) {
  if (wishlist.includes(kitId)) {
    wishlist = wishlist.filter(id => id !== kitId);
    showToast("Removed football kit from saved items");
  } else {
    wishlist.push(kitId);
    showToast("Saved football kit to your favorites!");
  }
  saveWishlist();
  renderProducts();
}

function updateWishlistUI() {
  const badge = document.getElementById("wishlistBadge");
  const headerCount = document.getElementById("wishlistCountHeader");
  const list = document.getElementById("wishlistItemsList");
  const empty = document.getElementById("wishlistEmptyState");

  if (badge) badge.textContent = wishlist.length;
  if (headerCount) headerCount.textContent = wishlist.length;

  if (wishlist.length === 0) {
    if (list) list.innerHTML = "";
    if (empty) empty.hidden = false;
    return;
  }

  if (empty) empty.hidden = true;

  if (list) {
    list.innerHTML = wishlist.map(id => {
      const kit = JERSEYS_DATA.find(k => k.id === id);
      if (!kit) return "";
      return `
        <div class="wishlist-item">
          <div class="wishlist-item-info">
            <div class="wishlist-item-thumb">
              ${generateJerseySVG(kit, { isBack: false })}
            </div>
            <div>
              <div class="wishlist-item-title">${kit.title}</div>
              <div class="wishlist-item-price">${formatPrice(kit.priceUSD)}</div>
            </div>
          </div>
          <div class="wishlist-actions">
            <button class="btn btn-sm btn-primary" onclick="moveWishlistToCart('${kit.id}')">Add to Bag</button>
            <button class="btn btn-sm btn-secondary" onclick="toggleWishlist('${kit.id}')">Remove</button>
          </div>
        </div>
      `;
    }).join("");
  }
}

window.moveWishlistToCart = function(kitId) {
  const kit = JERSEYS_DATA.find(k => k.id === kitId);
  if (!kit) return;

  cart.push({
    cartId: "wish-" + Date.now(),
    kitId: kit.id,
    title: kit.title,
    team: kit.team,
    edition: kit.edition,
    size: "M",
    priceUSD: kit.priceUSD,
    quantity: 1
  });

  wishlist = wishlist.filter(id => id !== kitId);
  saveWishlist();
  saveCart();
  showToast(`Moved ${kit.title} to your bag!`);
};

// ==========================================
// 17. SIZE GUIDE & FIT CALCULATOR
// ==========================================
function initSizeGuide() {
  setupDialog("sizeGuideDialog", "closeSizeGuideBtn");

  const openBtn = document.getElementById("openSizeGuideBtn");
  const footerLink = document.getElementById("footerSizeGuideLink");

  const openAction = (e) => {
    e.preventDefault();
    const dialog = document.getElementById("sizeGuideDialog");
    if (dialog) dialog.showModal();
  };

  if (openBtn) openBtn.addEventListener("click", openAction);
  if (footerLink) footerLink.addEventListener("click", openAction);

  const heightInput = document.getElementById("userHeight");
  const weightInput = document.getElementById("userWeight");
  const fitSelect = document.getElementById("preferredFit");

  const calculateFit = () => {
    const h = parseInt(heightInput?.value || 178, 10);
    const w = parseInt(weightInput?.value || 75, 10);
    const fit = fitSelect?.value || "regular";

    let size = "M";

    if (h < 170 && w < 65) size = "S";
    else if (h <= 180 && w <= 78) size = "M";
    else if (h <= 188 && w <= 88) size = "L";
    else if (h <= 195 && w <= 100) size = "XL";
    else size = "2XL";

    if (fit === "loose") {
      if (size === "S") size = "M";
      else if (size === "M") size = "L";
      else if (size === "L") size = "XL";
      else if (size === "XL") size = "2XL";
    } else if (fit === "slim") {
      if (size === "2XL") size = "XL";
      else if (size === "XL") size = "L";
      else if (size === "L") size = "M";
    }

    const output = document.getElementById("recommendedSizeOutput");
    if (output) output.textContent = `Size ${size} (${fit.toUpperCase()} FIT)`;
  };

  if (heightInput) heightInput.addEventListener("input", calculateFit);
  if (weightInput) weightInput.addEventListener("input", calculateFit);
  if (fitSelect) fitSelect.addEventListener("change", calculateFit);
}

// ==========================================
// 18. CHECKOUT & ORDER CONFIRMATION
// ==========================================
function initCheckoutFlow() {
  setupDialog("checkoutDialog", "closeCheckoutBtn");
  setupDialog("orderSuccessDialog", "continueShoppingBtn");

  const form = document.getElementById("checkoutForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = document.getElementById("shipEmail")?.value || "supporter@vortexkits.com";
      const orderNum = "#VK-" + Math.floor(100000 + Math.random() * 900000);

      const coDialog = document.getElementById("checkoutDialog");
      if (coDialog) coDialog.close();

      cart = [];
      saveCart();

      document.getElementById("receiptOrderNum").textContent = orderNum;
      document.getElementById("receiptEmail").textContent = email;

      const successDialog = document.getElementById("orderSuccessDialog");
      if (successDialog) successDialog.showModal();
    });
  }

  const continueBtn = document.getElementById("continueShoppingBtn");
  if (continueBtn) {
    continueBtn.addEventListener("click", () => {
      const dialog = document.getElementById("orderSuccessDialog");
      if (dialog) dialog.close();
      const grid = document.getElementById("productGridSection");
      if (grid) grid.scrollIntoView({ behavior: "smooth" });
    });
  }
}

function openCheckoutModal() {
  const dialog = document.getElementById("checkoutDialog");
  if (!dialog) return;

  const subtotalUSD = cart.reduce((sum, item) => sum + (item.priceUSD * item.quantity), 0);
  const isFreeShipping = subtotalUSD >= 85.0;
  const shippingFeeUSD = isFreeShipping ? 0 : 9.99;
  let discountUSD = 0;
  if (activeCoupon) {
    discountUSD = (subtotalUSD * (activeCoupon.percent / 100));
  }
  const grandTotalUSD = Math.max(0, subtotalUSD - discountUSD + shippingFeeUSD);

  const summaryBox = document.getElementById("checkoutItemsSummary");
  if (summaryBox) {
    summaryBox.innerHTML = cart.map(item => `
      <div class="co-summary-item">
        <span class="co-summary-title">${item.quantity}x ${item.title} (${item.size})</span>
        <span>${formatPrice(item.priceUSD * item.quantity)}</span>
      </div>
    `).join("");
  }

  document.getElementById("coSubtotal").textContent = formatPrice(subtotalUSD);
  document.getElementById("coShipping").textContent = isFreeShipping ? "FREE" : formatPrice(shippingFeeUSD);
  document.getElementById("coGrandTotal").textContent = formatPrice(grandTotalUSD);

  const discountRow = document.getElementById("coDiscountRow");
  const discountAmt = document.getElementById("coDiscountAmount");
  if (discountRow && discountAmt) {
    if (activeCoupon && discountUSD > 0) {
      discountRow.hidden = false;
      discountAmt.textContent = `-${formatPrice(discountUSD)}`;
    } else {
      discountRow.hidden = true;
    }
  }

  dialog.showModal();
}

// ==========================================
// 19. CURRENCY SELECTOR
// ==========================================
function initCurrencySelector() {
  const select = document.getElementById("currencySelect");
  if (!select) return;

  select.addEventListener("change", (e) => {
    currentCurrency = e.target.value;
    updateCustomizerView();
    renderProducts();
    updateCartUI();
    showToast(`Currency updated to ${currentCurrency}`);
  });
}

// ==========================================
// 20. NEWSLETTER & FOOTER
// ==========================================
function initNewsletter() {
  const form = document.getElementById("newsletterForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    showToast(`Thanks for subscribing! Use code KICKOFF15 for 15% off.`);
    form.reset();
  });
}

function initMobileNav() {
  const toggle = document.getElementById("mobileMenuBtn");
  const nav = document.getElementById("mainNav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }
}

// ==========================================
// 21. SHOPIFY ASYNCHRONOUS DATA LOADER
// ==========================================
async function loadShopifyData() {
  if (!window.SHOPIFY_CONFIG || !window.SHOPIFY_CONFIG.isConfigured) {
    console.info("Shopify credentials not yet configured in shopify-config.js. Displaying preview catalogue.");
    return;
  }

  isShopifyLoading = true;
  const grid = document.getElementById("productGrid");
  if (grid) {
    grid.innerHTML = `
      <div class="catalog-loading">
        <div class="loading-spinner"></div>
        <span>Loading authentic jerseys from Half Time Store...</span>
      </div>
    `;
  }

  try {
    const products = await window.shopifyApi.getProducts(50);
    if (products && products.length > 0) {
      shopifyProducts = products;
      console.log(`✓ Successfully retrieved ${products.length} live products from Shopify!`);
      showToast(`✓ Retrieved ${products.length} live products from Half Time Store!`);
      const statusBadge = document.getElementById("headerShopifyBadge");
      if (statusBadge) {
        statusBadge.innerHTML = `<span class="status-indicator"></span><span class="status-label">Shopify Live (${products.length})</span>`;
      }
    } else {
      console.warn("Shopify returned 0 products. Ensure products are active and published to Headless channel.");
      showToast("Shopify connected, but 0 products found. Ensure products are published to Headless sales channel.", true);
    }
  } catch (err) {
    console.error("Shopify Products Error:", err);
    shopifyLoadError = err.message;
    showToast("Shopify: " + err.message, true);
  } finally {
    isShopifyLoading = false;
    renderProducts();
    initHeroShowcase();
    updateFilterCounts();
  }

  // Restore cart if stored
  if (shopifyCartId) {
    try {
      activeCart = await window.shopifyApi.getCart(shopifyCartId);
      if (activeCart) {
        console.log(`✓ Restored active Shopify cart (${activeCart.totalQuantity} items).`);
        updateCartUI();
      }
    } catch (err) {
      console.warn("Could not retrieve stored Shopify cart:", err);
    }
  }
}

// ==========================================
// 22. APPLICATION BOOTSTRAP
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  initHeroShowcase();
  initFavoriteOptions();
  initCustomizerStudio();
  initProductGrid();
  initMatchCenter();
  initQuickViewDialog();
  initCartDrawer();
  initCustomerProfileModal();
  initWishlist();
  initSizeGuide();
  initCheckoutFlow();
  initCurrencySelector();
  initNewsletter();
  initMobileNav();

  // Connect to live Shopify Storefront
  loadShopifyData();
});
