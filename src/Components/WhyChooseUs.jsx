import "./WhyChooseUs.css";

import {
  FaShippingFast,
  FaLock,
  FaUndoAlt,
  FaHeadset,
} from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: <FaShippingFast />,
      title: "Free Shipping",
      desc: "Enjoy free delivery on all orders over $99.",
    },
    {
      id: 2,
      icon: <FaLock />,
      title: "Secure Payment",
      desc: "Your transactions are protected with 100% security.",
    },
    {
      id: 3,
      icon: <FaUndoAlt />,
      title: "Easy Returns",
      desc: "Return products within 30 days without hassle.",
    },
    {
      id: 4,
      icon: <FaHeadset />,
      title: "24/7 Support",
      desc: "Our support team is always ready to help you.",
    },
  ];

  return (
    <section className="why">

      <div className="section-title">
        <h2>Why Choose Us</h2>
        <p>
          We provide the best shopping experience for our customers.
        </p>
      </div>

      <div className="why-container">

        {features.map((item) => (

          <div className="why-card" key={item.id}>

            <div className="why-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

          </div>

        ))}

      </div>

    </section>
  );
};

export default WhyChooseUs;