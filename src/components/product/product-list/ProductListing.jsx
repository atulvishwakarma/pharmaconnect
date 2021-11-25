import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../../redux/actions/ProductActions";
import ProductComponent from "../product-component/ProductComponent";
import { fsDb } from "../../../firebase";
const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispath = useDispatch();
  const fetchProduct = async () => {
    const response = fsDb.collection("products");
    const data = await response.get();
    const newData = data.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    // Sort
    newData.sort((a, b) => {
      return b.lastUpdateTime - a.lastUpdateTime;
    });
    dispath(setProducts(newData));
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
