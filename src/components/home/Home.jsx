import React from "react";
import BannerSlider from "../banner-slider/BannerSlider";
import "./Home.css";
import FeaturedProduct from "../product/featured-product/FeaturedProduct";
const Home = () => {
  return (
    <div className="pc__home">
      <BannerSlider />
      <FeaturedProduct />
    </div>
  );
};

export default Home;
