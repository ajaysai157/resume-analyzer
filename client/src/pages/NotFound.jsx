import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <h1 className="text-7xl font-bold text-indigo-600">
                404
            </h1>

            <p className="text-gray-600 mt-4">
                Page Not Found
            </p>

            <Link
                to="/dashboard"
                className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-lg"
            >
                Go Dashboard
            </Link>
        </div>
    );
};

export default NotFound;