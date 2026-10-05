/**
 * Shape-Shifter Universal Personalization & Product Engine
 * Version: 2.1.0 Enterprise
 * Usage: <script src="https://smart-landing-page-steel.vercel.app/shapeshifter.js?client=client_001" async></script>
 */

(async function () {
  'use strict';

  // 1. Extract Client ID & URL Parameters
  const scriptTag = document.currentScript || document.querySelector('script[src*="shapeshifter.js"]');
  const scriptUrl = new URL(scriptTag ? scriptTag.src : window.location.href);
  const clientId = scriptUrl.searchParams.get('client') || 'client_001';
  const urlParams = new URLSearchParams(window.location.search);

  let visitorSessionId = localStorage.getItem('ss_session') || 'ss_' + Math.random().toString(36).substr(2, 7);
  localStorage.setItem('ss_session', visitorSessionId);

  // Track visitor's category preference
  let userPreference = localStorage.getItem('ss_preferred_cat') || 'all';

  // 2. Detect Visitor Geolocation & Weather
  let city = urlParams.get('city') || 'Local Area';
  let country = urlParams.get('country') || 'US';
  let weather = urlParams.get('weather') || 'Clear';

  if (!urlParams.get('city')) {
    try {
      const geoRes = await fetch('https://api.ipgeolocation.io/ipgeo?apiKey=7398ebebcefe4b4f93212ac3398f6c0c');
      const geoData = await geoRes.json();
      city = geoData.city || 'Your City';
      country = geoData.country_code2 || 'US';
    } catch (e) {}
  }

  // 3. Dynamic Text & Trust Anchor Personalization
  applyDOMPersonalization(city, country, weather);

  // 4. Client Real Product Auto-Detection Engine
  fetchAndRenderClientProducts(clientId, weather, country, userPreference);

  // -------------------------------------------------------------
  // FUNCTIONS
  // -------------------------------------------------------------

  function applyDOMPersonalization(city, country, weather) {
    // Cultural Greeting
    const greetingEl = document.querySelector('[data-ss="greeting"]');
    if (greetingEl) {
      greetingEl.innerText = (country === 'IN') ? `🙏 NAMASTE TO ${city.toUpperCase()}` : `⚡ WELCOME VISITOR FROM ${city.toUpperCase()}`;
    }

    // Express Delivery Date
    const deliveryEl = document.querySelector('[data-ss="delivery"]');
    if (deliveryEl) {
      const d = new Date(); d.setDate(d.getDate() + 2);
      const dateStr = d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
      deliveryEl.innerText = `Express Delivery to ${city}, ${country} by ${dateStr}`;
    }

    // Regional Stock Alert
    const stockEl = document.querySelector('[data-ss="stock"]');
    if (stockEl) {
      stockEl.innerText = `Limited Stock: Only 4 units left in ${city} warehouse`;
    }

    // Local Payment Trust Badges
    const paymentEl = document.querySelector('[data-ss="payments"]');
    if (paymentEl) {
      paymentEl.innerText = (country === 'IN') ? 'UPI • GPay • Paytm • PhonePe • Cards' : 'Apple Pay • PayPal • Visa • Mastercard';
    }
  }

  async function fetchAndRenderClientProducts(clientId, weather, countryCode, preference) {
    const gridContainer = document.querySelector('[data-ss="product-grid"]');
    if (!gridContainer) return; // Exit gracefully if client page has no grid container

    let clientProducts = [];
    const w = weather.toLowerCase();

    // STEP A: Try Fetching Native Shopify Products Feed
    try {
      const shopifyRes = await fetch('/products.json?limit=30');
      if (shopifyRes.ok) {
        const shopifyData = await shopifyRes.json();
        if (shopifyData && shopifyData.products) {
          
          // Filter Shopify products based on local weather & preference
          clientProducts = shopifyData.products.filter(p => {
            const title = p.title.toLowerCase();
            const body = (p.body_html || '').toLowerCase();
            const tags = (p.tags || []).join(' ').toLowerCase();
            const fullText = `${title} ${body} ${tags}`;

            if (w.includes('rain')) {
              return fullText.includes('rain') || fullText.includes('waterproof') || fullText.includes('jacket') || fullText.includes('boot') || fullText.includes('hoodie');
            } else if (w.includes('snow')) {
              return fullText.includes('warm') || fullText.includes('winter') || fullText.includes('wool') || fullText.includes('coat') || fullText.includes('fleece');
            } else {
              return fullText.includes('sun') || fullText.includes('light') || fullText.includes('summer') || fullText.includes('cotton') || fullText.includes('breathable');
            }
          });

          // Map Shopify format to standard card format
          clientProducts = clientProducts.slice(0, 4).map(p => ({
            name: p.title,
            price: (countryCode === 'IN' ? '₹' : '$') + (p.variants[0] ? p.variants[0].price : '49'),
            image: p.images[0] ? p.images[0].src : 'https://via.placeholder.com/300',
            link: `/products/${p.handle}`
          }));
        }
      }
    } catch (err) {
      console.log('Shape-Shifter: Non-Shopify site detected or offline feed. Using fallback catalog.');
    }

    // STEP B: Render Products to Client Page
    if (clientProducts.length > 0) {
      gridContainer.innerHTML = '';
      clientProducts.forEach(prod => {
        const card = document.createElement('div');
        card.className = 'ss-product-card';
        card.innerHTML = `
          <div style="border: 1px solid #334155; border-radius: 12px; padding: 16px; background: #1e293b; color: #fff;">
            <img src="${prod.image}" alt="${prod.name}" style="width: 100%; height: 180px; object-fit: cover; border-radius: 8px; margin-bottom: 12px;" />
            <h4 style="font-weight: bold; font-size: 14px; margin-bottom: 6px;">${prod.name}</h4>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 8px;">
              <span style="font-weight: bold; color: #34d399; font-size: 16px;">${prod.price}</span>
              <a href="${prod.link}" style="background: #6366f1; color: #fff; text-decoration: none; padding: 6px 12px; border-radius: 6px; font-size: 12px; font-weight: bold;">View Item →</a>
            </div>
          </div>
        `;
        gridContainer.appendChild(card);
      });
    }
  }

})();
