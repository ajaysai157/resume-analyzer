import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {

    const { user, logout } = useAuth();

    const navigate = useNavigate();

    const handleLogout = () => {

        logout();

        navigate("/login");

    };

    return (

        <nav
            style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "15px 40px",
                background: "#667eea",
                color: "#fff",
                alignItems: "center",
            }}
        >

            <h2>AI Resume Analyzer</h2>

            <div
                style={{
                    display: "flex",
                    gap: "20px",
                    alignItems: "center",
                }}
            >

                <Link
                    to="/dashboard"
                    style={{ color: "#fff", textDecoration: "none" }}
                >
                    Dashboard
                </Link>

                <Link
                    to="/analyze"
                    style={{ color: "#fff", textDecoration: "none" }}
                >
                    Analyze
                </Link>

                <Link
                    to="/history"
                    style={{ color: "#fff", textDecoration: "none" }}
                >
                    History
                </Link>

                <span>
                    {user?.name}
                </span>

                <button
                    onClick={handleLogout}
                >
                    Logout
                </button>

            </div>

        </nav>

    );

};

export default Navbar;