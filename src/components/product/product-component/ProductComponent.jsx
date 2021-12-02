import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Button } from "../../ui/UI";
import { useNavigate } from "react-router-dom";
import "./ProductComponent.css";
const ProductComponent = (props) => {
  const navigate = useNavigate();
  const products = useSelector((state) => state.allProducts.products);
  const randerList = products
    .filter((item) => {
      if (props.term.length > 0) {
        return item.title.toLowerCase().includes(props.term.toLowerCase());
      } else {
        return item;
      }
    })
    .map((product) => {
      const { id, title, imagePath, shortDesc, stock, amount } = product;
      // console.log(product);
      const clickHandler = () => {
        navigate("{`/product/${id}`}");
      };
      return (
        <Card
          key={id}
          className="product__card product__item w-full transition duration-500 ease-in-out hover:shadow-xl"
        >
          <Link to={`/product/${id}`}>
            <div
              className={`product__item--inner ${
                props.listView ? "sm:flex" : ""
              }`}
            >
              <div
                className={`${
                  props.listView
                    ? "product__item--image sm:flex-none sm:w-40 md:w-48 sm:relative"
                    : "product__item--image"
                }`}
              >
                <img
                  src={imagePath}
                  alt={title}
                  className={`${
                    props.listView
                      ? "sm:absolute sm:inset-0 w-48 mx-auto sm:w-full sm:h-full object-contain"
                      : "product__item--image__img"
                  }`}
                />
              </div>
              <div
                className={`${
                  props.listView
                    ? "product__item--wrapper sm:flex-auto sm:p-2 sm:pl-4 md:p-6"
                    : "product__item--wrapper"
                }`}
              >
                <div className="product__item--content">
                  <h2 className="product__item--title text-black text-lg mb-2 font-semibold">
                    {title}
                  </h2>
                  <p className="product__item--short__desc text-sm text-black mb-4">
                    {shortDesc}
                  </p>
                  {props.listView && (
                    <div className="product__item--additional">
                      <div className="product__item--stock mb-2">
                        {stock ? (
                          <span className="text-green-400">In Stock</span>
                        ) : (
                          <span className="text-red-400">Out of Stock</span>
                        )}
                      </div>
                      <div className="product__item--price mb-2 text-lg font-semibold text-gray-500">
                        Rs {amount} /-
                      </div>
                    </div>
                  )}
                </div>
                {props.action && (
                  <div className="product__item--action">
                    <Button type="button" onClick={clickHandler}>
                      {props.action}
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </Link>
        </Card>
      );
    });
  return <>{randerList}</>;
};

export default ProductComponent;
