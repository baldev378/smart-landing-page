/**
 * Shape-Shifter Universal Personalization & Auto-Brand Engine
 * Version: 2.2.0 Enterprise (Auto Font & Theme Matcher)
 * Embed: <script src="https://smart-landing-page-steel.vercel.app/shapeshifter.js?client=client_001" async></script>
 */

(async function () {
  'use strict';

  // NEW LIVE MAKE.COM WEBHOOK URL
  const MAKE_WEBHOOK_URL = "https://hook.us2.make.com/d8fw3nqb5xhw5bm46aiqcyfxl9d6obve";

  // 1. Script Context & Client Identification
  const scriptTag = document.currentScript || document.querySelector('script[src*="shapeshifter.js"]');
  const scriptUrl = new URL(scriptTag ? scriptTag.src : window.location.href);
  const clientId = scriptUrl.searchParams.get('client') || 'client_001';
  const urlParams = new URLSearchParams(window.location.search);

  // 2. AUTO-DETECT CLIENT BRAND STYLES (Font & Accent Color)
  const clientBrandFont = window.getComputedStyle(document.body).fontFamily || 'inherit';
  
  let clientPrimaryColor = '#e11d48';
  const existingBtn = document.querySelector('button, .btn, .button, input[type="submit"]');
  if (existingBtn) {
    const computedBtnBg = window.getComputedStyle(existingBtn).backgroundColor;
    if (computedBtnBg && computedBtnBg !== 'rgba(0, 0, 0, 0)' && computedBtnBg !== 'transparent') {
      clientPrimaryColor = computedBtnBg;
    }
  }

  let visitorSessionId = localStorage.getItem('ss_session') || 'ss_' + Math.random().toString(36).substr(2, 7);
  localStorage.setItem('ss_session', visitorSessionId);

  // 3. Detect Visitor Geolocation & Weather
  let city = urlParams.get('city') || 'Local Area';
  let country = urlParams.get('country') || 'US';
  let weather = urlParams.get('weather') || 'Clear';

  if (!urlParams.get('city')) {
    try {
      const geoRes = await fetch('https://api.ipgeolocation.io/ipgeo?apiKey=7398ebebcefe4b4f93212ac3398f6c0c');
      const geoData = await geoRes.json();
      city = geoData.city || 'Your Area';
      country = geoData.country_code2 || 'US';
    } catch (e) {}
  }

  // 4. Inject Brand-Matched Global Styles
  injectBrandStyles(clientBrandFont, clientPrimaryColor);

  // 5. Apply DOM Personalization
  applyDOMPersonalization(city, country, weather);

  // 6. Fetch & Render Weather Products
  fetchAndRenderClientProducts(clientId, weather, country, clientBrandFont);

  // -------------------------------------------------------------
  // HELPER FUNCTIONS
  // -------------------------------------------------------------

  function injectBrandStyles(fontFamily, primaryColor) {
    const styleId = 'ss-brand-style-override';
    if (document.getElementById(styleId)) return;

    const style = document.createElement('style');
    style.id = styleId;
    style.innerHTML = `
      .ss-brand-font { font-family: ${fontFamily} !important; }
      .ss-primary-bg { background-color: ${primaryColor} !important; }
      .ss-primary-border { border-color: ${primaryColor} !important; }
      .ss-primary-text { color: ${primaryColor} !important; }
      .ss-badge-pill { font-family: ${fontFamily} !important; border-radius: 9999px; padding: 4px 12px; font-size: 12px; font-weight: 600; }
    `;
    document.head.appendChild(style);
  }

  function applyDOMPersonalization(city, country, weather) {
    const greetingEl = document.querySelector('[data-ss="greeting"]');
    if (greetingEl) {
      greetingEl.classList.add('ss-brand-font');
      greetingEl.innerText = (country === 'IN') ? `🙏 NAMASTE TO ${city.toUpperCase()}` : `⚡ WELCOME VISITOR FROM ${city.toUpperCase()}`;
    }

    const deliveryEl = document.querySelector('[data-ss="delivery"]');
    if (deliveryEl) {
      deliveryEl.classList.add('ss-brand-font');
      const d = new Date(); d.setDate(d.getDate() + 2);
      const dateStr = d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
      deliveryEl.innerText = `Express Delivery to ${city}, ${country} by ${dateStr}`;
    }

    const stockEl = document.querySelector('[data-ss="stock"]');
    if (stockEl) {
      stockEl.classList.add('ss-brand-font');
      stockEl.innerText = `Limited Stock: Only 4 units left in ${city} warehouse`;
    }

    const paymentEl = document.querySelector('[data-ss="payments"]');
    if (paymentEl) {
      paymentEl.classList.add('ss-brand-font');
      paymentEl.innerText = (country === 'IN') ? 'UPI • GPay • Paytm • PhonePe • Cards' : 'Apple Pay • PayPal • Visa • Mastercard • Klarna';
    }
  }

  async function fetchAndRenderClientProducts(clientId, weather, countryCode, fontFamily) {
    const gridContainer = document.querySelector('[data-ss="product-grid"]');
    if (!gridContainer) return;

    let clientProducts = [];
    const w = weather.toLowerCase();

    try {
      const shopifyRes = await fetch('/products.json?limit=30');
      if (shopifyRes.ok) {
        const shopifyData = await shopifyRes.json();
        if (shopifyData && shopifyData.products) {
          clientProducts = shopifyData.products.filter(p => {
            const fullText = `${p.title} ${p.body_html || ''} ${(p.tags || []).join(' ')}`.toLowerCase();

            if (w.includes('rain')) {
              return fullText.includes('rain') || fullText.includes('waterproof') || fullText.includes('jacket') || fullText.includes('hoodie');
            } else if (w.includes('snow')) {
              return fullText.includes('warm') || fullText.includes('winter') || fullText.includes('wool') || fullText.includes('coat');
            } else {
              return fullText.includes('sun') || fullText.includes('light') || fullText.includes('summer') || fullText.includes('cotton');
            }
          });

          clientProducts = clientProducts.slice(0, 3).map(p => ({
            name: p.title,
            price: (countryCode === 'IN' ? '₹' : '$') + (p.variants[0] ? p.variants[0].price : '49'),
            image: p.images[0] ? p.images[0].src : 'https://via.placeholder.com/300',
            link: `/products/${p.handle}`
          }));
        }
      }
    } catch (err) {}

    if (clientProducts.length > 0) {
      gridContainer.innerHTML = '';
      clientProducts.forEach(prod => {
        const card = document.createElement('div');
        card.style.fontFamily = fontFamily;
        card.style.border = '1px solid rgba(226, 232, 240, 0.8)';
        card.style.borderRadius = '16px';
        card.style.padding = '16px';
        card.style.boxShadow = '0 10px 25px -5px rgba(0,0,0,0.05)';
        card.style.background = '#ffffff';

        card.innerHTML = `
          <img src="${prod.image}" alt="${prod.name}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 12px; margin-bottom: 12px;" />
          <h4 style="font-weight: 700; font-size: 15px; color: #0f172a; margin-bottom: 6px; font-family: ${fontFamily};">${prod.name}</h4>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 12px;">
            <span style="font-weight: 800; color: #059669; font-size: 18px; font-family: ${fontFamily};">${prod.price}</span>
            <a href="${prod.link}" class="ss-primary-bg" style="color: #ffffff; text-decoration: none; padding: 8px 16px; border-radius: 8px; font-size: 13px; font-weight: 700; font-family: ${fontFamily};">View Item →</a>
          </div>
        `;
        gridContainer.appendChild(card);
      });
    }
  }

})();
