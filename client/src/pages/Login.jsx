import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../api/authApi";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

const Login = () => {

    const navigate = useNavigate();

    const { login } = useAuth();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        setLoading(true);

        try {

            const data = await loginUser(formData);

            login(data.token, data.user);

            

            toast.success("Login Successful");

            navigate("/dashboard");

        } catch (error) {

            toast.error("Analysis Failed");

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="container">

            <>
            <h1>Welcome Back 👋</h1>
            <p style={{marginBottom:"25px",marginTop:"5px"}}>
            Login to continue analyzing resumes
            </p>
            </>

            <form onSubmit={handleSubmit}>

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />

                <button
                    type="submit"
                    disabled={loading}
                >

                    {
                        loading
                            ? "Logging In..."
                            : "Login"
                    }

                </button>

            </form>

            <p>

                Don't have an account?

                <Link to="/register">
                    Register
                </Link>

            </p>

        </div>

    );

};

export default Login;