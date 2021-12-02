import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../../redux/actions/ProductActions";
import ProductComponent from "../product-component/ProductComponent";
import { fsDb } from "../../../firebase";
import PageTitle from "../../title/PageTitle";
import { MdViewModule, MdViewList } from "react-icons/md";
import { Spinner } from "../../ui/UI";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
const ProductListing = () => {
  const [gridView, setGridView] = useState(true);
  const [listView, setListView] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchterm, setSearchterm] = useState("");
  const dispath = useDispatch();
  const searcHandle = (event) => {
    setSearchterm(event.target.value);
  };
  const fetchProduct = async () => {
    setIsLoading(true);
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
    setIsLoading(false);
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  const gridViewHandle = () => {
    setGridView(true);
    setListView(false);
  };
  const listViewHandle = () => {
    setGridView(false);
    setListView(true);
  };
  return (
    <div className="product__list">
      <div className="container mx-auto px-4">
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
                <span>Products</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="Search__block">
          <div className="search__bar bg-green-100 py-16 px-4">
            <div className="search__bar--input max-w-xs sm:max-w-xl mx-auto">
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Search..."
                className="border rounded-full border-green-400 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent w-full"
                onChange={searcHandle}
              />
              {/* <input class="border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" /> */}
            </div>
          </div>
        </div>
        <div className="product__list--block py-10">
          <PageTitle className="product__list--title">Products</PageTitle>
          <div className="toolbar mb-5">
            <div className="toolbar__container flex flex-col">
              <div className="toolbar__view flex justify-end items-center">
                <span
                  className={`toolbar__view--grid mr-0.5  ${
                    gridView ? "toolbar__view--grid__active" : "cursor-pointer"
                  }`}
                  onClick={gridViewHandle}
                >
                  <MdViewModule
                    className={`toolbar__view--icon text-4xl ${
                      gridView ? "text-green-500" : "text-green-200"
                    }`}
                  />
                </span>
                <span
                  className={`toolbar__view--list  ${
                    listView ? "toolbar__view--list__active" : "cursor-pointer"
                  }`}
                  onClick={listViewHandle}
                >
                  <MdViewList
                    className={`toolbar__view--icon text-4xl  ${
                      listView ? "text-green-500" : "text-green-200"
                    }`}
                  />
                </span>
              </div>
            </div>
          </div>
          <div
            className={`product__grid grid ${
              gridView
                ? "product__grid--view sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                : "product__grid--list sm:grid-cols-1 gap-y-6"
            } `}
          >
            {isLoading ? (
              <div
                className={isLoading ? "spinner spinner__active" : "spinner"}
              >
                <Spinner />
              </div>
            ) : (
              <ProductComponent
                listView={listView}
                action="Learn More"
                term={searchterm}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
