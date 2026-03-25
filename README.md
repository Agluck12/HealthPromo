# CarePromo — Healthcare & ABA Promotional Items Website

A complete, functional multi-page website for your promotional items store.

---

## 📁 File Structure

```
carepromo/
├── index.html          ← Shop homepage
├── quote.html          ← Quote request form
├── admin/
│   └── index.html      ← Admin panel (password protected)
├── css/
│   └── style.css       ← All shared styles
└── js/
    └── data.js         ← Product data + config (EDIT THIS)
```

---

## ⚙️ Setup (Required Before Going Live)

### 1. Update Your Info — `js/data.js`

Open `js/data.js` and edit the `SITE_CONFIG` block at the top:

```js
const SITE_CONFIG = {
  name: 'CarePromo',
  tagline: 'Healthcare & ABA Promotional Items',
  phone: '(516) 655-5423',           // ← Your phone
  phoneRaw: '5166555423',            // ← No spaces/dashes
  email: 'andrewgluck3@gmail.com',    // ← Your email
  formspreeId: 'mnjgwbyv',  // ← See step 2
  adminPassword: 'BashiM1261*',    // ← Change this!
};
```

### 2. Set Up Email (Free with Formspree)

The quote form sends emails through [Formspree](https://formspree.io) — it's free for up to 50 submissions/month.

1. Go to https://formspree.io and create a free account
2. Create a new form, set the destination to your email address
3. Copy your Form ID (looks like `xpzgkwqr`)
4. Paste it into `js/data.js` → `formspreeId: 'xpzgkwqr'`

That's it — quote submissions will now arrive in your inbox.

### 3. Change Admin Password

In `js/data.js`, change:
```js
adminPassword: 'carepromo2025',   // Change this to something secure
```

Or log into the admin panel and change it there under **Settings**.

---

## 🚀 Hosting (Free Options)

### Option A: Netlify (Recommended — Easiest)

1. Go to https://netlify.com and create a free account
2. Drag and drop the entire `carepromo/` folder onto the Netlify dashboard
3. Your site is live instantly at a URL like `https://carepromo.netlify.app`
4. Optional: Add a custom domain (e.g. `carepromo.com`) in Netlify settings

### Option B: Vercel

1. Go to https://vercel.com and create a free account
2. Install Vercel CLI: `npm i -g vercel`
3. In the `carepromo/` folder, run: `vercel`
4. Follow the prompts — your site deploys automatically

### Option C: GitHub Pages (Free with GitHub account)

1. Create a GitHub account at https://github.com
2. Create a new repository called `carepromo`
3. Upload all files to the repository
4. Go to Settings → Pages → Source: Deploy from branch → main
5. Your site is live at `https://yourusername.github.io/carepromo`

### Option D: Shared Hosting (GoDaddy, Bluehost, etc.)

1. Upload all files via FTP or cPanel File Manager
2. Upload to the `public_html` folder (or a subfolder)
3. Works with any standard web host

---

## 🔗 Pages

| URL | Description |
|-----|-------------|
| `/` or `/index.html` | Main shop with all products |
| `/quote.html` | Quote request form |
| `/admin/` | Admin panel (password: see data.js) |

---

## 🛠️ Admin Panel Features

Access at: `yoursite.com/admin/`

- **Products tab**: View all products, filter by category/price, edit or delete any product
- **Add Product**: Add new products with name, price, image URL, colors, min qty
- **Categories tab**: Add or remove product categories
- **Settings tab**: Update phone, email, Formspree ID, and admin password

All changes save to browser localStorage and instantly reflect on the storefront.

---

## ✏️ Customizing Products

### Via Admin Panel (easiest)
Log into `/admin/` → Products tab → Click "Add Product"

### Via Code (js/data.js)
Each product follows this structure:
```js
{
  id: 'unique_id',         // Unique string (no spaces)
  name: 'Product Name',
  price: '$2.50',          // null = shows "Request Quote"
  originalPrice: '$5.00',  // Optional — shows strikethrough
  min: 500,                // Optional — minimum order qty
  colors: 6,               // Optional — number of color options
  img: 'https://...'       // Product image URL, or null
}
```

---

## 📧 Support

For help customizing your site, contact us at the email in your site config.
