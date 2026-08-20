import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
    UtensilsCrossed,
    Soup,
    Star,
    ArrowUpRight
} from "lucide-react";

import { getRestaurants } from "../api";
import RestaurantCard from "../components/RestaurantCard";

function Dashboard() {

    const navigate = useNavigate();
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {

        const load = async () => {

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

        load();

    }, []);

    const totalMenuItems = restaurants.length * 10;

    const averageRating =
        restaurants.length
            ? (
                restaurants.reduce(
                    (sum, r) => sum + Number(r.rating || 0),
                    0
                ) / restaurants.length
            ).toFixed(1)
            : "0.0";

    return (
        <div className="page">

            <section className="dashboard-heading">

                <div>

                    <span className="eyebrow">
                        WELCOME BACK
                    </span>

                    <h1>
                        Good morning, <em>Manager.</em>
                    </h1>

                    <p>
                        Your culinary portfolio, beautifully managed.
                    </p>

                </div>

            </section>

            <section className="stats-grid">

                <div className="stat-card">
                    <div className="stat-icon">
                        <UtensilsCrossed size={20} />
                    </div>

                    <span>RESTAURANTS</span>

                    <strong>
                        {restaurants.length}
                    </strong>
                </div>

                <div className="stat-card">
                    <div className="stat-icon">
                        <Soup size={20} />
                    </div>

                    <span>MENU ITEMS</span>

                    <strong>
                        {totalMenuItems}
                    </strong>
                </div>

                <div className="stat-card">
                    <div className="stat-icon">
                        <Star size={20} />
                    </div>

                    <span>AVERAGE RATING</span>

                    <strong>
                        {averageRating}
                    </strong>
                </div>

            </section>

            <section className="section-heading">

                <div>
                    <span className="eyebrow">
                        YOUR PORTFOLIO
                    </span>

                    <h2>
                        Our <em>restaurants.</em>
                    </h2>
                </div>

                <Link
                    to="/restaurants"
                    className="text-link"
                >
                    View all
                    <ArrowUpRight size={15} />
                </Link>

            </section>

            <div className="restaurant-grid">

                {restaurants.slice(0, 3).map((restaurant) => (

                    <RestaurantCard
                        key={restaurant._id}
                        restaurant={restaurant}
                        onView={(id) =>
                            navigate(`/restaurants/${id}`)
                        }
                        onEdit={() => {}}
                        onDelete={() => {}}
                    />

                ))}

            </div>

        </div>
    );
}

export default Dashboard;