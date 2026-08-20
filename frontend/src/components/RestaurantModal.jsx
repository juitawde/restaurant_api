import { useEffect, useState } from "react";
import { X } from "lucide-react";

function RestaurantModal({
    restaurant,
    onClose,
    onSave
}) {

    const [form, setForm] = useState({
        name: "",
        city: "",
        address: "",
        cuisine: "",
        rating: ""
    });

    useEffect(() => {

        if (restaurant) {
            setForm({
                name: restaurant.name || "",
                city: restaurant.city || "",
                address: restaurant.address || "",
                cuisine: restaurant.cuisine || "",
                rating: restaurant.rating || ""
            });
        }

    }, [restaurant]);

    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

    };

    const submit = (e) => {

        e.preventDefault();

        onSave({
            ...form,
            rating: Number(form.rating)
        });

    };

    return (
        <div className="modal-backdrop">

            <div className="luxury-modal">

                <button
                    className="modal-close"
                    onClick={onClose}
                >
                    <X size={20} />
                </button>

                <span className="eyebrow">
                    {restaurant ? "EDIT RESTAURANT" : "NEW RESTAURANT"}
                </span>

                <h2>
                    {restaurant ? (
                        <>Refine your <em>restaurant.</em></>
                    ) : (
                        <>Create a new <em>restaurant.</em></>
                    )}
                </h2>

                <p className="modal-description">
                    Add the details of your culinary destination.
                </p>

                <form onSubmit={submit}>

                    <div className="form-grid">

                        <div className="form-field full">
                            <label>Restaurant Name</label>
                            <input
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                placeholder="Maison Aurelia"
                            />
                        </div>

                        <div className="form-field">
                            <label>City</label>
                            <input
                                name="city"
                                value={form.city}
                                onChange={handleChange}
                                required
                                placeholder="Mumbai"
                            />
                        </div>

                        <div className="form-field">
                            <label>Cuisine</label>
                            <input
                                name="cuisine"
                                value={form.cuisine}
                                onChange={handleChange}
                                required
                                placeholder="Contemporary Indian"
                            />
                        </div>

                        <div className="form-field full">
                            <label>Address</label>
                            <input
                                name="address"
                                value={form.address}
                                onChange={handleChange}
                                required
                                placeholder="123 Luxury Avenue"
                            />
                        </div>

                        <div className="form-field">
                            <label>Rating</label>
                            <input
                                name="rating"
                                type="number"
                                min="0"
                                max="5"
                                step="0.1"
                                value={form.rating}
                                onChange={handleChange}
                                required
                                placeholder="4.7"
                            />
                        </div>

                    </div>

                    <button className="primary-button">
                        {restaurant
                            ? "SAVE CHANGES"
                            : "ADD RESTAURANT"}
                    </button>

                </form>

            </div>

        </div>
    );
}

export default RestaurantModal;