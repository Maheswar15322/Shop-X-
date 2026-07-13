import "./Categories.css";
import { FaTshirt, FaMobileAlt, FaLaptop, FaCouch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();

  const categoryData = [
    {
      id: 1,
      icon: <FaTshirt />,
      title: "Fashion",
      items: "250+ Items",
      categories: [
        "tops",
        "mens-shirts",
        "mens-shoes",
        "mens-watches",
        "womens-dresses",
        "womens-shoes",
        "womens-bags",
        "womens-jewellery",
        "womens-watches",
        "sunglasses",
      ],
    },
    {
      id: 2,
      icon: <FaMobileAlt />,
      title: "Mobiles",
      items: "180+ Items",
      categories: ["smartphones", "mobile-accessories"],
    },
    {
      id: 3,
      icon: <FaLaptop />,
      title: "Electronics",
      items: "320+ Items",
      categories: ["laptops", "tablets"],
    },
    {
      id: 4,
      icon: <FaCouch />,
      title: "Furniture",
      items: "150+ Items",
      categories: ["furniture", "home-decoration", "kitchen-accessories"],
    },
  ];

  return (
    <section className="categories">
      <div className="section-title">
        <h2>Shop By Category</h2>
        <p>Find everything you need from our premium collections.</p>
      </div>

      <div className="category-container">
        {categoryData.map((item) => (
          <div
            className="category-card"
            key={item.id}
            onClick={() =>
              navigate(`/shop?categories=${item.categories.join(",")}`)
            }
          >
            <div className="category-icon">{item.icon}</div>

            <h3>{item.title}</h3>

            <p>{item.items}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
