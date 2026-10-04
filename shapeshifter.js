(function() {
    'use strict';

    // Client Configuration (Customized per client)
    const SS_CONFIG = window.SS_CONFIG || {
        makeWebhookURL: '',
        geoAPIKey: '',
        weatherAPIKey: '',
        brandName: 'Brand',
        productDescription: 'Product'
    };

    // Class Mappings
    const ELEMENT_MAP = {
        'ss-headline': 'headline',
        'ss-subheadline': 'subheadline',
        'ss-cta': 'cta',
        'ss-proof': 'proofText',
        'ss-hero': 'backgroundColor'
    };

    function getUTMParams() {
        const params = new URLSearchParams(window.location.search);
        return {
            source: params.get('utm_source') || 'direct',
            campaign: params.get('utm_campaign') || 'none',
            content: params.get('utm_content') || 'none'
        };
    }

    async function getUserData() {
        let geoData = { city: 'Unknown', country: 'Unknown' };
        let weatherData = { condition: 'Clear', temperature: 70 };

        try {
            if (SS_CONFIG.geoAPIKey) {
                const geoRes = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${SS_CONFIG.geoAPIKey}`);
                geoData = await geoRes.json();
            }
            if (SS_CONFIG.weatherAPIKey && geoData.latitude) {
                const wRes = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${geoData.latitude}&lon=${geoData.longitude}&units=imperial&appid=${SS_CONFIG.weatherAPIKey}`);
                const wJson = await wRes.json();
                weatherData = {
                    condition: wJson.weather?.[0]?.main || 'Clear',
                    temperature: Math.round(wJson.main?.temp || 70)
                };
            }
        } catch (e) {
            console.warn('ShapeShifter geo fetch error:', e);
        }

        const hour = new Date().getHours();
        let timeOfDay = 'afternoon';
        if (hour >= 5 && hour < 12) timeOfDay = 'morning';
        else if (hour >= 17 && hour < 21) timeOfDay = 'evening';
        else if (hour >= 21 || hour < 5) timeOfDay = 'night';

        return {
            session_id: 'session_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
            brand_name: SS_CONFIG.brandName,
            product_description: SS_CONFIG.productDescription,
            location: { city: geoData.city || 'Unknown', country: geoData.country_name || 'Unknown' },
            weather: weatherData,
            timeOfDay: timeOfDay,
            device: window.innerWidth < 768 ? 'mobile' : 'desktop',
            utm: getUTMParams()
        };
    }

    async function personalize() {
        if (!SS_CONFIG.makeWebhookURL) return;

        const userData = await getUserData();

        try {
            const response = await fetch(SS_CONFIG.makeWebhookURL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData)
            });
            const content = await response.json();

            // A/B Variant Selection
            let variant = sessionStorage.getItem('ab_variant');
            if (!variant) {
                variant = Math.random() < 0.5 ? 'version_a' : 'version_b';
                sessionStorage.setItem('ab_variant', variant);
            }

            const activeContent = content[variant] || content.version_a || content;

            // Replace text on page elements matching class names
            Object.entries(ELEMENT_MAP).forEach(([cssClass, field]) => {
                const elements = document.querySelectorAll('.' + cssClass);
                elements.forEach(el => {
                    if (activeContent[field]) {
                        if (field === 'backgroundColor') {
                            el.style.background = activeContent[field];
                        } else {
                            el.textContent = activeContent[field];
                        }
                    }
                });
            });
            console.log('✨ ShapeShifter Personalized Site:', activeContent);
        } catch (e) {
            console.warn('ShapeShifter personalization error:', e);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', personalize);
    } else {
        personalize();
    }
})();
