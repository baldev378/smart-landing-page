/**
 * Shape-Shifter Engine v3.6 - Dynamic Timezone Scarcity Timer
 */
(function() {
    console.log("⚡ Shape-Shifter v3.6 Engine Initialized");

    // 1. Currency Rates, Local Payment Badges, Tax Disclosures & True Timezones
    const currencyRates = {
        'Dubai': { 
            code: 'AED', 
            symbol: 'د.إ', 
            rate: 4.67, 
            timezone: 'Asia/Dubai',
            taxLabel: 'Includes 5% UAE VAT & Duties Paid',
            badges: ['Apple Pay', 'Tabby (UAE BNPL)', 'Wire Transfer', 'Credit Card'] 
        },
        'London': { 
            code: 'GBP', 
            symbol: '£', 
            rate: 1.0, 
            timezone: 'Europe/London',
            taxLabel: 'Includes 20% UK VAT',
            badges: ['Apple Pay', 'Klarna', 'Clearpay', 'Visa / Mastercard'] 
        },
        'New York': { 
            code: 'USD', 
            symbol: '$', 
            rate: 1.27, 
            timezone: 'America/New_York',
            taxLabel: 'Excl. US State Sales Tax',
            badges: ['Apple Pay', 'Afterpay', 'Affirm', 'Amex'] 
        },
        'Paris': { 
            code: 'EUR', 
            symbol: '€', 
            rate: 1.17, 
            timezone: 'Europe/Paris',
            taxLabel: 'TVA Incluse (Taxes Européennes)',
            badges: ['Apple Pay', 'Alma (EUR 4x)', 'SEPA Transfer', 'Carte Bancaire'] 
        },
        'Tokyo': { 
            code: 'JPY', 
            symbol: '¥', 
            rate: 191.5, 
            timezone: 'Asia/Tokyo',
            taxLabel: '消費税込み (10% 日本国内税込)',
            badges: ['Apple Pay', 'Paidy (Japan BNPL)', 'Line Pay', 'Credit Card'] 
        }
    };

    // 2. City Skyline Background Images
    const cityImages = {
        'Dubai': 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=2000',
        'London': 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=2000',
        'New York': 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=2000',
        'Paris': 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=2000',
        'Tokyo': 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80&w=2000'
    };

    // 3. Native Cultural Greetings
    const cityGreetings = {
        'Dubai': 'أهلاً وسهلاً بكم في دبي | Welcome to Dubai Private Vault',
        'London': 'Welcome | London Private Collection',
        'New York': 'Welcome | Manhattan Luxury Vault',
        'Paris': 'Bienvenue à Paris | Collection Privée Paris',
        'Tokyo': 'ようこそ東京へ | Tokyo Luxury Collector Portal'
    };

    let activeCity = 'Dubai'; // Track currently selected city for timezone timer
    let countdownIntervalId = null;

    // 4. Canvas Particle Animation Engine (Rain Drops / Snow Flakes)
    let canvasAnimationId = null;
    function startWeatherCanvas(weatherType) {
        const canvas = document.getElementById('weather-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        if (canvasAnimationId) cancelAnimationFrame(canvasAnimationId);

        const particles = [];
        const count = weatherType === 'Rainy' ? 100 : (weatherType === 'Snow' ? 70 : 0);

        for (let i = 0; i < count; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                length: Math.random() * 20 + 10,
                speed: Math.random() * 10 + 5,
                radius: Math.random() * 3 + 1
            });
        }

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            if (weatherType === 'Rainy') {
                ctx.strokeStyle = 'rgba(184, 151, 88, 0.4)';
                ctx.lineWidth = 1;
                particles.forEach(p => {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p.x, p.y + p.length);
                    ctx.stroke();
                    p.y += p.speed;
                    if (p.y > canvas.height) p.y = -20;
                });
            } else if (weatherType === 'Snow') {
                ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
                particles.forEach(p => {
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                    ctx.fill();
                    p.y += p.speed * 0.3;
                    if (p.y > canvas.height) p.y = -10;
                });
            }
            canvasAnimationId = requestAnimationFrame(draw);
        }

        if (weatherType === 'Rainy' || weatherType === 'Snow') {
            draw();
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }

    // 5. Dynamic Timezone Scarcity Timer Calculation (No external library dependencies)
    function updateMidnightCountdown() {
        const countdownEl = document.getElementById('countdown');
        if (!countdownEl) return;

        const curr = currencyRates[activeCity] || currencyRates['London'];
        const targetTimezone = curr.timezone;

        try {
            // Get current local time in target timezone
            const now = new Date();
            const formatter = new Intl.DateTimeFormat('en-US', {
                timeZone: targetTimezone,
                year: 'numeric', month: 'numeric', day: 'numeric',
                hour: 'numeric', minute: 'numeric', second: 'numeric',
                hour12: false
            });
            
            const parts = formatter.formatToParts(now);
            const t = {};
            parts.forEach(p => t[p.type] = p.value);

            // Construct real timezone-specific Date Object
            const localHour = parseInt(t.hour, 10);
            const localMinute = parseInt(t.minute, 10);
            const localSecond = parseInt(t.second, 10);

            // Time remaining until 24:00:00 midnight
            let hoursRemaining = 23 - localHour;
            let minutesRemaining = 59 - localMinute;
            let secondsRemaining = 59 - localSecond;

            if (hoursRemaining < 0) hoursRemaining = 0;
            if (minutesRemaining < 0) minutesRemaining = 0;
            if (secondsRemaining < 0) secondsRemaining = 0;

            countdownEl.textContent = `${String(hoursRemaining).padStart(2, '0')}:${String(minutesRemaining).padStart(2, '0')}:${String(secondsRemaining).padStart(2, '0')}`;
        } catch (err) {
            console.error("Timezone computation fallback triggered:", err);
            countdownEl.textContent = "03:45:12"; // Beautiful premium fall-back state
        }
    }

    // Start countdown timer loop
    function startCountdown() {
        if (countdownIntervalId) clearInterval(countdownIntervalId);
        updateMidnightCountdown();
        countdownIntervalId = setInterval(updateMidnightCountdown, 1000);
    }

    // 6. Main Personalization Engine Function
    function applyPersonalization(city, weather) {
        console.log(`⚡ Personalizing for ${city} (${weather})`);
        activeCity = city; // Update tracked active city globally

        const curr = currencyRates[city] || currencyRates['London'];

        // Update Text Elements
        document.querySelectorAll('#city-name, #sub-city-name, #nav-city-badge, #ticker-city, #ticker-city-2').forEach(el => {
            if (el) el.textContent = city;
        });

        const greetingEl = document.getElementById('visitor-greeting');
        if (greetingEl && cityGreetings[city]) greetingEl.textContent = cityGreetings[city];

        // Update Hero Image
        const heroEl = document.getElementById('hero');
        if (heroEl && cityImages[city]) heroEl.style.backgroundImage = `url('${cityImages[city]}')`;

        // Update Currency Badges
        document.querySelectorAll('#nav-currency-badge, #local-currency-display').forEach(el => {
            if (el) el.textContent = `${curr.code} ${curr.symbol}`;
        });

        // Weather Badge
        const weatherBadge = document.getElementById('weather-badge');
        if (weatherBadge) weatherBadge.textContent = `● Real-Time Geo Merchandising: ${weather} in ${city}`;

        // Payment Badges
        const badgeContainer = document.getElementById('badge-container');
        if (badgeContainer && curr.badges) {
            badgeContainer.innerHTML = curr.badges.map(b => `<span>● ${b}</span>`).join('');
        }

        // Render Filtered Products from products.js
        if (typeof luxuryInventory !== 'undefined') {
            const items = luxuryInventory.filter(item => item.weather === weather);
            const grid = document.getElementById('product-grid');
            const countEl = document.getElementById('product-count');

            if (countEl) countEl.textContent = items.length;

            if (grid) {
                grid.innerHTML = items.map(item => {
                    const price = Math.round(item.baseGbp * curr.rate).toLocaleString('en-US');
                    return `
                        <div class="product-card">
                            <div>
                                <div class="img-wrapper">
                                    <img src="${item.img}" alt="${item.name}" class="product-img" onerror="this.src='https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=800'">
                                    <span class="item-tag">${item.tag}</span>
                                </div>
                                <p class="brand-label">${item.brand}</p>
                                <h3 class="item-title font-serif">${item.name}</h3>
                                <p class="item-desc">${item.desc}</p>
                            </div>
                            <div class="card-footer">
                                <div class="price-box">
                                    <span class="item-price font-serif">${curr.symbol} ${price}</span>
                                    <span class="tax-label">${curr.taxLabel}</span>
                                </div>
                                <button class="btn-inquire">Inquire</button>
                            </div>
                        </div>
                    `;
                }).join('');

                if (items.length > 0) {
                    const toastImg = document.getElementById('toast-img');
                    const toastTitle = document.getElementById('toast-title');
                    const toastDesc = document.getElementById('toast-desc');
                    if (toastImg) toastImg.src = items[0].img;
                    if (toastTitle) toastTitle.textContent = `Collector in ${city}`;
                    if (toastDesc) toastDesc.textContent = `Inquired on ${items[0].name} (2 mins ago)`;
                }
            }
        }

        // Re-align and trigger countdown adjustments
        startCountdown();
        startWeatherCanvas(weather);
    }

    // Initial Load execution
    applyPersonalization('Dubai', 'Clear');

    // Listen for Demo Sandbox simulation updates
    window.addEventListener('message', function(event) {
        if (event.data && event.data.type === 'SHAPESHIFTER_SIMULATE') {
            applyPersonalization(event.data.city, event.data.weather);
        }
    });
})();

// REAL-TIME VIEW TRACKING FOR BALDEV
(function() {
    const trackingUrl = "https://hook.us2.make.com/d8fw3nqb5xhw5bm46aiqcyfxl9d6obve";
    
    // Log the view to Make.com
    fetch(trackingUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            event: "LIVE_DEMO_CLICK",
            client_city: typeof activeCity !== 'undefined' ? activeCity : "Initial Load",
            page_url: window.location.href,
            timestamp: new Date().toLocaleString()
        })
    });
})();
