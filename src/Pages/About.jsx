import "./About.css";
import {
  FaTruck,
  FaShieldAlt,
  FaStar,
  FaUsers,
  FaBoxOpen,
  FaAward,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import myPic from '../assets/myProfesPic.jpeg'

const About = () => {
  const features = [
    {
      icon: <FaTruck />,
      title: "Fast Delivery",
      desc: "We ensure quick and reliable delivery across the country.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure Payments",
      desc: "Your payments are protected with industry-standard security.",
    },
    {
      icon: <FaStar />,
      title: "Premium Quality",
      desc: "Every product is carefully selected to ensure top quality.",
    },
  ];

  const stats = [
    {
      icon: <FaUsers />,
      number: "10K+",
      title: "Happy Customers",
    },
    {
      icon: <FaBoxOpen />,
      number: "500+",
      title: "Products",
    },
    {
      icon: <FaAward />,
      number: "5+",
      title: "Years Experience",
    },
  ];

  return (
    <section className="about">

      {/* Hero */}

      <div className="about-hero">

        <h1>About ShopX</h1>

        <p>
          Your trusted destination for premium shopping experiences.
        </p>

      </div>

      {/* Story */}

      <div className="about-story">

        <div className="story-text">

          <h2>Our Story</h2>

          <p>
            ShopX is a modern React E-Commerce application created to
            provide a smooth, secure and responsive shopping experience.
            This project demonstrates modern frontend development using
            React, Context API, React Router, LocalStorage, Toast
            Notifications, Dark Mode and Responsive Design.
          </p>

        </div>

        <img
          src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=800"
          alt="Shopping"
        />

      </div>

      {/* Features */}

      <div className="about-features">

        <h2>Why Choose Us</h2>

        <div className="feature-grid">

          {features.map((item, index) => (

            <div className="feature-card" key={index}>

              <div className="feature-icon">

                {item.icon}

              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

            </div>

          ))}

        </div>

      </div>

      {/* Stats */}

      <div className="stats">

        {stats.map((item, index) => (

          <div className="stat-card" key={index}>

            <div className="stat-icon">
              {item.icon}
            </div>

            <h2>{item.number}</h2>

            <p>{item.title}</p>

          </div>

        ))}

      </div>

      {/* Developer */}

      <div className="developer">

        <h2>Developer</h2>

        <div className="developer-card">

          <img
           src={myPic}
          />

          <div>

            <h3>Maheswar Mandal</h3>

            <p>Frontend Developer</p>

            <p>
              Passionate about building modern, responsive,
              user-friendly web applications with React.
            </p>

          </div>

        </div>

      </div>

      {/* CTA */}

      <div className="about-cta">

        <h2>Ready to Shop?</h2>

        <p>Discover our latest premium collections.</p>

        <Link to="/shop">

          <button>

            Shop Now

          </button>

        </Link>

      </div>

    </section>
  );
};

export default About;