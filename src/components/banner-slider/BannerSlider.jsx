import React from "react";
import Slider from "react-slick";
import "./BannerSlider.css";
import img1 from "../../assest/banner/img1.jpg";
import img2 from "../../assest/banner/img2.jpg";
import img3 from "../../assest/banner/img3.jpg";
import img4 from "../../assest/banner/img4.jpg";
import img5 from "../../assest/banner/img5.jpg";
import img6 from "../../assest/banner/img6.jpg";

const BannerSlider = () => {
  const imgList = [img1, img2, img3, img4, img5, img6];
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    //speed: 2000,
    autoplaySpeed: 2000,
    //cssEase: "linear",
  };
  const NewList = imgList.map((img, index) => (
    <div key={index}>
      <img src={img} alt={`img${index + 1}`} />
    </div>
  ));
  return (
    <div className="Banner__slider container px-4 mx-auto">
      <Slider {...settings}>{NewList}</Slider>
    </div>
  );
};

export default BannerSlider;
