import {
    Star,
    Pencil,
    Trash2,
    CircleCheck,
    CircleX
} from "lucide-react";

import {
    getMenuImage
} from "../data/menuImages.js";

const getRatingText = (rating) => {
    const val = Number(rating || 4.5);
    if (val >= 4.8) return "Exceptional";
    if (val >= 4.5) return "Excellent";
    if (val >= 4.0) return "Very Good";
    if (val >= 3.5) return "Good";
    return "Recommended";
};

function MenuCard({
    item,
    onEdit,
    onDelete
}) {

    const image = getMenuImage(item.name);

    return (
        <article className="menu-card">

            <div className="menu-image-wrapper">

                <img
                    src={image}
                    alt={item.name}
                    className="menu-image"
                />

                <div className="menu-image-shade"></div>

                <span
                    className={
                        item.isAvailable
                            ? "availability available"
                            : "availability unavailable"
                    }
                >
                    {item.isAvailable ? (
                        <>
                            <CircleCheck size={13} />
                            Available
                        </>
                    ) : (
                        <>
                            <CircleX size={13} />
                            Unavailable
                        </>
                    )}
                </span>

            </div>

            <div className="menu-content">

                <div className="menu-name-row">

                    <h3>
                        {item.name}
                    </h3>

                    <span className="menu-price">
                        ₹{item.price}
                    </span>

                </div>

                <div className="menu-rating">

                    <Star
                        size={14}
                        fill="currentColor"
                    />

                    <span>
                        {Number(item.rating || 4.5).toFixed(1)}
                    </span>

                    <span className="rating-text">
                        {getRatingText(item.rating || 4.5)}
                    </span>

                </div>

                <div className="menu-card-footer">

                    <span className="menu-category">
                        Chef's selection
                    </span>

                    <div className="icon-actions">

                        <button
                            onClick={() => onEdit(item)}
                        >
                            <Pencil size={15} />
                        </button>

                        <button
                            onClick={() => onDelete(item)}
                            className="danger-icon"
                        >
                            <Trash2 size={15} />
                        </button>

                    </div>

                </div>

            </div>

        </article>
    );
}

export default MenuCard;