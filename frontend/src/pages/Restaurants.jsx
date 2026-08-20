import { useEffect, useState } from "react";
import {
    Plus,
    Search,
    UtensilsCrossed
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import {
    getRestaurants,
    createRestaurant,
    updateRestaurant,
    deleteRestaurant
} from "../api";

import RestaurantCard from "../components/RestaurantCard";
import RestaurantModal from "../components/RestaurantModal";
import ConfirmModal from "../components/ConfirmModal";

function Restaurants() {

    const navigate = useNavigate();

    const [restaurants, setRestaurants] = useState([]);
    const [search, setSearch] = useState("");

    const [modalOpen, setModalOpen] = useState(false);
    const [editingRestaurant, setEditingRestaurant] = useState(null);

    const [deleteTarget, setDeleteTarget] = useState(null);

    const loadRestaurants = async () => {

        try {

            const data = await getRestaurants();

            setRestaurants(
                data.restaurants ||
                data ||
                []
            );

        } catch (error) {

            console.error(error);

        }

    };

    useEffect(() => {
        loadRestaurants();
    }, []);

    const openAdd = () => {
        setEditingRestaurant(null);
        setModalOpen(true);
    };

    const openEdit = (restaurant) => {
        setEditingRestaurant(restaurant);
        setModalOpen(true);
    };

    const saveRestaurant = async (data) => {

        try {

            if (editingRestaurant) {

                await updateRestaurant(
                    editingRestaurant._id,
                    data
                );

            } else {

                await createRestaurant(data);

            }

            setModalOpen(false);
            setEditingRestaurant(null);

            await loadRestaurants();

        } catch (error) {

            alert(error.message);

        }

    };

    const confirmDelete = async () => {

        try {

            await deleteRestaurant(
                deleteTarget._id
            );

            setDeleteTarget(null);

            await loadRestaurants();

        } catch (error) {

            alert(error.message);

        }

    };

    const filteredRestaurants =
        restaurants.filter((restaurant) => {

            const value =
                `${restaurant.name} ${restaurant.city} ${restaurant.cuisine}`
                    .toLowerCase();

            return value.includes(
                search.toLowerCase()
            );

        });

    return (
        <div className="page">

            <section className="page-heading">

                <div>

                    <span className="eyebrow">
                        MANAGEMENT
                    </span>

                    <h1>
                        Your <em>restaurants.</em>
                    </h1>

                    <p>
                        Curate, update and manage every culinary destination.
                    </p>

                </div>

                <button
                    className="gold-button"
                    onClick={openAdd}
                >
                    <Plus size={18} />
                    Add Restaurant
                </button>

            </section>

            <div className="search-bar">

                <Search size={18} />

                <input
                    value={search}
                    onChange={(e) =>
                        setSearch(e.target.value)
                    }
                    placeholder="Search restaurants, cities or cuisines..."
                />

            </div>

            <div className="restaurant-grid">

                {filteredRestaurants.map((restaurant) => (

                    <RestaurantCard
                        key={restaurant._id}
                        restaurant={restaurant}
                        onView={(id) =>
                            navigate(`/restaurants/${id}`)
                        }
                        onEdit={openEdit}
                        onDelete={setDeleteTarget}
                    />

                ))}

            </div>

            {filteredRestaurants.length === 0 && (

                <div className="empty-state">

                    <UtensilsCrossed size={35} />

                    <h3>
                        No restaurants found
                    </h3>

                    <p>
                        Add your first restaurant to begin managing your portfolio.
                    </p>

                </div>

            )}

            {modalOpen && (

                <RestaurantModal
                    restaurant={editingRestaurant}
                    onClose={() => {
                        setModalOpen(false);
                        setEditingRestaurant(null);
                    }}
                    onSave={saveRestaurant}
                />

            )}

            {deleteTarget && (

                <ConfirmModal
                    title="Delete restaurant?"
                    message={`This will permanently remove ${deleteTarget.name} and its associated management data.`}
                    onClose={() =>
                        setDeleteTarget(null)
                    }
                    onConfirm={confirmDelete}
                />

            )}

        </div>
    );
}

export default Restaurants;