import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../../redux/actions/ProductActions";
import ProductComponent from "../product-component/ProductComponent";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispath = useDispatch();
  console.log("Products: ", products);
  const fetchProduct = async () => {
    const response = await axios
      .get("http://localhost:3100/product")
      .catch((err) => {
        console.log(err);
      });
    dispath(setProducts(response.data));
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <div className="product__list">
      <div className="container mx-auto px-4">
        <div className="product__list--block py-10">
          <h1 className="product__list--title text-2xl font-semibold mb-4 text-green-600">
            <span className="border-b-2 border-green-600">Products</span>
          </h1>

          <div className="product__grid grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
            <ProductComponent action="Learn More" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
