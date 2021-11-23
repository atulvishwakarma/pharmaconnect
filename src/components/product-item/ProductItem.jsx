import React from "react";
import "./ProductItem.css";
import { Card, Button } from "../ui/UI";
const ProductItem = (props) => {
  const { imagePath, title, shortDesc } = props.item;
  console.log(props);
  return (
    <Card className="product__card product__item w-full transition duration-500 ease-in-out hover:shadow-xl">
      <div className="product__item--inner">
        <div className="product__item--image">
          <img src={imagePath} alt={title} />
        </div>
        <div className="product__item--content">
          <h2 className="product__item--title text-black text-lg mb-2 font-semibold">
            {title}
          </h2>
          <p className="product__item--short__desc text-sm text-black mb-4">
            {shortDesc}
          </p>
        </div>
        {props.action && (
          <div className="product__item--action">
            <Button type="button">Learn More</Button>
          </div>
        )}
      </div>
    </Card>
  );
};

export default ProductItem;
