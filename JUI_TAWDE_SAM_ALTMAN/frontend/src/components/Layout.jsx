import { NavLink, useNavigate } from "react-router-dom";
import {
    LayoutDashboard,
    UtensilsCrossed,
    LogOut,
    Crown
} from "lucide-react";

function Layout({ children }) {

    const navigate = useNavigate();

    // Dynamically decode username from JWT token for maximum robustness, falling back to localStorage
    const getUsername = () => {
        const token = localStorage.getItem("token");
        if (token) {
            try {
                const base64Url = token.split('.')[1];
                const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
                const jsonPayload = decodeURIComponent(
                    window.atob(base64)
                        .split('')
                        .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
                        .join('')
                );
                const payload = JSON.parse(jsonPayload);
                if (payload && payload.username) {
                    return payload.username;
                }
            } catch (e) {
                console.error("Error decoding token in Layout", e);
            }
        }
        
        const stored = localStorage.getItem("username") || localStorage.getItem("user") || "Manager";
        // If it's an email address, extract the username part before the @
        if (stored && stored.includes("@")) {
            return stored.split("@")[0];
        }
        return stored;
    };

    const username = getUsername();
    const initial  = username.charAt(0).toUpperCase();

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("username");
        navigate("/login");
    };

    return (
        <div className="app-shell">

            <aside className="sidebar">

                {/* ── Brand header ── */}
                <div className="sidebar-header">
                    <div className="brand">
                        <span>C</span>ULINA
                    </div>
                    <div className="brand-subtitle">
                        RESTAURANT MANAGEMENT
                    </div>
                </div>

                <div className="sidebar-divider"></div>

                {/* ── Navigation ── */}
                <nav>

                    <div className="nav-section-label">Navigation</div>

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

                {/* ── Sidebar user card at bottom ── */}
                <div className="sidebar-bottom">

                    <div className="sidebar-line"></div>

                    {/* User profile strip */}
                    <div className="sidebar-user-card">

                        <div className="sidebar-user-avatar">
                            {initial}
                        </div>

                        <div className="sidebar-user-info">
                            <span className="sidebar-user-name">{username}</span>
                            <span className="sidebar-user-role">
                                <Crown size={9} />
                                Administrator
                            </span>
                        </div>

                    </div>

                    <div className="sidebar-line" style={{ marginTop: "14px" }}></div>

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

                    <div className="user-area">
                        <span className="user-name">{username}</span>

                        <div className="user-avatar">
                            {initial}
                        </div>
                    </div>

                </header>

                {children}

            </main>

        </div>
    );
}

export default Layout;