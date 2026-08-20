import { useEffect, useState } from "react";
import {
    ArrowLeft,
    MapPin,
    Star,
    Plus
} from "lucide-react";

import { useNavigate, useParams } from "react-router-dom";

import {
    getRestaurant,
    getMenu,
    createMenuItem,
    updateMenuItem,
    deleteMenuItem
} from "../api";

import MenuCard from "../components/MenuCard";
import MenuModal from "../components/MenuModal";
import ConfirmModal from "../components/ConfirmModal";

import {
    restaurantImages,
    fallbackRestaurantImage
} from "../data/restaurantImages.js";

function RestaurantDetails() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [restaurant, setRestaurant] = useState(null);
    const [menu, setMenu] = useState([]);

    const [menuModal, setMenuModal] = useState(false);
    const [editingItem, setEditingItem] = useState(null);
    const [deleteTarget, setDeleteTarget] = useState(null);

    const [loading, setLoading] = useState(true);

    const loadData = async () => {

        try {

            const restaurantData =
                await getRestaurant(id);

            const menuData =
                await getMenu(id);

            setRestaurant(
                restaurantData.restaurant ||
                restaurantData
            );

            setMenu(
                menuData.menuItems ||
                menuData.items ||
                menuData ||
                []
            );

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {
        loadData();
    }, [id]);

    const saveMenuItem = async (data) => {

        try {

            if (editingItem) {

                await updateMenuItem(
                    editingItem._id,
                    data
                );

            } else {

                await createMenuItem(
                    id,
                    data
                );

            }

            setMenuModal(false);
            setEditingItem(null);

            await loadData();

        } catch (error) {

            alert(error.message);

        }

    };

    const confirmDelete = async () => {

        try {

            await deleteMenuItem(
                deleteTarget._id
            );

            setDeleteTarget(null);

            await loadData();

        } catch (error) {

            alert(error.message);

        }

    };

    if (loading) {

        return (
            <div className="loading-screen">
                Preparing your experience...
            </div>
        );

    }

    if (!restaurant) {

        return (
            <div className="empty-state">
                <h2>Restaurant not found.</h2>
            </div>
        );

    }

    const image =
        restaurantImages[restaurant.name] ||
        fallbackRestaurantImage;

    return (
        <div className="restaurant-details">

            <section
                className="restaurant-hero"
                style={{
                    backgroundImage:
                        `url(${image})`
                }}
            >

                <div className="restaurant-hero-overlay"></div>

                <button
                    className="back-button"
                    onClick={() =>
                        navigate("/restaurants")
                    }
                >
                    <ArrowLeft size={17} />
                    Restaurants
                </button>

                <div className="restaurant-hero-content">

                    <span className="eyebrow">
                        {restaurant.cuisine}
                    </span>

                    <h1>
                        {restaurant.name}
                    </h1>

                    <div className="restaurant-meta">

                        <span>
                            <Star
                                size={17}
                                fill="currentColor"
                            />
                            {restaurant.rating}
                        </span>

                        <span>
                            <MapPin size={17} />
                            {restaurant.city}
                        </span>

                    </div>

                    <p>
                        {restaurant.address}
                    </p>

                </div>

            </section>

            <section className="menu-section">

                <div className="menu-heading">

                    <div>

                        <span className="eyebrow">
                            MENU MANAGEMENT
                        </span>

                        <h2>
                            Our <em>menu.</em>
                        </h2>

                    </div>

                    <button
                        className="gold-button"
                        onClick={() => {
                            setEditingItem(null);
                            setMenuModal(true);
                        }}
                    >
                        <Plus size={18} />
                        Add Menu Item
                    </button>

                </div>

                <div className="menu-summary">
                    <span>
                        {menu.length} menu items
                    </span>

                    <span>
                        {menu.filter(
                            item => item.isAvailable
                        ).length} available
                    </span>
                </div>

                <div className="menu-grid">

                    {menu.map((item) => (

                        <MenuCard
                            key={item._id}
                            item={item}
                            onEdit={(selected) => {
                                setEditingItem(selected);
                                setMenuModal(true);
                            }}
                            onDelete={setDeleteTarget}
                        />

                    ))}

                </div>

            </section>

            {menuModal && (

                <MenuModal
                    item={editingItem}
                    onClose={() => {
                        setMenuModal(false);
                        setEditingItem(null);
                    }}
                    onSave={saveMenuItem}
                />

            )}

            {deleteTarget && (

                <ConfirmModal
                    title="Remove this dish?"
                    message={`"${deleteTarget.name}" will be permanently removed from this restaurant's menu.`}
                    onClose={() =>
                        setDeleteTarget(null)
                    }
                    onConfirm={confirmDelete}
                />

            )}

        </div>
    );
}

export default RestaurantDetails;