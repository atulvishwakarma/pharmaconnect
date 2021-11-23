import axios from "axios";
import { React, useEffect, useState } from "react";
import ProductItem from "../product-item/ProductItem";
import Spinner from "../ui/spinner/Spinner";

const FeatureProduct = () => {
  const [productList, setProductList] = useState([]);
  const [isLoadding, setIsLoadding] = useState(false);

  useEffect(() => {
    setIsLoadding(true);
    const getFeatureProduct = async () => {
      await axios
        .get("http://localhost:3100/product")
        .then((res) => {
          if (res.status === 200) {
            setProductList(res.data);
            //console.log(res.data);
          }
          setIsLoadding(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getFeatureProduct();
  }, []);

  let ProductItemList = "No Product";
  if (productList.length > 0) {
    ProductItemList = productList
      .sort((a, b) => {
        return b.id - a.id;
      })
      .map((item, count = 1) => {
        if (item.isFeature) {
          return <ProductItem key={item.id} item={item} />;
        }
      });
  }

  return (
    <div className="product__feature">
      <div className="container mx-auto px-4">
        {isLoadding && (
          <div className={isLoadding ? "spinner spinner__active" : "spinner"}>
            <Spinner />
          </div>
        )}
        {productList.length <= 0 && !isLoadding && (
          <div className="text-black text-base text-center">
            {ProductItemList}
          </div>
        )}
        {productList.length > 0 && (
          <div className="product__list--block py-10">
            <h1 className="product__list--title text-2xl font-semibold mb-4 text-green-600">
              <span className="border-b-2 border-green-600">
                Feature Products
              </span>
            </h1>

            <div className="product__grid grid grid-cols-4 gap-4 ">
              {ProductItemList}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeatureProduct;
