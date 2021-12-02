import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct } from "../../../redux/actions/ProductActions";
import { Button, Accordion } from "../../ui/UI";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { fsDb } from "../../../firebase";
import "./ProductDetails.css";
const ProductDetails = () => {
  const { productId } = useParams();
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const { id, title, imagePath, shortDesc, desc, pros, cons, stock, amount } =
    product;

  const fetchProductDetail = async () => {
    const productRef = fsDb.collection("products").doc(`${productId}`);

    const data = await productRef.get();
    if (!data.exists) {
      console.log("Data Not Exists");
    }
    dispatch(selectedProduct(data.data()));
    console.log("Atul", data.data());
  };

  useEffect(() => {
    if (productId && product !== "") {
      fetchProductDetail();
    }
  }, []);
  return (
    <div className="pc__product--detail">
      <div className="pc__breadcrum">
        <div className="container mx-auto py-2">
          <ul className="flex">
            <li className="">
              <Link to="/">
                <span className="text-green-600">Home</span>
              </Link>
              <MdKeyboardArrowRight className="inline-block mx-1 text-green-600" />
            </li>
            <li className="">
              <Link to="/product">
                <span className="text-green-600">Product</span>
              </Link>
              <MdKeyboardArrowRight className="inline-block mx-1 text-green-600" />
            </li>
            <li>
              <span>{title}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto py-4 md:py-12">
        <div className="grid grid-flow-col gap-4 grid-cols-2">
          <div className="pc__product--detail__image">
            <div className="pc__product--detail__image--inner">
              <img src={imagePath} alt={title} />
            </div>
          </div>
          <div className="pc__product--detail__content">
            <div className="pc__product--detail__content--inner">
              <h1 className="pc__product--detail__title text-2xl mb-4 font-semibold">
                {title}
              </h1>
              <div className="pc__product--detail__short--desc text-base mb-3">
                <p>{shortDesc}</p>
              </div>
              <div className="pc__prodcut--stock text-base mb-2">
                {stock ? (
                  <span className="text-green-400">In Stock</span>
                ) : (
                  <span className="text-red-400">Out of Stock</span>
                )}
              </div>
              <div className="pc__prodcut--price mb-3 text-lg font-semibold text-gray-500">
                Rs.&nbsp;{amount} /-
              </div>
              <div className="pc__prodcut--detail__actions">
                <div className="pc__product--add__to__card">
                  <Button disabled={!stock}>Add to Card</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pc__product--bootom flex flex-col">
          <Accordion title="Description" content={desc} />
          <Accordion title="Pros" content={pros} />
          <Accordion title="cons" content={cons} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
