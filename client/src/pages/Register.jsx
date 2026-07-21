import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../api/authApi";

const Register = () => {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({

        name: "",

        email: "",

        password: "",

    });

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

            await registerUser(formData);

            alert("Registration Successful");

            navigate("/login");

        } catch (error) {

            alert(

                error.response?.data?.message ||

                "Registration Failed"

            );

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="container">

                        <>
            <h1>Create Account 🚀</h1>
            <p style={{marginBottom:"25px",marginTop:"5px"}}>
            Create your AI Resume Analyzer account
            </p>
            </>

            <form onSubmit={handleSubmit}>

                <input

                    type="text"

                    name="name"

                    placeholder="Name"

                    value={formData.name}

                    onChange={handleChange}

                    required

                />

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

                            ? "Registering..."

                            : "Register"

                    }

                </button>

            </form>

            <p>

                Already have an account?

                <Link to="/login">

                    Login

                </Link>

            </p>

        </div>

    );

};

export default Register;