// ── BESPOKEPROMOS SHARED DATA & UTILITIES ──

const SITE_CONFIG = {
  name: 'BespokePromos',
  tagline: 'Premium Branded Merchandise',
  phone: '(516) 655-5423',
  phoneRaw: '5166555423',
  email: 'info@bespokepromos.com',
  formspreeId: 'mnjgwbyv',
  adminPassword: 'bespokepromos2025',
};

// ── BRAND LOGOS FOR MARQUEE ──
const BRAND_LOGOS = [
  { name: 'Nike',          svg: `<img src="images/brands/nike.svg" alt="Nike">` },
  { name: 'Under Armour',  svg: `<img src="images/brands/under-armour.svg" alt="Under Armour">` },
  { name: 'YETI',          svg: `<svg viewBox="0 0 90 44" xmlns="http://www.w3.org/2000/svg" aria-label="YETI"><text x="4" y="34" font-family="Arial Black, Arial" font-weight="900" font-size="28" fill="#1a1a1a" letter-spacing="3">YETI</text></svg>` },
  { name: 'The North Face', svg: `<img src="images/brands/north-face.png" alt="The North Face">` },
  { name: 'Patagonia',     svg: `<img src="images/brands/patagonia.png" alt="Patagonia">` },
  { name: 'Carhartt',      svg: `<img src="images/brands/carhartt.png" alt="Carhartt">` },
  { name: 'Columbia',      svg: `<img src="images/brands/columbia.png" alt="Columbia">` },
  { name: 'Champion',      svg: `<img src="images/brands/champion.svg" alt="Champion">` },
  { name: 'Hydro Flask',   svg: `<img src="images/brands/hydro-flask.webp" alt="Hydro Flask">` },
  { name: 'Bella+Canvas',  svg: `<img src="images/brands/bella-canvas.png" alt="Bella+Canvas">` },
  { name: 'New Era',       svg: `<img src="images/brands/new-era.png" alt="New Era">` },
  { name: 'Corkcicle',     svg: `<img src="images/brands/corkcicle.jpg" alt="Corkcicle">` },
  { name: "S'well",        svg: `<svg viewBox="0 0 90 44" xmlns="http://www.w3.org/2000/svg" aria-label="Swell"><rect x="6" y="8" width="10" height="24" rx="5" fill="#1a1a1a"/><rect x="8" y="6" width="6" height="4" rx="1" fill="#1a1a1a"/><text x="22" y="30" font-family="Georgia, serif" font-weight="700" font-size="17" fill="#1a1a1a">S'well</text></svg>` },
  { name: 'Cutter & Buck', svg: `<img src="images/brands/cutter-buck.avif" alt="Cutter &amp; Buck">` },
  { name: 'OGIO',          svg: `<img src="images/brands/ogio.jpg" alt="OGIO">` },
  { name: 'Gildan',        svg: `<img src="images/brands/gildan.png" alt="Gildan">` },
  { name: 'Hanes',         svg: `<img src="images/brands/hanes.png" alt="Hanes">` },
  { name: 'Moleskine',     svg: `<img src="images/brands/moleskine.png" alt="Moleskine">` },
  { name: 'JBL',           svg: `<img src="images/brands/jbl.png" alt="JBL">` },
  { name: 'Ahead',         svg: `<svg viewBox="0 0 100 44" xmlns="http://www.w3.org/2000/svg" aria-label="Ahead"><text x="4" y="32" font-family="Arial Black, Arial" font-weight="900" font-size="22" fill="#1a1a1a" letter-spacing="2">AHEAD</text></svg>` },
];

// ── PRODUCT CATALOG — real products only (images confirmed) ──
const DEFAULT_CATALOG = [

  // ── FIDGETS & STRESS RELIEF ──
  {
    id: 'fidgets', label: 'Fidgets & Stress Relief', emoji: '🌀', count: '10 products',
    products: [
      { id: 'f1',  name: 'Flip & Slide Magnetic Stress Reliever', price: null,     colors: 6,  img: 'images/fidgets/f1.png' },
      { id: 'f2',  name: 'Fidget Puzzle Ball',                    price: null,               img: 'images/fidgets/f2.png' },
      { id: 'f3',  name: 'Fidget Spinner Stress Relief Stick',    price: null,     colors: 5, img: 'images/fidgets/f3.png' },
      { id: 'f4',  name: '"QUANTUM" Pop N Spin Stress Reliever',  price: null,               img: 'images/fidgets/f4.png' },
      { id: 'f5',  name: 'Push Pop Square Stress Reliever Game',  price: null,     colors: 2, img: 'images/fidgets/f5.png' },
      { id: 'f6',  name: 'Captain Smiley Stress Reliever',        price: null,               img: 'images/fidgets/f6.png' },
      { id: 'f7',  name: 'Moptoppers Stress Reliever',            price: null,     colors: 2, img: 'images/fidgets/f7.png' },
      { id: 'f8',  name: 'Molecool Stress Ball',       price: '$4.00', min: 1000,  colors: 3, img: 'images/fidgets/f8.png' },
      { id: 'f9',  name: 'Fidget Sensory Worm',         price: '$1.95', min: 500,  colors: 2, img: 'images/fidgets/f9.png' },
      { id: 'f10', name: 'Stress Reliever Ball',        price: '$1.31', min: 1000,            img: 'images/fidgets/f10.png' },
    ]
  },

  // ── APPAREL ──
  {
    id: 'apparel', label: 'Apparel', emoji: '👕', count: '4 products',
    products: [
      { id: 'a1', name: 'Core Cotton Tee (PC54)',                  price: '$4.94',  originalPrice: '$10.68', min: 12, colors: 10, img: 'images/apparel/a1.png' },
      { id: 'a2', name: 'Core Fleece Pullover Hoodie (PC78H)',     price: '$21.82', originalPrice: '$29.08', min: 12, colors: 10, img: 'images/apparel/a2.png' },
      { id: 'a3', name: 'Core Fleece Crewneck Sweatshirt (PC78)',  price: '$12.62', originalPrice: '$19.62', min: 12, colors: 26, img: 'images/apparel/a3.png' },
      { id: 'a4', name: 'Core Fleece Full-Zip Hoodie (PC78ZH)',    price: '$27.94', originalPrice: '$37.04', min: 12, colors: 46, img: 'images/apparel/a4.png' },
    ]
  },

  // ── DRINKWARE ──
  {
    id: 'drinkware', label: 'Drinkware', emoji: '🥤', count: '4 products',
    products: [
      { id: 'd1', name: '24 oz Recycled Squared Tumbler',          price: null,     min: 50,  colors: 2, img: 'images/drinkware/d1.png' },
      { id: 'd2', name: '27 oz EverGreen Recycled Bottle',         price: null,     min: 50,  colors: 3, img: 'images/drinkware/d2.png' },
      { id: 'd3', name: '24 oz EcoFusion Recycled Tumbler',        price: null,     min: 50,  colors: 6, img: 'images/drinkware/d3.png' },
      { id: 'd4', name: '24 oz Chameleon Color-Change Tumbler',    price: '$2.75',  min: 100, colors: 6, img: 'images/drinkware/d4.png' },
    ]
  },

  // ── BAGS & TOTES ──
  {
    id: 'bags', label: 'Bags & Totes', emoji: '🎒', count: '5 products',
    products: [
      { id: 'b1', name: 'Anywhere Quick Release Fanny Pack',       price: null,     min: 50,             img: 'images/bags/b1.png' },
      { id: 'b2', name: 'Designer Tote Bag with Curved Corners',   price: '$2.25',  min: 100, colors: 2, img: 'images/bags/b2.png' },
      { id: 'b3', name: '14" Polyester Drawstring Backpack',       price: null,     min: 50,             img: 'images/bags/b3.png' },
      { id: 'b4', name: 'Non-Woven Two Tone Gift Bag',             price: '$1.70',  min: 500,            img: 'images/bags/b4.png' },
      { id: 'b5', name: 'Superhero Drawstring Backpack',           price: '$1.65',  min: 500,            img: 'images/bags/b5.png' },
    ]
  },

  // ── PENS & WRITING ──
  {
    id: 'writing', label: 'Pens & Writing', emoji: '🖋️', count: '12 products',
    products: [
      { id: 'p1',   name: '3-Way Pen',                             price: null,     min: 100,            img: 'images/pens/p1.png' },
      { id: 'p2',   name: 'Fidget Spinner Plunge-Action Pen',      price: '$1.60',  min: 1000, colors: 2,img: 'images/pens/p2.png' },
      { id: 'p3',   name: 'iWriter® Gel-Sport Stylus Pen',         price: null,     min: 100,            img: 'images/pens/p3.png' },
      { id: 'p4',   name: 'Superhero Pen',                         price: null,     min: 100,  colors: 2,img: 'images/pens/p4.png' },
      { id: 'p5',   name: 'Spinner Pen',                           price: '$1.95',  min: 2000,           img: 'images/pens/p5.png' },
      { id: 'pen6', name: 'Ellipse Soft W/Stylus — Metal Pen',     price: null,     min: 50,             img: 'images/pens/pen6.png' },
      { id: 'pen7', name: 'Jada M Stylus Twist Pen',               price: null,     min: 50,             img: 'images/pens/pen7.png' },
      { id: 'pen8', name: 'Sleek Write Rubberized Pen',            price: null,     min: 100,            img: 'images/pens/pen8.png' },
      { id: 'pen9', name: '4-Color Retractable Ball Pen',          price: null,     min: 100,            img: 'images/pens/pen9.png' },
      { id: 'pen10',name: '6 in 1 Multi Function Tool Pen',        price: null,     min: 100,            img: 'images/pens/pen10.png' },
      { id: 'pen11',name: 'Soft Rubberized Touch Retractable Gel Pen', price: null, min: 250,            img: 'images/pens/pen11.png' },
      { id: 'pen12',name: 'Smoothy Classic Pen',                   price: null,     min: 250,            img: 'images/pens/pen12.png' },
    ]
  },

  // ── TOYS & OUTDOOR SPORTS ──
  {
    id: 'outdoor', label: 'Toys & Outdoor Sports', emoji: '⛺', count: '7 products',
    products: [
      { id: 't1', name: '9" Fantastic Flier Flying Disc',          price: null,     min: 100,  colors: 2,img: 'images/toys/t1.png' },
      { id: 't2', name: '6" Big Paw Bear',                         price: null,     min: 100,  colors: 13,img: 'images/toys/t2.png' },
      { id: 't3', name: '16" Confetti Filled Clear Beach Ball',    price: null,     min: 100,            img: 'images/toys/t3.png' },
      { id: 't4', name: 'Mini Basketball Set',                     price: null,     min: 100,  colors: 3,img: 'images/toys/t4.png' },
      { id: 't5', name: '3" Mini Frisbee',                        price: '$1.05',  min: 2000,           img: 'images/toys/t5.png' },
      { id: 't6', name: 'Light Up Yo Yo',                         price: '$1.48',  min: 1000,           img: 'images/toys/t6.png' },
      { id: 't7', name: '12" Translucent Beach Ball',             price: '$1.36',  min: 500,  colors: 4,img: 'images/toys/t7.png' },
    ]
  },

  // ── HEALTH & WELLNESS ──
  {
    id: 'wellness', label: 'Health & Wellness', emoji: '💊', count: '4 products',
    products: [
      { id: 'pc1',  name: 'Lip Balm with Clip SPF 15 (USA Made)', price: '$1.10',  min: 250,  colors: 13,img: 'images/personal/pc1.png' },
      { id: 'pc2',  name: 'Yummy Lip Balm',                       price: '$1.65',  min: 1000,           img: 'images/personal/pc2.png' },
      { id: 'wl17', name: 'Resistance Band Kit',                  price: '$2.50',  min: 100,  colors: 4,img: 'images/accessories/ac4.png' },
      { id: 'wl18', name: 'Sport Headbands (3-Pack)',             price: null,     min: 50,             img: 'images/hats/h1.png' },
    ]
  },

  // ── DESK & OFFICE ──
  {
    id: 'desk', label: 'Desk & Office', emoji: '🖥️', count: '5 products',
    products: [
      { id: 'dk1', name: 'Happy Dude Mobile Device Holder',        price: null,     min: 50,   colors: 2,img: 'images/desk/dk1.png' },
      { id: 'dk2', name: 'High Five Foldable Media Stand',         price: null,     min: 50,             img: 'images/desk/dk2.png' },
      { id: 'dk3', name: 'Acrobat Paper Clips with Magnet Base',   price: '$7.00',  min: 50,             img: 'images/desk/dk3.png' },
      { id: 'dk4', name: 'Wheat Straw Cutlery Set',                price: '$3.00',  min: 100,            img: 'images/desk/dk4.png' },
      { id: 'dk8', name: 'Rotating Media Stand',                   price: '$3.80',  min: 100,  colors: 2,img: 'images/accessories/ac5.png' },
    ]
  },

  // ── HATS & HEADWEAR ──
  {
    id: 'hats', label: 'Hats & Headwear', emoji: '🧢', count: '2 products',
    products: [
      { id: 'h2', name: 'Port Authority Flexfit Cotton Twill Cap', price: '$11.98', min: 12,             img: 'images/hats/h2.png' },
      { id: 'h3', name: 'Knit Beanie With Cuff',                   price: null,     min: 12,             img: 'images/hats/h3.png' },
    ]
  },

  // ── TECHNOLOGY ──
  {
    id: 'tech', label: 'Technology', emoji: '📱', count: '2 products',
    products: [
      { id: 'tc1', name: 'Selfie Ring Light',                      price: '$4.30',  min: 50,   colors: 5,img: 'images/tech/tc1.png' },
      { id: 'tc2', name: 'Phone Screen Cleaner Pad',               price: '$3.20',  min: 100,  colors: 7,img: 'images/tech/tc2.png' },
    ]
  },

  // ── ACCESSORIES ──
  {
    id: 'accessories', label: 'Accessories', emoji: '🔑', count: '3 products',
    products: [
      { id: 'ac1', name: 'AirTag Silicone Key Chain',              price: '$3.00',  min: 50,   colors: 5,img: 'images/accessories/ac1.png' },
      { id: 'ac2', name: 'Buddy Phone Mount',                      price: '$1.50',  min: 100,  colors: 2,img: 'images/accessories/ac2.png' },
      { id: 'ac3', name: 'Phone Kickstand',                        price: '$3.20',  min: 100,  colors: 5,img: 'images/accessories/ac3.png' },
    ]
  },

  // ── TRADE SHOW ──
  {
    id: 'tradeshow', label: 'Trade Show', emoji: '🏷️', count: '31 products',
    products: [
      { id: 'ts4',  name: 'Custom Fabric Pop Up Straight Display 10x10',                          price: '$645',   min: 1, img: 'images/tradeshow/ts4.png' },
      { id: 'ts5',  name: 'U-Shaped Tool-Free Tension Fabric Display 10x10',                      price: '$630',   min: 1, img: 'images/tradeshow/ts5.png' },
      { id: 'ts6',  name: '10Ft Display Kit With S-Shaped Backdrop & Counter',                    price: '$820',   min: 1, img: 'images/tradeshow/ts6.png' },
      { id: 'ts7',  name: '10ft Pillowcase Backdrop Backwall Display Kit',                        price: '$600',   min: 1, img: 'images/tradeshow/ts7.png' },
      { id: 'ts8',  name: 'Deluxe Retractable Aluminum Banner Stand 31.5"×79"',                   price: '$215',   min: 1, img: 'images/tradeshow/ts8.png' },
      { id: 'ts9',  name: "8'×10' Backdrop Banner Stand",                                         price: '$420',   min: 1, img: 'images/tradeshow/ts9.png' },
      { id: 'ts10', name: '10ft Display Kit With Backdrop, Feather Flags & Table Cover',          price: '$660',   min: 1, img: 'images/tradeshow/ts10.png' },
      { id: 'ts11', name: "6' Premium Fitted Standard Table Cover (Full Color)",                  price: '$120',   min: 1, img: 'images/tradeshow/ts11.png' },
      { id: 'ts12', name: "10'×10' Full Color Pop Up Canopy Tent With Back Full Wall And Two Half Walls", price: '$650', min: 1, img: 'images/tradeshow/ts12.png' },
      { id: 'ts13', name: "10' Pop Up Tent 600D Polyester With Vented Canopy",                    price: '$455',   min: 1, img: 'images/tradeshow/ts13.png' },
      { id: 'ts14', name: "10'×10' Custom Printed Pop Up Tent Kit w/ Steel Frame",                price: '$422',   min: 1, img: 'images/tradeshow/ts14.png' },
      { id: 'ts15', name: "10'×10' Heavy Duty Steel Pop Up Canopy w/600D Polyester",              price: '$415',   min: 1, img: 'images/tradeshow/ts15.png' },
      { id: 'ts16', name: "10'×10' Full Color Pop Up Canopy Tent Kit",                            price: '$330',   min: 1, img: 'images/tradeshow/ts16.png' },
      { id: 'ts17', name: "10'×10' Instant One-Push Custom Canopy Tent Kit",                      price: '$400',   min: 1, img: 'images/tradeshow/ts17.png' },
      { id: 'ts18', name: "10'×10' Instant One-Push Canopy Tent Kit w/Vented Top",               price: '$450',   min: 1, img: 'images/tradeshow/ts18.png' },
      { id: 'ts19', name: "10'×10' Deluxe 50mm Hex Aluminum Frame w/Dye Sub Canopy",             price: '$700',   min: 1, img: 'images/tradeshow/ts19.png' },
      { id: 'ts20', name: "10'×10' Hex Aluminum Frame w/Custom Printed Canopy",                  price: '$465',   min: 1, img: 'images/tradeshow/ts20.png' },
      { id: 'ts21', name: "10' Premium Hex Aluminum Frame w/Full Color Canopy",                   price: '$530',   min: 1, img: 'images/tradeshow/ts21.png' },
      { id: 'ts22', name: "10'×20' Premium Hex Aluminum Canopy Tent w/Dye Sublimation",          price: '$875',   min: 1, img: 'images/tradeshow/ts22.png' },
      { id: 'ts23', name: "20' Full Color Custom Printed Tent Back Wall",                         price: '$215',   min: 1, img: 'images/tradeshow/ts23.png' },
      { id: 'ts24', name: "10'×15' Custom Printed Pop Up Tent Kit, Full Wall & 2 Half Walls",    price: '$1,000', min: 1, img: 'images/tradeshow/ts24.png' },
      { id: 'ts25', name: "10'×20' Hex Aluminum Frame Tent w/Full Color Canopy And Back Wall",   price: '$987',   min: 1, img: 'images/tradeshow/ts25.png' },
      { id: 'ts26', name: "10'×10' Deluxe Black Steel Frame Tent Kit w/Dye Sub Canopy + Full Back Wall", price: '$490', min: 1, img: 'images/tradeshow/ts26.png' },
      { id: 'ts27', name: "10'×10' Instant One-Push Custom Canopy Tent Kit w/Rear Full Wall",    price: '$480',   min: 1, img: 'images/tradeshow/ts27.png' },
      { id: 'ts28', name: "10' Custom Printed Aluminum Frame Tent w/2 Double Sided Flag Mount Kit", price: '$911', min: 1, img: 'images/tradeshow/ts28.png' },
      { id: 'ts29', name: "5'×5' Heavy Duty Pop Up Tent w/Dye Sublimation Canopy",               price: '$285',   min: 1, img: 'images/tradeshow/ts29.png' },
      { id: 'ts30', name: "10'×10' Commercial Steel Frame Tent Kit w/Full Back Wall + 2 Half Side Walls", price: '$650', min: 1, img: 'images/tradeshow/ts30.png' },
      { id: 'ts31', name: "10'×10' Full Color Pop Up Canopy Tent With Back Wall And Two Half Walls (PU Coated)", price: '$650', min: 1, img: 'images/tradeshow/ts31.png' },
      { id: 'ts32', name: "10' × 3' Half Tent Wall — Set of 2",                                   price: '$265',   min: 1, img: 'images/tradeshow/ts32.png' },
      { id: 'ts33', name: "Custom 10'×10' Hexagonal Kiosk Dome Tent (Full Color)",               price: '$1,500', min: 1, img: 'images/tradeshow/ts33.png' },
      { id: 'ts34', name: "AirDome Inflatable Tent 10'×10' With Dye Sublimated Top",             price: '$1,430', min: 1, img: 'images/tradeshow/ts34.png' },
    ]
  },
];

// ── FEATURED COLLECTIONS ──
const COLLECTIONS = [
  {
    id: 'new-hire',    tag: 'Most Popular', name: 'New Hire Welcome Kit',
    desc: 'Everything a new team member needs: branded tee, tumbler, notebook, and pen in a custom tote.',
    emojis: ['👕','🥤','📓','🎒'], color: 'linear-gradient(135deg, #2a3e80 0%, #4a6fcc 100%)',
  },
  {
    id: 'event-swag',  tag: 'Events',       name: 'Event Swag Pack',
    desc: 'Make your booth unforgettable with a branded bag, hat, water bottle, and tech accessory.',
    emojis: ['🎒','🧢','💧','📱'], color: 'linear-gradient(135deg, #c84a1a 0%, #f07030 100%)',
  },
  {
    id: 'eco-bundle',  tag: 'Trending',     name: 'Eco-Conscious Bundle',
    desc: 'Show your commitment to the planet with recycled bottles, bamboo pens, seed packets & RPET bags.',
    emojis: ['🌿','♻️','🎋','💚'], color: 'linear-gradient(135deg, #1a5c2a 0%, #2e9e46 100%)',
  },
  {
    id: 'premium-gift',tag: 'Premium',      name: 'Executive Gift Set',
    desc: 'Premium Moleskine notebook, YETI tumbler, wireless charger, and Leatherman multi-tool.',
    emojis: ['📓','🥤','⚡','🔧'], color: 'linear-gradient(135deg, #111d50 0%, #2a3e80 100%)',
  },
  {
    id: 'health-wellness', tag: 'Healthcare', name: 'Wellness Kit',
    desc: 'Perfect for healthcare events: lip balm, hand sanitizer, stress ball, and pill organizer.',
    emojis: ['💊','🧴','🤍','🩺'], color: 'linear-gradient(135deg, #6e1a2a 0%, #cc3c5a 100%)',
  },
  {
    id: 'remote-work', tag: 'WFH',          name: 'Remote Work Bundle',
    desc: 'Keep remote teams connected with a USB hub, webcam cover, mouse pad, and coffee mug.',
    emojis: ['💻','☕','🖱️','🔌'], color: 'linear-gradient(135deg, #0f5e6e 0%, #1a9aae 100%)',
  },
];

// ── CATALOG STORAGE ──
function getCatalog() {
  try { const s = localStorage.getItem('bp_catalog'); return s ? JSON.parse(s) : DEFAULT_CATALOG; }
  catch { return DEFAULT_CATALOG; }
}
function saveCatalog(c) { localStorage.setItem('bp_catalog', JSON.stringify(c)); }

// ── QUOTE CART ──
function getCart() {
  try { const s = localStorage.getItem('bp_cart'); return s ? JSON.parse(s) : []; }
  catch { return []; }
}
function saveCart(c) { localStorage.setItem('bp_cart', JSON.stringify(c)); }

function addToCart(product, categoryLabel) {
  const cart = getCart();
  const existing = cart.find(i => i.id === product.id);
  if (existing) existing.qty = (existing.qty || 1) + 1;
  else cart.push({ ...product, qty: 1, category: categoryLabel });
  saveCart(cart);
  updateCartBadge();
}

function updateCartBadge() {
  const total = getCart().reduce((s, i) => s + (i.qty || 1), 0);
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = total;
    el.style.display = total > 0 ? 'flex' : 'none';
  });
}

// ── TOAST ──
function showToast(msg, type = 'success') {
  let toast = document.getElementById('toast');
  if (!toast) { toast = document.createElement('div'); toast.id = 'toast'; toast.className = 'toast'; document.body.appendChild(toast); }
  toast.className = `toast ${type}`;
  toast.innerHTML = (type === 'success' ? '✓ ' : '✕ ') + msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ── SHARED HEADER ──
function renderHeader(activePage) {
  const cartTotal = getCart().reduce((s, i) => s + (i.qty || 1), 0);
  return `
    <header>
      <div class="header-inner">
        <a class="logo" href="index.html">
          <div class="logo-mark">✦</div>
          <div>
            <span class="logo-text">BespokePromos</span>
            <span class="logo-sub">Premium Branded Merchandise</span>
          </div>
        </a>
        <div class="search-bar">
          <svg class="search-icon" viewBox="0 0 24 24" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          <input type="text" placeholder="Search products…" id="searchInput" autocomplete="off">
        </div>
        <div class="header-actions">
          <a href="index.html" class="header-nav-link ${activePage==='home'?'active':''}">Home</a>
          <a href="shop.html" class="header-nav-link ${activePage==='shop'?'active':''}">Shop</a>
          <a href="quote.html" class="header-nav-link ${activePage==='quote'?'active':''}">Get a Quote</a>
          <a href="quote.html" class="cart-btn">
            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18M16 10a4 4 0 0 1-8 0"/>
            </svg>
            Quote List
            <span class="cart-count" style="display:${cartTotal > 0 ? 'flex':'none'}">${cartTotal}</span>
          </a>
        </div>
      </div>
    </header>
    <nav class="nav-strip">
      <div class="nav-inner">
        ${DEFAULT_CATALOG.map(cat => `<a href="shop.html#${cat.id}" class="nav-link">${cat.emoji} ${cat.label}</a>`).join('')}
      </div>
    </nav>
  `;
}

function renderContactStrip() {
  return `
    <div class="contact-strip">
      <p>Need help or a custom quote?</p>
      <a class="contact-item" href="tel:${SITE_CONFIG.phoneRaw}">
        <svg viewBox="0 0 24 24" stroke-width="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.64 12 19.79 19.79 0 0 1 1.58 3.38 2 2 0 0 1 3.55 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.73a16 16 0 0 0 6.29 6.29l1.09-1.09a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>
        ${SITE_CONFIG.phone}
      </a>
      <a class="contact-item" href="mailto:${SITE_CONFIG.email}">
        <svg viewBox="0 0 24 24" stroke-width="1.8"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
        ${SITE_CONFIG.email}
      </a>
      <a href="quote.html" class="btn-teal">Request a Quote →</a>
    </div>
  `;
}

function renderFooter() {
  return `
    <footer>
      <div class="footer-inner">
        <div class="footer-grid">
          <div class="footer-brand">
            <a class="logo" href="index.html" style="text-decoration:none">
              <div class="logo-mark" style="width:32px;height:32px;font-size:0.9rem">✦</div>
              <span class="logo-text" style="font-size:1.1rem">BespokePromos</span>
            </a>
            <p>Premium branded merchandise for businesses, events, healthcare, and beyond. Quality products, fast turnaround, expert service.</p>
          </div>
          <div class="footer-col">
            <h4>Shop</h4>
            ${DEFAULT_CATALOG.slice(0,6).map(c=>`<a href="shop.html#${c.id}">${c.label}</a>`).join('')}
          </div>
          <div class="footer-col">
            <h4>More</h4>
            ${DEFAULT_CATALOG.slice(6).map(c=>`<a href="shop.html#${c.id}">${c.label}</a>`).join('')}
          </div>
          <div class="footer-col">
            <h4>Company</h4>
            <a href="quote.html">Get a Quote</a>
            <a href="mailto:${SITE_CONFIG.email}">Contact Us</a>
            <a href="tel:${SITE_CONFIG.phoneRaw}">${SITE_CONFIG.phone}</a>
          </div>
        </div>
        <div class="footer-bottom">
          <p>© ${new Date().getFullYear()} BespokePromos &nbsp;·&nbsp; <a href="#">Privacy Policy</a> &nbsp;·&nbsp; <a href="mailto:${SITE_CONFIG.email}">Contact</a></p>
        </div>
      </div>
    </footer>
  `;
}
