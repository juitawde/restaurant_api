export const menuImages = {
    "Paneer Tikka":
        "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=900&q=85",

    "Butter Chicken":
        "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=85",

    "Biryani":
        "https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=900&q=85",

    "Margherita Pizza":
        "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=85",

    "Pasta":
        "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=85",

    "Tiramisu":
        "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=900&q=85",

    "Burger":
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85",

    "Salad":
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",

    "Steak":
        "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=85",

    "Drinks":
        "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?auto=format&fit=crop&w=900&q=85",

    "Sushi":
        "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=900&q=85",

    "Soup":
        "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",

    "Curry":
        "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=900&q=85"
};

export const fallbackMenuImage =
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=85";

export const getMenuImage = (name = "") => {
    const lower = name.toLowerCase();
    if (menuImages[name]) return menuImages[name];
    if (lower.includes("pizza")) return menuImages["Margherita Pizza"];
    if (lower.includes("burger")) return menuImages["Burger"];
    if (lower.includes("salad")) return menuImages["Salad"];
    if (lower.includes("steak") || lower.includes("meat") || lower.includes("kabab") || lower.includes("kebab") || lower.includes("lamb") || lower.includes("beef") || lower.includes("mutton")) return menuImages["Steak"];
    if (lower.includes("pasta") || lower.includes("spaghetti") || lower.includes("noodle") || lower.includes("macaroni")) return menuImages["Pasta"];
    if (lower.includes("chicken") || lower.includes("murgh") || lower.includes("tikka") || lower.includes("tandoori")) return menuImages["Butter Chicken"];
    if (lower.includes("paneer") || lower.includes("cottage")) return menuImages["Paneer Tikka"];
    if (lower.includes("biryani") || lower.includes("rice") || lower.includes("pulao") || lower.includes("fried rice")) return menuImages["Biryani"];
    if (lower.includes("tiramisu") || lower.includes("cake") || lower.includes("sweet") || lower.includes("dessert") || lower.includes("pudding") || lower.includes("ice cream") || lower.includes("brownie")) return menuImages["Tiramisu"];
    if (lower.includes("sushi")) return menuImages["Sushi"];
    if (lower.includes("soup") || lower.includes("shorba")) return menuImages["Soup"];
    if (lower.includes("curry") || lower.includes("masala") || lower.includes("gravy") || lower.includes("dal") || lower.includes("tadka")) return menuImages["Curry"];
    if (lower.includes("drink") || lower.includes("beverage") || lower.includes("coffee") || lower.includes("tea") || lower.includes("juice") || lower.includes("wine") || lower.includes("cocktail") || lower.includes("beer") || lower.includes("shake") || lower.includes("mocktail") || lower.includes("soda") || lower.includes("water")) return menuImages["Drinks"];
    
    return fallbackMenuImage;
};