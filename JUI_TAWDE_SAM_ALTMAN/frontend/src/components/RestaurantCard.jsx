import {
    MapPin,
    Star,
    Pencil,
    Trash2,
    ArrowUpRight
} from "lucide-react";

import {
    getRestaurantImage
} from "../data/restaurantImages.js";

function RestaurantCard({
    restaurant,
    onEdit,
    onDelete,
    onView
}) {

    const image = getRestaurantImage(restaurant.name);

    return (
        <article className="restaurant-card">

            <div className="restaurant-image-wrapper">

                <img
                    src={image}
                    alt={restaurant.name}
                    className="restaurant-image"
                />

                <div className="image-overlay"></div>

                <button
                    className="view-circle"
                    onClick={() => onView(restaurant._id)}
                >
                    <ArrowUpRight size={19} />
                </button>

                <div className="image-cuisine">
                    {restaurant.cuisine}
                </div>

            </div>

            <div className="restaurant-card-content">

                <div className="restaurant-title-row">

                    <h3>
                        {restaurant.name}
                    </h3>

                    <span className="rating">
                        <Star
                            size={14}
                            fill="currentColor"
                        />
                        {Number(restaurant.rating || 0).toFixed(1)}
                    </span>

                </div>

                <div className="restaurant-location">

                    <MapPin size={14} />

                    {restaurant.city}

                </div>

                <p className="restaurant-address">
                    {restaurant.address}
                </p>

                <div className="card-actions">

                    <button
                        onClick={() => onView(restaurant._id)}
                        className="gold-action"
                    >
                        Manage Menu
                        <ArrowUpRight size={15} />
                    </button>

                    <div className="icon-actions">

                        <button
                            onClick={() => onEdit(restaurant)}
                            title="Edit restaurant"
                        >
                            <Pencil size={16} />
                        </button>

                        <button
                            onClick={() => onDelete(restaurant)}
                            title="Delete restaurant"
                            className="danger-icon"
                        >
                            <Trash2 size={16} />
                        </button>

                    </div>

                </div>

            </div>

        </article>
    );
}

export default RestaurantCard;