import React from "react";
import Hero from "../Components/Hero";
import Categories from "../Components/Categories";

import OfferBanner from "../Components/OfferBanner";
import WhyChooseUs from "../Components/WhyChooseUs";
import Testimonials from "../Components/Testimonials";
import Newsletter from "../Components/Newsletter";

const Home = () => {
  return (
    <div>
   
      <Hero/>
      <Categories/>
      <OfferBanner />
      <WhyChooseUs />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;
