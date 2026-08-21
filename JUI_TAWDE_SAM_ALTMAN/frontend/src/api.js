const API_URL = "https://restaurant-api-4ldy.onrender.com";

const request = async (endpoint, options = {}) => {
    const token = localStorage.getItem("token");

    const headers = {
        "Content-Type": "application/json",
        ...(options.headers || {})
    };

    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }

    const response = await fetch(`${API_URL}${endpoint}`, {
        ...options,
        headers
    });

    let data;

    try {
        data = await response.json();
    } catch {
        data = {};
    }

    if (!response.ok) {
        throw new Error(
            data.message ||
            data.error ||
            `Request failed with status ${response.status}`
        );
    }

    return data;
};


// AUTH

export const registerUser = (userData) =>
    request("/register", {
        method: "POST",
        body: JSON.stringify(userData)
    });

export const loginUser = (userData) =>
    request("/login", {
        method: "POST",
        body: JSON.stringify(userData)
    });


// RESTAURANTS

export const getRestaurants = () =>
    request("/restaurants");

export const getRestaurant = (id) =>
    request(`/restaurants/${id}`);

export const createRestaurant = (restaurant) =>
    request("/restaurants", {
        method: "POST",
        body: JSON.stringify(restaurant)
    });

export const updateRestaurant = (id, restaurant) =>
    request(`/restaurants/${id}`, {
        method: "PUT",
        body: JSON.stringify(restaurant)
    });

export const deleteRestaurant = (id) =>
    request(`/restaurants/${id}`, {
        method: "DELETE"
    });


// MENU

export const getMenu = (restaurantId) =>
    request(`/restaurants/${restaurantId}/menu`);

export const createMenuItem = (restaurantId, item) =>
    request(`/restaurants/${restaurantId}/menu`, {
        method: "POST",
        body: JSON.stringify(item)
    });

export const updateMenuItem = (id, item) =>
    request(`/menu/${id}`, {
        method: "PUT",
        body: JSON.stringify(item)
    });

export const deleteMenuItem = (id) =>
    request(`/menu/${id}`, {
        method: "DELETE"
    });