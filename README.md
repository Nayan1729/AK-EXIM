# AK Exim — Website Developer Documentation

## Quick Start

1. Open `index.html` in any browser — no server needed
2. For live-reload during development, use VS Code Live Server extension

---

## Project Structure

```
d:\AK Exim\
├── index.html              ← Main website (single page)
├── styles.css              ← All styles & design tokens
├── script.js               ← Animations & interactivity
├── README.md               ← This file
├── notes.md                ← Business notes (not part of site)
├── images/
│   ├── hero-bg.png         ← Hero section background
│   ├── about-section.png   ← About section image
│   └── minerals/           ← Product images
│       ├── silica-sand.jpg
│       ├── quartz.jpg
│       ├── feldspar.jpg
│       ├── potassium-feldspar.png
│       ├── bauxite.jpg
│       ├── bentonite.jpg
│       ├── limestone.jpg
│       ├── fly-ash.png
│       ├── ball-clay.png
│       └── kaolin-clay.png
```

---

## How to Make Common Changes

### 🎨 Change Colors / Theme

Open `styles.css`, lines 30-45. All colors are defined as CSS custom properties:

```css
:root {
  --color-primary: #0a1628;      /* Main background */
  --color-accent: #d4a853;       /* Gold accent */
  --color-text: #e0e0e0;         /* Body text */
  /* ... etc. */
}
```

Change these values to update the entire site.

---

### 📦 Add a New Mineral Product

1. Add the mineral image to `images/minerals/` (recommended: 600x400px, .jpg or .png)
2. In `index.html`, find the `<!-- PRODUCTS SECTION -->` comment
3. Copy an existing `.product-card` block and update:

```html
<div class="product-card reveal">
  <div class="product-card-image">
    <img src="images/minerals/YOUR-IMAGE.jpg" alt="Mineral Name" loading="lazy">
    <div class="product-card-overlay"></div>
  </div>
  <div class="product-card-body">
    <h3 class="product-card-title">Mineral Name</h3>
    <div class="product-card-formula">Chemical Formula</div>
    <p class="product-card-desc">Brief description of the mineral.</p>
    <div class="product-card-tags">
      <span class="product-tag">Industry 1</span>
      <span class="product-tag">Industry 2</span>
    </div>
    <a href="https://wa.me/918128521974?text=Hi%2C%20I'm%20interested%20in%20YOUR_MINERAL" class="product-card-link">Inquire Now →</a>
  </div>
</div>
```

The grid auto-adjusts. No CSS changes needed.

---

### 📊 Update Statistics/Counters

In `index.html`, find the `stats-section`. Change the `data-target` values:

```html
<div class="stat-number" data-target="500">0</div>  <!-- Change 500 to new number -->
```

---

### 📝 Update Contact Info

Search for these in `index.html`:
- **Email**: `projects@akexim.co.in`
- **WhatsApp**: `918128521974` and `916352373932`
- **Location**: `Gujarat, India`

Also update in the footer section.

---

### 💬 Update Testimonials

Find the `testimonials` section in `index.html`. Each testimonial card has:
- `.testimonial-text` — The quote
- `.testimonial-avatar` — Initials (2 letters)
- `.testimonial-author-info h5` — Name
- `.testimonial-author-info p` — Company/Location

---

### 🌍 Add a New Export Country

1. In the SVG map (`global-reach` section), add a pulsing dot:
```html
<circle cx="X" cy="Y" r="4" fill="#e8c676">
  <animate attributeName="r" values="4;7;4" dur="2.5s" repeatCount="indefinite"/>
</circle>
```
2. Add a connection line from India:
```html
<line x1="510" y1="165" x2="X" y2="Y" stroke="#d4a853" stroke-width="0.5" stroke-dasharray="4,4" opacity="0.3"/>
```
3. Add a `.reach-region` card in the regions list

---

### 🖼️ Replace Hero Background

Replace `images/hero-bg.png` with your new image (keep the same filename), or update the path in `styles.css`:
```css
.hero-bg {
  background-image: url('images/hero-bg.png');  /* ← Change path */
}
```

---

## Contact Form (How It Works)

The form uses **[FormSubmit.co](https://formsubmit.co/)** — a free service that sends form submissions to your email. No backend needed.

- Submissions go to `projects@akexim.co.in`
- To change the recipient, update the `action` URL in the form:
  ```html
  <form action="https://formsubmit.co/NEW-EMAIL@domain.com" method="POST">
  ```
- **First submission**: FormSubmit will send a confirmation email. Click the link to activate.
- Hidden fields control behavior (subject line, captcha, template)

---

## Key Technical Details

| Feature | Implementation |
|---------|---------------|
| Scroll animations | Intersection Observer API (`script.js`) |
| Counter animations | `requestAnimationFrame` with ease-out cubic |
| Navbar scroll effect | CSS class toggle `.nav-scrolled` on scroll |
| Responsive design | CSS Grid + Flexbox + Media queries |
| Product grid | `auto-fill` CSS Grid — auto-adjusts columns |
| Glassmorphism cards | `backdrop-filter: blur()` + semi-transparent bg |
| Fonts | Google Fonts: Inter (body) + Outfit (headings) |

---

## Deployment Options

### GitHub Pages (Free)
1. Push the project to a GitHub repo
2. Go to Settings → Pages → Source: main branch
3. Site will be live at `https://username.github.io/repo-name`

### Netlify (Free, Recommended)
1. Go to [netlify.com](https://netlify.com)
2. Drag & drop the entire `AK Exim` folder
3. Done! You get a free HTTPS subdomain
4. Connect a custom domain (e.g., `akexim.co.in`) in settings

### Custom Domain
1. Buy a domain (e.g., from GoDaddy, Namecheap)
2. Point DNS to your hosting (Netlify/GitHub Pages)
3. Update Netlify/GitHub Pages settings with your domain

---

## Browser Support

- Chrome 80+ ✅
- Firefox 75+ ✅
- Safari 13+ ✅
- Edge 80+ ✅
- Mobile browsers ✅

---

## Performance Tips

- All images use `loading="lazy"` for deferred loading
- Fonts use `display=swap` to prevent FOIT
- CSS animations use `transform` and `opacity` (GPU-accelerated)
- No JavaScript frameworks — zero bundle overhead
