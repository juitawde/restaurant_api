export const restaurantImages = {
    "Urban Bites":
        "https://www.woodencityinterior.com/images/rest_bg.jpg",

    "Bella Italia":
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn2ZO99wPLMBmlYe5_uUeJaG9gEdiUdRW_ThiU2cta-waXYO8amx14qCy8&s=10",

    "Spice Villa":
        "https://images.trvl-media.com/lodging/107000000/106860000/106855000/106854978/5777bbcb.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",

    "Lounge":
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=85",

    "Bakery":
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=85",

    "Fine Dining":
        "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=85"
};

export const fallbackRestaurantImage =
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85";

export const getRestaurantImage = (name = "") => {
    const lower = name.toLowerCase();
    if (restaurantImages[name]) return restaurantImages[name];
    if (lower.includes("italia") || lower.includes("pizza") || lower.includes("pasta") || lower.includes("bistro")) return restaurantImages["Bella Italia"];
    if (lower.includes("spice") || lower.includes("villa") || lower.includes("india") || lower.includes("dhaba") || lower.includes("curry")) return restaurantImages["Spice Villa"];
    if (lower.includes("lounge") || lower.includes("bar") || lower.includes("pub")) return restaurantImages["Lounge"];
    if (lower.includes("bakery") || lower.includes("sweet") || lower.includes("cake") || lower.includes("cafe")) return restaurantImages["Bakery"];
    if (lower.includes("fine") || lower.includes("dine") || lower.includes("luxury") || lower.includes("gourmet")) return restaurantImages["Fine Dining"];
    if (lower.includes("bite") || lower.includes("burger") || lower.includes("fast")) return restaurantImages["Urban Bites"];
    
    return fallbackRestaurantImage;
};