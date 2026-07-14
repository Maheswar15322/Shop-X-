import "./Register.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import toast from "react-hot-toast";
import { useAuth } from "../Context/AuthContext";
import { updateProfile } from "firebase/auth";
import { auth } from "../Firebase/Firebase";

const Register = () => {
  const navigate = useNavigate();

  const { register } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange =  (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = formData;

    if (!name || !email || !password || !confirmPassword) {
      toast.error("Please fill in all fields");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

try {
  await register(email, password);

  // Save user's name in Firebase
  await updateProfile(auth.currentUser, {
    displayName: name,
  });

  toast.success("Account Created Successfully 🎉");

  setFormData({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  navigate("/login");

} catch (error) {

  switch (error.code) {

    case "auth/email-already-in-use":
      toast.error("Email already exists");
      break;

    case "auth/invalid-email":
      toast.error("Invalid email address");
      break;

    case "auth/weak-password":
      toast.error("Password should be at least 6 characters");
      break;

    default:
      toast.error(error.message);
  }

}
  };

  return (
    <section className="register-page">

      <div className="register-card">

        <h1>Create Account</h1>

        <p>Join ShopX and start shopping today.</p>

        <form onSubmit={handleSubmit}>

          {/* Name */}

          <div className="input-box">

            <FaUser className="input-icon" />

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
            />

          </div>

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

          {/* Confirm Password */}

          <div className="input-box">

            <FaLock className="input-icon" />

            <input
              type={
                showConfirmPassword
                  ? "text"
                  : "password"
              }
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />

            <span
              className="eye-icon"
              onClick={() =>
                setShowConfirmPassword(
                  !showConfirmPassword
                )
              }
            >
              {showConfirmPassword ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </span>

          </div>

          <button
            className="register-btn"
            type="submit"
          >
            Create Account
          </button>

        </form>

        <div className="divider">
          <span>OR</span>
        </div>

        <button className="google-btn">
          Continue with Google
        </button>

        <p className="login-text">

          Already have an account?

          <Link to="/login">
            Login
          </Link>

        </p>

      </div>

    </section>
  );
};

export default Register;