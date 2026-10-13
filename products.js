// products.js - Luxury Inventory Database
const luxuryInventory = [
    // SUNNY / CLEAR WEATHER COLLECTION
    { name: "Hermès Birkin 25 Gold", price: 24500, img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800", weather: "Clear", tag: "Pristine", brand: "Hermès" },
    { name: "Cartier Panthère Sunglasses", price: 1150, img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800", weather: "Clear", tag: "Summer Edit", brand: "Cartier" },
    { name: "Rolex Day-Date 40 Gold", price: 32000, img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800", weather: "Clear", tag: "Investment", brand: "Rolex" },
    { name: "Chanel Coco Handle White", price: 5200, img: "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=800", weather: "Clear", tag: "Resort", brand: "Chanel" },
    { name: "Dior Book Tote Raffia", price: 2900, img: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=800", weather: "Clear", tag: "Trending", brand: "Dior" },
    { name: "Audemars Piguet Royal Oak", price: 45000, img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800", weather: "Clear", tag: "Rare", brand: "AP" },
    { name: "Hermès Oran Sandals", price: 750, img: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=800", weather: "Clear", tag: "Classic", brand: "Hermès" },
    { name: "Van Cleef Alhambra Bracelet", price: 4200, img: "https://images.unsplash.com/photo-1515562141207-7a8ea7494b16?q=80&w=800", weather: "Clear", tag: "Fine Jewelry", brand: "VCA" },

    // RAINY / COLD WEATHER COLLECTION
    { name: "Burberry Heritage Trench", price: 1890, img: "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=800", weather: "Rainy", tag: "Rainproof", brand: "Burberry" },
    { name: "Louis Vuitton Keepall Bandoulière", price: 2100, img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800", weather: "Rainy", tag: "Travel", brand: "Louis Vuitton" },
    { name: "Prada Combat Boots", price: 1250, img: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=800", weather: "Rainy", tag: "Durable", brand: "Prada" },
    { name: "Hermès Kelly 28 Black", price: 18500, img: "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=800", weather: "Rainy", tag: "Epsom Leather", brand: "Hermès" },
    { name: "Bottega Veneta Rain Jacket", price: 2400, img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800", weather: "Rainy", tag: "Outerwear", brand: "Bottega" },
    { name: "Chanel Umbrella & Case", price: 1500, img: "https://images.unsplash.com/photo-1515688594390-b649af70d282?q=80&w=800", weather: "Rainy", tag: "Rare Accessory", brand: "Chanel" },
    { name: "Rolex Submariner Date", price: 12500, img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800", weather: "Rainy", tag: "Waterproof", brand: "Rolex" },
    { name: "Goyard Cassette Trunk", price: 4200, img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800", weather: "Rainy", tag: "Coated Canvas", brand: "Goyard" },

    // SNOW / WINTER COLLECTION
    { name: "Moncler Maya Down Jacket", price: 1650, img: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=800", weather: "Snow", tag: "Alpine", brand: "Moncler" },
    { name: "Loro Piana Cashmere Scarf", price: 850, img: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=800", weather: "Snow", tag: "Warmth", brand: "Loro Piana" },
    { name: "Chanel Shearling Flap Bag", price: 6500, img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800", weather: "Snow", tag: "Winter Edit", brand: "Chanel" },
    { name: "Max Mara Ski Trousers", price: 1100, img: "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=800", weather: "Snow", tag: "Resort", brand: "Max Mara" },
    { name: "Hermès Constance 24", price: 14500, img: "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=800", weather: "Snow", tag: "Box Calf", brand: "Hermès" },
    { name: "Cartier Santos Diamond", price: 28000, img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800", weather: "Snow", tag: "Ice", brand: "Cartier" },
    { name: "Dior Snow Boots", price: 1450, img: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=800", weather: "Snow", tag: "Footwear", brand: "Dior" },
    { name: "Brunello Cucinelli Cape", price: 5400, img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800", weather: "Snow", tag: "Cashmere", brand: "Brunello C." },
    { name: "Fendi Puffer Jacket", price: 2900, img: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=800", weather: "Snow", tag: "Ski", brand: "Fendi" }
];
