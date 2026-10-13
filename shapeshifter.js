/**
 * Shape-Shifter Personalization Engine v2.5 (Enterprise 12-Upgrade Edition)
 */
(function() {
    console.log("⚡ Shape-Shifter v2.5 Engine Initializing...");

    // 1. Currency Exchange Rates (Base: GBP £)
    const currencyRates = {
        'Dubai': { code: 'AED', symbol: 'د.إ', rate: 4.67, badges: ['Apple Pay', 'Tabby (UAE BNPL)', 'Wire Transfer', 'Credit Card'] },
        'London': { code: 'GBP', symbol: '£', rate: 1.0, badges: ['Apple Pay', 'Klarna', 'Clearpay', 'Visa / Mastercard'] },
        'New York': { code: 'USD', symbol: '$', rate: 1.27, badges: ['Apple Pay', 'Afterpay', 'Affirm', 'Amex'] },
        'Paris': { code: 'EUR', symbol: '€', rate: 1.17, badges: ['Apple Pay', 'Alma (EUR 4x)', 'SEPA Transfer', 'Carte Bancaire'] },
        'Tokyo': { code: 'JPY', symbol: '¥', rate: 191.5, badges: ['Apple Pay', 'Paidy (Japan BNPL)', 'Line Pay', 'Credit Card'] }
    };

    // 2. High-Res City Skyline Backgrounds
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

    // 4. Weather-Adaptive Product Datasets
    const productCatalog = {
        'Clear': [
            { name: "Hermès Birkin 25 Gold", baseGbp: 24500, img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=800", tag: "Authenticated" },
            { name: "Rolex Day-Date 40 Gold", baseGbp: 32000, img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800", tag: "Rare Vault" },
            { name: "Chanel Medium Classic Flap", baseGbp: 8900, img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=800", tag: "Iconic" }
        ],
        'Rainy': [
            { name: "Burberry Heritage Trench Coat", baseGbp: 1890, img: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=800", tag: "Rain Essential" },
            { name: "Hermès Birkin 25 Gold", baseGbp: 24500, img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=800", tag: "Authenticated" },
            { name: "Louis Vuitton Leather Duffle", baseGbp: 3100, img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800", tag: "Travel Ready" }
        ],
        'Snow': [
            { name: "Loro Piana Cashmere Knit", baseGbp: 2200, img: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&q=80&w=800", tag: "Winter Warmth" },
            { name: "Rolex Day-Date 40 Gold", baseGbp: 32000, img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800", tag: "Rare Vault" },
            { name: "Chanel Medium Classic Flap", baseGbp: 8900, img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=800", tag: "Iconic" }
        ]
    };

    // 5. Main Personalization Function
    function applyPersonalization(city, weather) {
        console.log(`⚡ Personalizing for City: ${city} | Weather: ${weather}`);

        const curr = currencyRates[city] || currencyRates['London'];

        // A. City Name Labels
        document.querySelectorAll('#city-name, #target-city, #sub-city-name, #nav-city-badge').forEach(el => el.textContent = city);

        // B. Native Greeting Text
        const greetingEl = document.getElementById('visitor-greeting');
        if (greetingEl && cityGreetings[city]) {
            greetingEl.textContent = cityGreetings[city];
        }

        // C. Hero Background
        const heroEl = document.getElementById('hero');
        if (heroEl && cityImages[city]) {
            heroEl.style.backgroundImage = `url('${cityImages[city]}')`;
        }

        // D. Currency Badges
        document.querySelectorAll('#nav-currency-badge, #local-currency-display').forEach(el => {
            el.textContent = `${curr.code} ${curr.symbol}`;
        });

        // E. Weather Status Badge
        const weatherBadge = document.getElementById('weather-badge');
        if (weatherBadge) {
            weatherBadge.textContent = `● Real-Time Geo Merchandising: ${weather} in ${city}`;
        }

        // F. Payment Trust Badges
        const badgeContainer = document.getElementById('badge-container');
        if (badgeContainer && curr.badges) {
            badgeContainer.innerHTML = curr.badges.map(b => `<span>● ${b}</span>`).join('');
        }

        // G. Render Weather & Currency Adaptive Products
        const grid = document.getElementById('product-grid');
        const activeProducts = productCatalog[weather] || productCatalog['Clear'];

        if (grid) {
            grid.innerHTML = activeProducts.map(p => {
                const convertedPrice = Math.round(p.baseGbp * curr.rate).toLocaleString();
                return `
                    <div class="group cursor-pointer bg-[#121212] p-4 border border-white/5 hover:border-gold/40 transition duration-500">
                        <div class="overflow-hidden mb-6 aspect-[4/5] bg-[#1a1a1a] relative">
                            <img src="${p.img}" alt="${p.name}" class="w-full h-full object-cover group-hover:scale-105 transition duration-700">
                            <span class="absolute top-4 left-4 bg-black/80 text-gold text-[10px] tracking-widest uppercase px-3 py-1 border border-gold/30">${p.tag}</span>
                        </div>
                        <div class="flex justify-between items-start mb-2">
                            <h3 class="luxury-serif text-xl font-semibold">${p.name}</h3>
                            <span class="text-xs text-emerald-400 bg-emerald-950/60 px-2 py-1 rounded border border-emerald-800/40">In Stock</span>
                        </div>
                        <div class="flex justify-between items-center border-t border-white/10 pt-4 mt-4">
                            <span class="product-price text-gold luxury-serif text-lg font-bold">${curr.symbol} ${convertedPrice}</span>
                            <button class="px-4 py-2 border border-gold/50 text-gold hover:bg-gold hover:text-black transition text-xs uppercase tracking-widest">Inquire</button>
                        </div>
                    </div>
                `;
            }).join('');
        }
    }

    // 6. City Local Time Countdown Timer
    function startCountdown() {
        const countdownEl = document.getElementById('countdown');
        if (!countdownEl) return;
        
        let hours = 4, minutes = 12, seconds = 55;
        setInterval(() => {
            seconds--;
            if (seconds < 0) { seconds = 59; minutes--; }
            if (minutes < 0) { minutes = 59; hours--; }
            if (hours < 0) { hours = 23; }
            countdownEl.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }, 1000);
    }

    // 7. URL Query String Direct Override Support (?city=Tokyo&weather=Snow)
    const urlParams = new URLSearchParams(window.location.search);
    const paramCity = urlParams.get('city');
    const paramWeather = urlParams.get('weather');

    const defaultCity = paramCity || 'Dubai';
    const defaultWeather = paramWeather || 'Clear';

    applyPersonalization(defaultCity, defaultWeather);
    startCountdown();

    // 8. Listen for Live PostMessage Events from demo.html Control Panel
    window.addEventListener('message', function(event) {
        if (event.data && event.data.type === 'SHAPESHIFTER_SIMULATE') {
            applyPersonalization(event.data.city, event.data.weather);
        }
    });
})();
