import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../Context/ThemeContext";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      className="theme-btn"
      onClick={toggleTheme}
    >
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default ThemeToggle;