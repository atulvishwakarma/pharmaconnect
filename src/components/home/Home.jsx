import React from "react";
import FeatureProduct from "../feature-product/FeatureProduct";
import BannerSlider from "../banner-slider/BannerSlider";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <BannerSlider />
      <FeatureProduct />
    </div>
  );
};

export default Home;
