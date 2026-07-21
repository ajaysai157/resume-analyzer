import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const active = (path) =>
    location.pathname === path
      ? "text-indigo-600 bg-indigo-50"
      : "text-gray-600";

  return (
    <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto h-20 flex justify-between items-center px-6">

        <h1 className="text-2xl font-bold text-indigo-600">
          AI Resume Analyzer
        </h1>

        <div className="flex items-center gap-3">

          <Link
            to="/dashboard"
            className={`px-4 py-2 rounded-xl font-medium transition ${active("/dashboard")}`}
          >
            Dashboard
          </Link>

          <Link
            to="/analyze"
            className={`px-4 py-2 rounded-xl font-medium transition ${active("/analyze")}`}
          >
            Analyze
          </Link>

          <Link
            to="/history"
            className={`px-4 py-2 rounded-xl font-medium transition ${active("/history")}`}
          >
            History
          </Link>

          <div className="ml-6 text-right">
            <p className="font-semibold">{user?.name}</p>
            <p className="text-xs text-gray-500">{user?.email}</p>
          </div>

          <button
            onClick={handleLogout}
            className="ml-4 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl"
          >
            Logout
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;