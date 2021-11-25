import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FeaturedComponent from "../featured-component/FeaturedComponent";
import { setFeaturedProducts } from "../../../redux/actions/ProductActions";

import { fsDb } from "../../../firebase";
const FeaturedProduct = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetchFeaturedProducts = async () => {
    const response = fsDb.collection("products");
    const data = await response.get();
    const NewFeaturedList = data.docs.filter((doc) => {
      if (doc.data().isFeatured) {
        return doc.data();
      }
    });

    const newData = NewFeaturedList.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    // Sorting Data
    newData.sort((a, b) => {
      return b.lastUpdateTime - a.lastUpdateTime;
    });

    dispatch(setFeaturedProducts(newData));
  };
  useEffect(() => {
    fetchFeaturedProducts();
  }, []);
  return (
    <div className="product__list">
      <div className="container mx-auto px-4">
        <div className="product__list--block py-10">
          <h1 className="product__list--title text-2xl font-semibold mb-4 text-green-600">
            <span className="border-b-2 border-green-600">
              Feature Products
            </span>
          </h1>

          <div className="product__grid grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
            <FeaturedComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
