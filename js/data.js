// ── CAREPROMO SHARED DATA & UTILITIES ──
// Edit SITE_CONFIG to customize your store

const SITE_CONFIG = {
  name: 'HealthPromo',
  tagline: 'Healthcare & ABA Promotional Items',
  phone: '(917) 538-8343',
  phoneRaw: '9175388343',
  email: 'contact@healthpromo.com',        // ← UPDATE THIS
  formspreeId: 'YOUR_FORMSPREE_ID',      // ← UPDATE AFTER FORMSPREE SIGNUP (free)
  adminPassword: 'healthpromo2025',        // ← CHANGE THIS
};

// ── DEFAULT PRODUCT CATALOG ──
const DEFAULT_CATALOG = [
  {
    id: 'fidgets', label: 'Fidgets', emoji: '🌀',
    products: [
      { id: 'f1', name: 'Flip & Slide Magnetic Stress Reliever', price: null, colors: 6, img: 'https://assetly.ordermygear.com/images/h_276,w_276,c_limit,s_1/35689924027b959f0eaace28f8c2e98c450433b3' },
      { id: 'f2', name: 'Fidget Puzzle Ball', price: null, img: 'https://assetly.ordermygear.com/images/h_276,w_276,c_limit,s_1/b4558e5274fa7b01a9d4e2cda6a35a8da8fa8188' },
      { id: 'f3', name: 'Fidget Spinner Stress Relief Stick', price: null, colors: 5, img: 'https://assetly.ordermygear.com/images/h_276,w_276,c_limit,s_1/04ed6149f2bde62999676b5fda5a63ad302ea5fe' },
      { id: 'f4', name: '"QUANTUM" Pop N Spin Stress Reliever', price: null, img: 'https://assetly.ordermygear.com/images/h_276,w_276,c_limit,s_1/3211048b4bd1a705b18f3dc351d41b44e4b1a6db' },
      { id: 'f5', name: 'Push Pop Square Stress Reliever Game', price: null, colors: 2, img: 'https://assetly.ordermygear.com/images/h_276,w_276,c_limit,s_1/d59f55f576df65b670047b87513d80b9f76fc6f7' },
      { id: 'f6', name: 'Captain Smiley Stress Reliever', price: null, img: 'https://assetly.ordermygear.com/images/h_276,w_276,c_limit,s_1/a6c065429c1e5540311a6955b859435599421544' },
      { id: 'f7', name: 'Moptoppers Stress Reliever', price: null, colors: 2, img: 'https://assetly.ordermygear.com/images/h_276,w_276,c_limit,s_1/dc98cf80bf864f6d260a1bae089be43c8f99a3d6' },
      { id: 'f8', name: 'Molecool Stress Ball', price: '$4.00', min: 1000, colors: 3, img: 'https://assetly.ordermygear.com/images/h_276,w_276,c_limit,s_1/4810fb373856f5cac2871e24103edda090ac02b4' },
      { id: 'f9', name: 'Fidget Sensory Worm', price: '$1.95', min: 500, colors: 2, img: 'https://assetly.ordermygear.com/images/h_276,w_276,c_limit,s_1/3bda415db1ac9c381847bac626d93aac416577f3' },
      { id: 'f10', name: 'Stress Reliever Ball', price: '$1.31', min: 1000, img: 'https://assetly.ordermygear.com/images/h_276,w_276,c_limit,s_1/0a85ed8eab5ea9bcde200cf375cdf145078f148b' },
    ]
  },
  {
    id: 'apparel', label: 'Apparel', emoji: '👕',
    products: [
      { id: 'a1', name: 'Core Cotton Tee (PC54)', price: '$4.94', originalPrice: '$10.68', colors: 10, img: 'https://assetly.ordermygear.com/images/h_276,w_276,c_limit,s_1/93417743a3157588193f9f9c15bd92a24e295c13' },
      { id: 'a2', name: 'Core Fleece Pullover Hoodie (PC78H)', price: '$21.82', originalPrice: '$29.08', colors: 10, img: 'https://assetly.ordermygear.com/images/h_276,w_276,c_limit,s_1/73dbe6fb01847845912bd6018c85a250ce0048b9' },
      { id: 'a3', name: 'Core Fleece Crewneck Sweatshirt (PC78)', price: '$12.62', originalPrice: '$19.62', colors: 26, img: 'https://assetly.ordermygear.com/images/h_276,w_276,c_limit,s_1/a7d457fb95e8e818c18f0343d1557c48f7de1f6c' },
      { id: 'a4', name: 'Core Fleece Full-Zip Hoodie (PC78ZH)', price: '$27.94', originalPrice: '$37.04', colors: 46, img: 'https://assetly.ordermygear.com/images/h_276,w_276,c_limit,s_1/f95f6f41469772b66f4c3461197374ca0c3a1eae' },
    ]
  },
  {
    id: 'drinkware', label: 'Drinkware', emoji: '🥤',
    products: [
      { id: 'd1', name: '24 oz Recycled Squared Tumbler', price: null, colors: 2, img: 'https://assetly.ordermygear.com/images/h_276,w_276,c_limit,s_1/637cd9b53055eacfd078c097ce5013261971a25b' },
      { id: 'd2', name: '27 oz EverGreen Recycled Bottle', price: null, colors: 3, img: 'https://assetly.ordermygear.com/images/h_276,w_276,c_limit,s_1/da1da1c8e6d5d44524184b5711a86f4715f41c22' },
      { id: 'd3', name: '24 oz EcoFusion Recycled Tumbler', price: null, colors: 6, img: 'https://assetly.ordermygear.com/images/h_276,w_276,c_limit,s_1/77107c159a89d60a3bd9b071a67d0d9485a93afc' },
      { id: 'd4', name: '24 oz Chameleon Color Change Tumbler', price: '$2.75', colors: 6, img: 'https://assetly.ordermygear.com/images/h_276,w_276,c_limit,s_1/8b7b471ecc8de4570a121658d17ac4565759b4b8' },
    ]
  },
  {
    id: 'bags', label: 'Bags', emoji: '🎒',
    products: [
      { id: 'b1', name: 'Anywhere Quick Release Fanny Pack', price: null, img: 'https://assetly.ordermygear.com/images/h_276,w_276,c_limit,s_1/1c1e7a56d46d64d62f048202f5dd2e4b7ab3f213' },
      { id: 'b2', name: 'Designer Tote Bag with Curved Corners', price: '$2.25', colors: 2, img: 'https://assetly.ordermygear.com/images/h_276,w_276,c_limit,s_1/8e85cf2c931c675f86f2ed451b5b2b7458078d15' },
      { id: 'b3', name: '14" Polyester Drawstring Backpack', price: null, img: 'https://assetly.ordermygear.com/images/h_276,w_276,c_limit,s_1/fda42f8d34823a539c0472ee97d3709ecb033dc5' },
      { id: 'b4', name: 'Non-Woven Two Tone Gift Bag', price: '$1.70', min: 500, img: 'https://assetly.ordermygear.com/images/h_276,w_276,c_limit,s_1/cafb62ebb0576629ff6d2ea42b9c1f74059c75b2' },
      { id: 'b5', name: 'Superhero Drawstring Backpack', price: '$1.65', min: 500, img: 'https://assetly.ordermygear.com/images/h_276,w_276,c_limit,s_1/f83a7ec4c7a3a34de141ed6fd81c636236f8e2bc' },
    ]
  },
  {
    id: 'pens', label: 'Pens & Writing', emoji: '🖋️',
    products: [
      { id: 'p1', name: '3-Way Pen', price: null, img: 'https://assetly.ordermygear.com/images/h_276,w_276,c_limit,s_1/3c19c57a1200f32d72d32e1e599baa2d3a07822d' },
      { id: 'p2', name: 'Fidget Spinner Plunge-Action Pen', price: '$1.60', min: 1000, colors: 2, img: 'https://assetly.ordermygear.com/images/h_276,w_276,c_limit,s_1/6e4e227c661d804e4d51cb16dcef71fc9f63a72d' },
      { id: 'p3', name: 'iWriter® Gel-Sport Stylus Pen', price: null, img: 'https://assetly.ordermygear.com/images/h_276,w_276,c_limit,s_1/984644d944ffb1c4c9df98d8b7f37bfe8874aa2d' },
      { id: 'p4', name: 'Superhero Pen', price: null, colors: 2, img: 'https://assetly.ordermygear.com/images/h_276,w_276,c_limit,s_1/a18c8c50f40530103c2b2fec502f72ada8183935' },
      { id: 'p5', name: 'Spinner Pen', price: '$1.95', min: 2000, img: 'https://assetly.ordermygear.com/images/h_276,w_276,c_limit,s_1/28eccd496c8640f7b83da70e92981b2e89d24608' },
    ]
  },
  {
    id: 'toys', label: 'Toys & Balls', emoji: '🏀',
    products: [
      { id: 't1', name: '9" Fantastic Flier Flying Disc', price: null, colors: 2, img: 'https://assetly.ordermygear.com/images/h_276,w_276,c_limit,s_1/0e5c682bc61be8b119ac8b9488cea8e563519293' },
      { id: 't2', name: '6" Big Paw Bear', price: null, colors: 13, img: 'https://assetly.ordermygear.com/images/h_276,w_276,c_limit,s_1/e22fa243ded4e37bc3cd63e217aaff6725082dae' },
      { id: 't3', name: '16" Confetti Filled Clear Beach Ball', price: null, img: 'https://assetly.ordermygear.com/images/h_276,w_276,c_limit,s_1/86c27e9d5237134b96ff278451dc8d63280d067a' },
      { id: 't4', name: 'Mini Basketball Set', price: null, colors: 3, img: 'https://assetly.ordermygear.com/images/h_276,w_276,c_limit,s_1/db5abac4b6a78fbbcd19469cb7583bcd2a31d15b' },
      { id: 't5', name: '3" Mini Frisbee', price: '$1.05', min: 2000, img: 'https://assetly.ordermygear.com/images/h_276,w_276,c_limit,s_1/bbdb175640c0278c6c7811100b792c3e1e7533c3' },
      { id: 't6', name: 'Light Up Yo Yo', price: '$1.48', min: 1000, img: 'https://assetly.ordermygear.com/images/h_276,w_276,c_limit,s_1/f37d368118ceec22d3631315cabe9bc3541fbf16' },
      { id: 't7', name: '12" Translucent Beach Ball', price: '$1.36', colors: 4, img: 'https://assetly.ordermygear.com/images/h_276,w_276,c_limit,s_1/630befabcdead0f676bb4f71f2cfaa68f04f377d' },
    ]
  },
  {
    id: 'desk', label: 'Desk Items', emoji: '🖥️',
    products: [
      { id: 'dk1', name: 'Happy Dude Mobile Device Holder', price: null, colors: 2, img: 'https://assetly.ordermygear.com/images/h_276,w_276,c_limit,s_1/11f08619cceb1ad1e271d55a7bcd93149817b903' },
      { id: 'dk2', name: 'High Five Foldable Media Stand', price: null, img: 'https://assetly.ordermygear.com/images/h_276,w_276,c_limit,s_1/732089d68b013c4241f00f83f8439804f6b9f598' },
      { id: 'dk3', name: 'Acrobat Paper Clips with Magnet Base', price: '$7.00', img: 'https://assetly.ordermygear.com/images/h_276,w_276,c_limit,s_1/5f77b2084ff4d726ea8cb82c5a22c6d06771dbbb' },
      { id: 'dk4', name: 'Wheat Straw Cutlery Set', price: '$3.00', img: 'https://assetly.ordermygear.com/images/h_276,w_276,c_limit,s_1/0bbb04f29ce18c68f76e572b311640e18bd82693' },
    ]
  },
  {
    id: 'hats', label: 'Hats', emoji: '🧢',
    products: [
      { id: 'h1', name: 'Sport Headbands', price: null, img: 'https://assetly.ordermygear.com/images/h_276,w_276,c_limit,s_1/2b3c2e795a398c0628abde18306e00be119f48aa' },
      { id: 'h2', name: 'Port Authority Flexfit Cotton Twill Cap', price: '$11.98', img: 'https://assetly.ordermygear.com/images/h_276,w_276,c_limit,s_1/2693b57dfe6df5eea3a34112f3fd9d607cbffbe5' },
      { id: 'h3', name: 'Knit Beanie With Cuff', price: null, img: 'https://assetly.ordermygear.com/images/h_276,w_276,c_limit,s_1/99f0cae1793af1a3ababef9d9a58d514cbb6fe9e' },
    ]
  },
  {
    id: 'tech', label: 'Technology', emoji: '📱',
    products: [
      { id: 'tc1', name: 'Selfie Ring Light', price: '$4.30', colors: 5, img: 'https://assetly.ordermygear.com/images/h_276,w_276,c_limit,s_1/1751dd3a4f37c524702fbb4f332fda09adb50e9e' },
      { id: 'tc2', name: 'Phone Screen Cleaner', price: '$3.20', colors: 7, img: 'https://assetly.ordermygear.com/images/h_276,w_276,c_limit,s_1/5b8f51d59253dbfa5b71fc9f8c75cc77b2433f78' },
    ]
  },
  {
    id: 'accessories', label: 'Accessories', emoji: '🔑',
    products: [
      { id: 'ac1', name: 'AirTag Silicone Key Chain', price: '$3.00', colors: 5, img: 'https://assetly.ordermygear.com/images/h_276,w_276,c_limit,s_1/db7194f9e0e8aa5e8b73471e0e73649ae0a43d1e' },
      { id: 'ac2', name: 'Buddy Phone Mount', price: '$1.50', colors: 2, img: 'https://assetly.ordermygear.com/images/h_276,w_276,c_limit,s_1/51b6583adc9b8a3519c4d8c10c48bc4571d45380' },
      { id: 'ac3', name: 'Phone Kickstand', price: '$3.20', colors: 5, img: 'https://assetly.ordermygear.com/images/h_276,w_276,c_limit,s_1/ae2d2634e8e6ec26da30c5beffb9295116b25805' },
      { id: 'ac4', name: 'Resistance Band Kit', price: '$2.50', colors: 4, img: 'https://assetly.ordermygear.com/images/h_276,w_276,c_limit,s_1/418db2a596fb41e9c6c016f2d43d38e8dd7bf514' },
      { id: 'ac5', name: 'Rotating Media Stand', price: '$3.80', colors: 2, img: 'https://assetly.ordermygear.com/images/h_276,w_276,c_limit,s_1/700832e11cdc2e5925300a22824f7bb42b4932a8' },
    ]
  },
  {
    id: 'personal', label: 'Personal Care', emoji: '💄',
    products: [
      { id: 'pc1', name: 'Lip Balm with Clip SPF15 (USA Made)', price: '$1.10', colors: 13, img: 'https://assetly.ordermygear.com/images/h_276,w_276,c_limit,s_1/6c764edaccdd2afb09c5f05d4ff72ea825ec073c' },
      { id: 'pc2', name: 'Yummy Lip Balm', price: '$1.65', min: 1000, img: 'https://assetly.ordermygear.com/images/h_276,w_276,c_limit,s_1/56e404ec3b6bcddc924bbd9ea8c1f4806dd85fd8' },
    ]
  },
  {
    id: 'tradeshow', label: 'Tradeshows', emoji: '🏷️',
    products: [
      { id: 'ts1', name: '3/4" Imprinted Polyester Lanyard', price: null, img: 'https://assetly.ordermygear.com/images/h_276,w_276,c_limit,s_1/3e19585357f94435dc754e94bf58d4fd196a94d1' },
      { id: 'ts2', name: 'Dye-Sublimated Lanyard With Clear Badge Holder', price: null, img: null },
      { id: 'ts3', name: 'Air Freshener', price: null, img: 'https://assetly.ordermygear.com/images/h_276,w_276,c_limit,s_1/465d9436d6ba546b7454587eeee6fd6adfc69d52' },
      { id: 'ts4',  name: 'Custom Fabric Pop Up Straight Display 10x10', price: '$645', img: 'images/tradeshow/ts4.png' },
      { id: 'ts5',  name: 'U-Shaped Tool-Free Tension Fabric Trade Show Display 10x10', price: '$630', img: 'images/tradeshow/ts5.png' },
      { id: 'ts6',  name: '10Ft Trade Show Display Kit With S-Shaped Backdrop & Counter', price: '$820', img: 'images/tradeshow/ts6.png' },
      { id: 'ts7',  name: '10ft Pillowcase Backdrop Backwall Display Kit', price: '$600', img: 'images/tradeshow/ts7.png' },
      { id: 'ts8',  name: 'Deluxe Retractable Aluminum Banner Stand W/Graphic 31.5" X 79"', price: '$215', img: 'images/tradeshow/ts8.png' },
      { id: 'ts9',  name: "8'x10' Backdrop Banner Stand", price: '$420', img: 'images/tradeshow/ts9.png' },
      { id: 'ts10', name: '10ft Display Kit With Backdrop, Feather Flags & Table Cover', price: '$660', img: 'images/tradeshow/ts10.png' },
      { id: 'ts11', name: "6' Premium Fitted Standard Table Cover (Full Color Dye Sublimation)", price: '$120', img: 'images/tradeshow/ts11.png' },
      { id: 'ts12', name: "10'x10' Full Color Pop Up Canopy Tent With Back Full Wall And Two Half Walls", price: '$650', img: 'images/tradeshow/ts12.png' },
      { id: 'ts13', name: "10' Pop Up Tent 600D Polyester With Vented Canopy", price: '$455', img: 'images/tradeshow/ts13.png' },
      { id: 'ts14', name: "10'x10' Custom Printed Pop Up Tent Kit w/ Steel Frame", price: '$422', img: 'images/tradeshow/ts14.png' },
      { id: 'ts15', name: "10'x10' Heavy Duty Steel Pop Up Canopy w/600 Denier Polyester", price: '$415', img: 'images/tradeshow/ts15.png' },
      { id: 'ts16', name: "10'x10' Full Color Pop Up Canopy Tent Kit", price: '$330', img: 'images/tradeshow/ts16.png' },
      { id: 'ts17', name: "10'x10' Instant One-Push Custom Canopy Tent Kit", price: '$400', img: 'images/tradeshow/ts17.png' },
      { id: 'ts18', name: "10'x10' Instant One-Push Custom Canopy Tent Kit w/Vented Top", price: '$450', img: 'images/tradeshow/ts18.png' },
      { id: 'ts19', name: "10'x10' Deluxe 50mm Hex Aluminum Frame w/Dye Sublimation Canopy", price: '$700', img: 'images/tradeshow/ts19.png' },
      { id: 'ts20', name: "10'x10' Hex Aluminum Frame w/Custom Printed Canopy", price: '$465', img: 'images/tradeshow/ts20.png' },
      { id: 'ts21', name: "10' Premium Hex Aluminum Frame w/Full Color Canopy", price: '$530', img: 'images/tradeshow/ts21.png' },
      { id: 'ts22', name: "10'x20' Premium Hex Aluminum Canopy Tent w/Dye Sublimation Canopy", price: '$875', img: 'images/tradeshow/ts22.png' },
      { id: 'ts23', name: "20' Full Color Custom Printed Tent Back Wall", price: '$215', img: 'images/tradeshow/ts23.png' },
      { id: 'ts24', name: "10'x15' Custom Printed Pop Up Tent Kit, Full Wall & 2 Half Walls", price: '$1,000', img: 'images/tradeshow/ts24.png' },
      { id: 'ts25', name: "10'x20' Hex Aluminum Frame Tent w/Full Color Canopy And Back Wall", price: '$987', img: 'images/tradeshow/ts25.png' },
      { id: 'ts26', name: "10'x10' Deluxe Black Steel Frame Tent Kit w/Dye Sublimation Canopy + Full Back Wall", price: '$490', img: 'images/tradeshow/ts26.png' },
      { id: 'ts27', name: "10'x10' Instant One-Push Custom Canopy Tent Kit w/Rear Full Wall", price: '$480', img: 'images/tradeshow/ts27.png' },
      { id: 'ts28', name: "10' Custom Printed Aluminum Frame Tent w/2 Double Sided Flag Mount Kit", price: '$911', img: 'images/tradeshow/ts28.png' },
      { id: 'ts29', name: "5'x5' Heavy Duty Pop Up Tent w/Dye Sublimation Canopy", price: '$285', img: 'images/tradeshow/ts29.png' },
      { id: 'ts30', name: "10'x10' Commercial Steel Frame Tent Kit w/Full Back Wall + 2 Half Side Walls", price: '$650', img: 'images/tradeshow/ts30.png' },
      { id: 'ts31', name: "10'x10' Full Color Pop Up Canopy Tent With Back Full Wall And Two Half Walls (PU Coated)", price: '$650', img: 'images/tradeshow/ts31.png' },
      { id: 'ts32', name: "10' x 3' Half Tent Wall - Set of 2", price: '$265', img: 'images/tradeshow/ts32.png' },
      { id: 'ts33', name: "Custom 10'x10' Promotion Event Hexagonal Kiosk Dome Tent (Full Color)", price: '$1,500', img: 'images/tradeshow/ts33.png' },
      { id: 'ts34', name: "AirDome Inflatable Tent 10'x10' With Full Dye Sublimated Top", price: '$1,430', img: 'images/tradeshow/ts34.png' },
    ]
  },
];

// ── CATALOG STORAGE ──
function getCatalog() {
  try {
    const saved = localStorage.getItem('cp_catalog');
    return saved ? JSON.parse(saved) : DEFAULT_CATALOG;
  } catch { return DEFAULT_CATALOG; }
}

function saveCatalog(catalog) {
  localStorage.setItem('cp_catalog', JSON.stringify(catalog));
}

// ── QUOTE CART STORAGE ──
function getCart() {
  try {
    const saved = localStorage.getItem('cp_cart');
    return saved ? JSON.parse(saved) : [];
  } catch { return []; }
}

function saveCart(cart) {
  localStorage.setItem('cp_cart', JSON.stringify(cart));
}

function addToCart(product, categoryLabel) {
  const cart = getCart();
  const existing = cart.find(i => i.id === product.id);
  if (existing) {
    existing.qty = (existing.qty || 1) + 1;
  } else {
    cart.push({ ...product, qty: 1, category: categoryLabel });
  }
  saveCart(cart);
  updateCartBadge();
}

function updateCartBadge() {
  const cart = getCart();
  const total = cart.reduce((s, i) => s + (i.qty || 1), 0);
  document.querySelectorAll('.cart-count').forEach(el => { el.textContent = total; el.style.display = total > 0 ? 'flex' : 'none'; });
}

// ── TOAST ──
function showToast(msg, type = 'success') {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.className = `toast ${type}`;
  toast.innerHTML = (type === 'success' ? '✓ ' : '✕ ') + msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ── SHARED HEADER HTML ──
function renderHeader(activePage) {
  const cart = getCart();
  const cartTotal = cart.reduce((s, i) => s + (i.qty || 1), 0);
  return `
    <header>
      <div class="header-inner">
        <a class="logo" href="index.html">
          <svg style="width:42px;height:42px;flex-shrink:0" viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M34 20 L34 38 L16 38 Q12 38 12 42 L12 58 Q12 62 16 62 L34 62 L34 80 Q34 84 38 84 L62 84 Q66 84 66 80 L66 62 L84 62 Q88 62 88 58 L88 42 Q88 38 84 38 L66 38 L66 20 Q66 16 62 16 L38 16 Q34 16 34 20 Z" stroke="white" stroke-width="4" stroke-linejoin="round"/>
            <polyline points="18,52 26,52 29,43 33,61 37,47 41,52 46,52 51,44 55,60 59,52 64,52 82,52" fill="none" stroke="#6dd4cc" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M50 4 Q50 1 53 1 Q56 1 56 4 Q56 7 53 8 L50 10" stroke="white" stroke-width="3" stroke-linecap="round"/>
            <path d="M50 10 Q48 15 24 32 Q17 36 13 39" stroke="white" stroke-width="3" stroke-linecap="round"/>
            <path d="M50 10 Q52 15 76 32 Q83 36 87 39" stroke="white" stroke-width="3" stroke-linecap="round"/>
            <path d="M44 16 Q47 19 50 19 Q53 19 56 16" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
            <path d="M50 27 Q50 23 46.5 23 Q43 23 43 27 Q43 30 50 35 Q57 30 57 27 Q57 23 53.5 23 Q50 23 50 27 Z" fill="#6dd4cc"/>
          </svg>
          <div>
            <span class="logo-text">HealthPromo</span>
            <span class="logo-sub">Healthcare &amp; ABA Promotional Items</span>
          </div>
        </a>
        ${activePage === 'shop' ? `
        <div class="search-bar">
          <svg class="search-icon" viewBox="0 0 24 24" stroke="rgba(255,255,255,0.5)" stroke-width="2" fill="none">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <input type="text" placeholder="Search products…" id="searchInput">
        </div>` : ''}
        <div class="header-actions">
          <a href="quote.html" class="header-nav-link">Get a Quote</a>
          <a href="quote.html" class="cart-btn">
            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18M16 10a4 4 0 0 1-8 0"/>
            </svg>
            Quote List
            <span class="cart-count" style="display:${cartTotal > 0 ? 'flex' : 'none'}">${cartTotal}</span>
          </a>
        </div>
      </div>
    </header>
    <nav class="nav-strip" id="navStrip">
      <div class="nav-inner" id="navInner"></div>
    </nav>
  `;
}

function renderContactStrip() {
  return `
    <div class="contact-strip">
      <p>Need help or a custom order?</p>
      <a class="contact-item" href="tel:${SITE_CONFIG.phoneRaw}">
        <svg viewBox="0 0 24 24" stroke-width="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.64 12 19.79 19.79 0 0 1 1.58 3.38 2 2 0 0 1 3.55 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.73a16 16 0 0 0 6.29 6.29l1.09-1.09a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>
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
      <p>© ${new Date().getFullYear()} HealthPromo &nbsp;·&nbsp; <a href="privacy.html">Privacy Policy</a> &nbsp;·&nbsp; <a href="mailto:${SITE_CONFIG.email}">Contact Us</a> &nbsp;·&nbsp; <a href="admin/" style="color:rgba(255,255,255,0.15)">Admin</a></p>
    </footer>
  `;
}
