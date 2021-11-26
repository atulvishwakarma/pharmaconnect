import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Button } from "../../ui/UI";
import { useNavigate } from "react-router-dom";
import "./ProductComponent.css";
const FeaturedComponent = (props) => {
  const navigate = useNavigate();
  const products = useSelector((state) => state.featuredProduct.products);
  //console.log("feature", products);
  const clickHandler = () => {
    navigate("{`/product/${id}`}");
  };
  const randerList = products.slice(0, 4).map((product) => {
    const { id, title, imagePath, shortDesc } = product;

    return (
      <Card
        key={id}
        className="product__card product__item product__item--featured  w-full transition duration-500 ease-in-out hover:shadow-xl"
      >
        <Link to={`/product/${id}`}>
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
                <Button type="button" onClick={clickHandler}>
                  {props.action}
                </Button>
              </div>
            )}
          </div>
        </Link>
      </Card>
    );
  });
  return <>{randerList}</>;
};

export default FeaturedComponent;
