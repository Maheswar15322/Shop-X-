import "./Contact.css";
import { useState } from "react";
import toast from "react-hot-toast";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const Contact = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Message sent successfully 🚀");

    e.target.reset();
  };

  const faqs = [
    {
      question: "How long does delivery take?",
      answer: "Usually 3-5 business days depending on your location.",
    },
    {
      question: "Can I return a product?",
      answer: "Yes. Products can be returned within 7 days.",
    },
    {
      question: "Is online payment secure?",
      answer: "Yes. All payments are protected with secure encryption.",
    },
  ];

  return (
    <section className="contact">

      {/* Hero */}

      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you.</p>
      </div>

      {/* Contact Info */}

      <div className="contact-info">

        <div className="info-card">
          <FaMapMarkerAlt />
          <h3>Address</h3>
          <p>West Bengal, India</p>
        </div>

        <div className="info-card">
          <FaPhoneAlt />
          <h3>Phone</h3>
          <p>+91 XXXXX XXXXX</p>
        </div>

        <div className="info-card">
          <FaEnvelope />
          <h3>Email</h3>
          <p>mahimandal8617@gmail.com</p>
        </div>

        <div className="info-card">
          <FaClock />
          <h3>Working Hours</h3>
          <p>Mon - Sat | 9 AM - 7 PM</p>
        </div>

      </div>

      {/* Form */}

      <div className="contact-container">

        <form className="contact-form" onSubmit={handleSubmit}>

          <h2>Send a Message</h2>

          <input
            type="text"
            placeholder="Full Name"
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            required
          />

          <input
            type="text"
            placeholder="Subject"
            required
          />

          <textarea
            rows="6"
            placeholder="Your Message..."
            required
          />

          <button type="submit">
            Send Message
          </button>

        </form>

        {/* Map */}

        <div className="contact-map">

          <iframe
            title="Google Map"
            src="https://maps.google.com/maps?q=Kolkata&t=&z=11&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
          />

        </div>

      </div>

      {/* FAQ */}

      <div className="faq">

        <h2>Frequently Asked Questions</h2>

        {faqs.map((item, index) => (

          <div
            key={index}
            className="faq-item"
          >

            <div
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >

              <h3>{item.question}</h3>

              {openFAQ === index
                ? <FaChevronUp />
                : <FaChevronDown />
              }

            </div>

            {openFAQ === index && (

              <p className="faq-answer">
                {item.answer}
              </p>

            )}

          </div>

        ))}

      </div>

      {/* Social */}

      <div className="social-links">

        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>

      </div>

    </section>
  );
};

export default Contact;