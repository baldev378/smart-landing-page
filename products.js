/**
 * Shape-Shifter Inventory Database - Verified High-Res Matching Imagery
 */
const luxuryInventory = [
    // --- SUNNY / CLEAR WEATHER COLLECTION ---
    { id: 1, name: "Hermès Birkin 25 Gold Epsom", baseGbp: 24500, img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=800", weather: "Clear", tag: "Sunny Essential", brand: "Hermès", desc: "Gold Epsom Leather & Gold Hardware" },
    { id: 2, name: "Cartier Panthère Sunglasses", baseGbp: 1150, img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=800", weather: "Clear", tag: "Summer Edit", brand: "Cartier", desc: "24k Gold Plated Smooth Frame" },
    { id: 3, name: "Rolex Day-Date 40 Gold", baseGbp: 32000, img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800", weather: "Clear", tag: "Investment", brand: "Rolex", desc: "18k Yellow Gold Champagne Dial" },
    { id: 4, name: "Chanel Coco Handle White", baseGbp: 5200, img: "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&q=80&w=800", weather: "Clear", tag: "Resort Edit", brand: "Chanel", desc: "White Caviar Leather Flap Bag" },
    { id: 5, name: "Dior Book Tote Cannage", baseGbp: 2900, img: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=800", weather: "Clear", tag: "Trending", brand: "Dior", desc: "Woven Raffia Cannage Embroidery" },
    { id: 6, name: "Audemars Piguet Royal Oak", baseGbp: 45000, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800", weather: "Clear", tag: "Rare Vault", brand: "Audemars Piguet", desc: "Stainless Steel Grande Tapisserie" },
    { id: 7, name: "Hermès Oran Leather Sandals", baseGbp: 750, img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=800", weather: "Clear", tag: "Classic", brand: "Hermès", desc: "Gold Calfskin Iconic H Cutout" },
    { id: 8, name: "Van Cleef Alhambra Bracelet", baseGbp: 4200, img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800", weather: "Clear", tag: "Fine Jewelry", brand: "Van Cleef", desc: "Vintage Gold & Mother of Pearl" },

    // --- RAINY / COLD WEATHER COLLECTION ---
    { id: 9, name: "Burberry Heritage Trench Coat", baseGbp: 1890, img: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=800", weather: "Rainy", tag: "Rainproof Luxury", brand: "Burberry", desc: "Water-resistant Cotton Gabardine" },
    { id: 10, name: "Louis Vuitton Keepall Duffle", baseGbp: 2100, img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800", weather: "Rainy", tag: "Weather Sealed", brand: "Louis Vuitton", desc: "Monogram Waterproof Coated Canvas" },
    { id: 11, name: "Prada Monolith Combat Boots", baseGbp: 1250, img: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&q=80&w=800", weather: "Rainy", tag: "Durable", brand: "Prada", desc: "Brushed Leather & Nylon Pouch Boots" },
    { id: 12, name: "Hermès Kelly 28 Black Epsom", baseGbp: 18500, img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=800", weather: "Rainy", tag: "Epsom Shield", brand: "Hermès", desc: "Black Rigid Epsom Leather with Palladium" },
    { id: 13, name: "Bottega Veneta Hooded Parka", baseGbp: 2400, img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=800", weather: "Rainy", tag: "Rain Shield", brand: "Bottega Veneta", desc: "Technical Nylon Shell Hooded Parka" },
    { id: 14, name: "Pasotti Handcrafted Umbrella", baseGbp: 650, img: "https://images.unsplash.com/photo-1515688594390-b649af70d282?auto=format&fit=crop&q=80&w=800", weather: "Rainy", tag: "Rain Accessory", brand: "Pasotti", desc: "Enameled Brass Lion Head Handle" },
    { id: 15, name: "Rolex Submariner Date Steel", baseGbp: 12500, img: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=800", weather: "Rainy", tag: "300m Waterproof", brand: "Rolex", desc: "Oystersteel Black Cerachrom Bezel" },
    { id: 16, name: "Goyard Trunk Bag", baseGbp: 4200, img: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&q=80&w=800", weather: "Rainy", tag: "Coated Canvas", brand: "Goyard", desc: "Waterproof Goyardine Canvas Leather" },

    // --- SNOW / WINTER COLLECTION ---
    { id: 17, name: "Moncler Maya Down Coat", baseGbp: 1650, img: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&q=80&w=800", weather: "Snow", tag: "Alpine Grade", brand: "Moncler", desc: "Glossy Goose Down Quilted Jacket" },
    { id: 18, name: "Loro Piana Cashmere Scarf", baseGbp: 850, img: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&q=80&w=800", weather: "Snow", tag: "100% Cashmere", brand: "Loro Piana", desc: "Frasted Undyed Baby Cashmere Stole" },
    { id: 19, name: "Chanel Shearling Flap Bag", baseGbp: 6500, img: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=800", weather: "Snow", tag: "Winter Vault", brand: "Chanel", desc: "Ecru Shearling & Gold Tone Hardware" },
    { id: 20, name: "Max Mara Cashmere Coat", baseGbp: 3400, img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=800", weather: "Snow", tag: "Winter Luxury", brand: "Max Mara", desc: "Iconic Double-Breasted Camel Hair Coat" },
    { id: 21, name: "Hermès Constance 24", baseGbp: 14500, img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=800", weather: "Snow", tag: "Pristine Vault", brand: "Hermès", desc: "Box Calfskin Leather Silver H Buckle" },
    { id: 22, name: "Cartier Santos Iced Diamond", baseGbp: 28000, img: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&q=80&w=800", weather: "Snow", tag: "Iced Edition", brand: "Cartier", desc: "Large Model Custom Diamond Bezel" },
    { id: 23, name: "Dior Snow Leather Boots", baseGbp: 1450, img: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&q=80&w=800", weather: "Snow", tag: "Alpine Boot", brand: "Dior", desc: "Oblique Technical Fabric & Leather" },
    { id: 24, name: "Brunello Cucinelli Cape", baseGbp: 5400, img: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&q=80&w=800", weather: "Snow", tag: "Winter Warmth", brand: "Brunello Cucinelli", desc: "Monili Trimmed Cashmere Cape" },
    { id: 25, name: "Fendi Ski Puffer Jacket", baseGbp: 2900, img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800", weather: "Snow", tag: "Resort Ski", brand: "Fendi", desc: "FF Motif Reversible Down Jacket" }
];
