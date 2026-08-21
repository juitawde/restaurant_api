import { useEffect, useState } from "react";
import { X } from "lucide-react";

function MenuModal({
    item,
    onClose,
    onSave
}) {

    const [form, setForm] = useState({
        name: "",
        price: "",
        rating: "4.5",
        isAvailable: true
    });

    useEffect(() => {

        if (item) {

            setForm({
                name: item.name || "",
                price: item.price || "",
                rating: item.rating || "4.5",
                isAvailable:
                    item.isAvailable !== undefined
                        ? item.isAvailable
                        : true
            });

        }

    }, [item]);

    const handleChange = (e) => {

        const { name, value, type, checked } = e.target;

        setForm({
            ...form,
            [name]: type === "checkbox"
                ? checked
                : value
        });

    };

    const submit = (e) => {

        e.preventDefault();

        onSave({
            ...form,
            price: Number(form.price),
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
                    {item ? "EDIT MENU ITEM" : "NEW MENU ITEM"}
                </span>

                <h2>
                    {item ? (
                        <>Refine the <em>dish.</em></>
                    ) : (
                        <>Add a new <em>dish.</em></>
                    )}
                </h2>

                <p className="modal-description">
                    Curate your restaurant's culinary offering.
                </p>

                <form onSubmit={submit}>

                    <div className="form-grid">

                        <div className="form-field full">
                            <label>Dish Name</label>
                            <input
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                placeholder="Butter Chicken"
                            />
                        </div>

                        <div className="form-field">
                            <label>Price</label>
                            <input
                                name="price"
                                type="number"
                                min="0"
                                value={form.price}
                                onChange={handleChange}
                                required
                                placeholder="420"
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
                            />
                        </div>

                        <label className="availability-check">

                            <input
                                type="checkbox"
                                name="isAvailable"
                                checked={form.isAvailable}
                                onChange={handleChange}
                            />

                            <span>
                                Dish is currently available
                            </span>

                        </label>

                    </div>

                    <button className="primary-button">
                        {item
                            ? "SAVE CHANGES"
                            : "ADD TO MENU"}
                    </button>

                </form>

            </div>

        </div>
    );
}

export default MenuModal;