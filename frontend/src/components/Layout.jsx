import { NavLink, useNavigate } from "react-router-dom";
import {
    LayoutDashboard,
    UtensilsCrossed,
    LogOut,
    Sparkles
} from "lucide-react";

function Layout({ children }) {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <div className="app-shell">

            <aside className="sidebar">

                <div className="sidebar-header">

                    <div className="brand">
                        <span>C</span>ULINA
                    </div>

                    <div className="brand-subtitle">
                        RESTAURANT MANAGEMENT
                    </div>

                </div>

                <div className="sidebar-divider"></div>

                <nav>

                    <div className="nav-section-label">Menu</div>

                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) =>
                            isActive ? "nav-item active" : "nav-item"
                        }
                    >
                        <LayoutDashboard size={18} />
                        Dashboard
                    </NavLink>

                    <NavLink
                        to="/restaurants"
                        className={({ isActive }) =>
                            isActive ? "nav-item active" : "nav-item"
                        }
                    >
                        <UtensilsCrossed size={18} />
                        Restaurants
                    </NavLink>

                </nav>

                <div className="sidebar-bottom">

                    <div className="sidebar-line"></div>

                    <button
                        className="logout-button"
                        onClick={logout}
                    >
                        <LogOut size={17} />
                        Sign out
                    </button>

                </div>

            </aside>

            <main className="main-content">

                <header className="topbar">

                    <div className="topbar-label">
                        <Sparkles size={19} />
                        MANAGEMENT PORTAL
                    </div>

                    <div className="user-area">
                        

                        <div className="user-avatar">
                            {(localStorage.getItem("user") || "M")
                                .charAt(0)
                                .toUpperCase()}
                        </div>
                    </div>

                </header>

                {children}

            </main>

        </div>
    );
}

export default Layout;