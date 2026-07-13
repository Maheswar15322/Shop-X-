import "./Login.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import { useAuth } from "../Context/AuthContext";

const Login = () => {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Please fill in all fields");
      return;
    }

   try {
  await login(formData.email, formData.password);

  toast.success("Login Successful 🎉");

  navigate("/");

} catch (error) {

  switch (error.code) {

    case "auth/invalid-credential":
      toast.error("Invalid email or password");
      break;

    case "auth/user-not-found":
      toast.error("User not found");
      break;

    case "auth/wrong-password":
      toast.error("Incorrect password");
      break;

    case "auth/invalid-email":
      toast.error("Invalid email address");
      break;

    default:
      toast.error(error.message);
  }

}
  };

  return (
    <section className="login-page">

      <div className="login-card">

        <h1>Welcome Back 👋</h1>

        <p>
          Login to continue shopping at ShopX
        </p>

        <form onSubmit={handleSubmit}>

          {/* Email */}

          <div className="input-box">

            <FaEnvelope className="input-icon" />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />

          </div>

          {/* Password */}

          <div className="input-box">

            <FaLock className="input-icon" />

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />

            <span
              className="eye-icon"
              onClick={() =>
                setShowPassword(!showPassword)
              }
            >
              {showPassword ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </span>

          </div>

          {/* Remember */}

          <div className="login-options">

            <label>

              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
              />

              Remember Me

            </label>

            <Link to="#">
              Forgot Password?
            </Link>

          </div>

          <button
            className="login-btn"
            type="submit"
          >
            Login
          </button>

        </form>

        <div className="divider">
          <span>OR</span>
        </div>

        <button className="google-btn">

          Continue with Google

        </button>

        <p className="register-text">

          Don't have an account?

          <Link to="/register">

            Register

          </Link>

        </p>

      </div>

    </section>
  );
};

export default Login;