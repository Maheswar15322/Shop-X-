import "./Testimonials.css";
import { FaStar } from "react-icons/fa";

import user1 from "../assets/user1.jpeg";
import user2 from "../assets/user2.jpeg";
import user3 from "../assets/user3.png";

const reviews = [
  {
    id: 1,
    image: user1,
    name: "Sophia Johnson",
    job: "Fashion Designer",
    review:
      "Amazing shopping experience! The product quality exceeded my expectations and delivery was incredibly fast.",
  },
  {
    id: 2,
    image: user2,
    name: "Michael Smith",
    job: "Software Engineer",
    review:
      "Excellent customer support and secure payment. I'll definitely shop here again.",
  },
  {
    id: 3,
    image: user3,
    name: "Emma Williams",
    job: "Photographer",
    review:
      "Beautiful products and fantastic service. Highly recommended for anyone looking for premium quality.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">

      <div className="section-title">
        <h2>What Our Customers Say</h2>
        <p>Trusted by thousands of happy shoppers around the world.</p>
      </div>

      <div className="testimonial-container">

        {reviews.map((item) => (
          <div className="testimonial-card" key={item.id}>

            <img src={item.image} alt={item.name} />

            <h3>{item.name}</h3>

            <span>{item.job}</span>

            <div className="stars">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} />
              ))}
            </div>

            <p>"{item.review}"</p>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Testimonials;