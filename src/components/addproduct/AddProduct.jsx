import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import { Card, Button } from "../ui/UI";
import "./AddProduct.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { Spinner } from "../ui/UI";
const AddProduct = () => {
  const [isLoadding, setIsLoadding] = useState(false);
  const [success, setSuccess] = useState("");
  const [onAddError, setOnAddError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    setOnAddError("");
    setIsLoadding(true);
    await axios
      .post("http://localhost:3100/product", data)
      .then((res) => {
        console.log("Response ", res);
        if (res && res.status === 201) {
          setSuccess("Product Added Successfuly.");
        }
        setIsLoadding(false);
      })
      .catch((err) => {
        setIsLoadding(false);
        setOnAddError("Unable to add.");
      });

    setIsLoadding(false);
    reset();
    const interval = setTimeout(() => {}, 2000);
  };

  useEffect(() => {
    const timeinterval = setTimeout(() => {
      setSuccess("");
      setOnAddError("");
    }, 2000);
    return () => {
      clearTimeout(timeinterval);
    };
  }, [success, onAddError]);
  return (
    <div className="pc__addproduct">
      <div className="pc__addproduct--container container mx-auto px-4 py-8">
        <Card className="pc__addproduct--card max-w-md">
          <h1 className="pc__addproduct--card__title text-xl mb-5 text-green-600">
            Add New product
          </h1>
          <div className="pc__addproduct--card__form">
            {success && (
              <div className="text-white bg-green-300 p-2 mb-2 transition duration-500 ease-in-out pc__addproduct--message">
                {success}
              </div>
            )}
            {onAddError && (
              <div className="text-white bg-red-300 p-2 mb-2 transition duration-500 ease-in-out pc__addproduct--message">
                {onAddError}
              </div>
            )}
            {isLoadding && (
              <div
                className={isLoadding ? "spinner spinner__active" : "spinner"}
              >
                <Spinner />
              </div>
            )}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4 flex flex-col">
                <label htmlFor="title" className="flex text-sm text-black mb-1">
                  Product Name
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  autoComplete="off"
                  placeholder="Enter Product Name"
                  {...register("title", {
                    required: "Product name required",
                  })}
                  className={errors.title && "input__error"}
                />
                {errors.title && (
                  <span role="alert" className="input__error text-red-400">
                    {errors.title.message}
                  </span>
                )}
              </div>

              <div className="mb-4 flex flex-col">
                <label
                  htmlFor="imagePath"
                  className="flex text-sm text-black mb-1"
                >
                  Image Path
                </label>
                <input
                  type="text"
                  name="imagePath"
                  id="imagePath"
                  autoComplete="off"
                  placeholder="Enter Image Path"
                  {...register("imagePath", {
                    required: "Image path required",
                  })}
                  className={errors.imagePath && "input__error"}
                />
                {errors.firstName && (
                  <span role="alert" className="input__error text-red-400">
                    {errors.imagePath.message}
                  </span>
                )}
              </div>

              <div className="mb-4 flex flex-col">
                <label
                  htmlFor="shortDesc"
                  className="flex text-sm text-black mb-1"
                >
                  Product Short Description
                </label>
                <textarea
                  name="shortDesc"
                  id="shortDesc"
                  autoComplete="off"
                  placeholder="Enter short description"
                  {...register("shortDesc", {
                    required: "short Description required",
                  })}
                  className={errors.shortDesc && "input__error"}
                />
                {errors.shortDesc && (
                  <span role="alert" className="input__error text-red-400">
                    {errors.shortDesc.message}
                  </span>
                )}
              </div>
              <div className="mb-4 flex flex-col">
                <label htmlFor="desc" className="flex text-sm text-black mb-1">
                  Product Description
                </label>
                <textarea
                  name="desc"
                  id="desc"
                  autoComplete="off"
                  placeholder="Enter  description"
                  {...register("desc", {
                    required: "Enter Description required",
                  })}
                  className={errors.desc && "input__error"}
                />
                {errors.desc && (
                  <span role="alert" className="input__error text-red-400">
                    {errors.desc.message}
                  </span>
                )}
              </div>
              <div className="mb-4 flex flex-col ">
                <div className="flex input__checkbox">
                  <input
                    type="checkbox"
                    name="isFeatured"
                    id="isFeatured"
                    autoComplete="off"
                    placeholder="*****"
                    {...register("isFeatured")}
                    className={errors.isFeatured && "input__error"}
                  />
                  <label
                    htmlFor="isFeatured"
                    className="flex text-sm text-black mb-1"
                  >
                    Featured Product
                  </label>
                </div>
                {/* {errors.isFeatured && (
                  <span role="alert" className="input__error text-red-400">
                    {errors.isFeatured.message}
                  </span>
                )} */}
              </div>

              <div className="mb-4 flex flex-col ">
                <div className="flex input__checkbox">
                  <input
                    type="checkbox"
                    name="isNew"
                    id="isNew"
                    autoComplete="off"
                    placeholder="*****"
                    {...register("isNew")}
                    className={errors.isNew && "input__error"}
                  />
                  <label
                    htmlFor="isNew"
                    className="flex text-sm text-black mb-1"
                  >
                    New Product
                  </label>
                </div>
                {/* {errors.isNew && (
                  <span role="alert" className="input__error text-red-400">
                    {errors.isNew.message}
                  </span>
                )} */}
              </div>

              <div className="mb-4 flex flex-col ">
                <select {...register("stock")}>
                  <option value="instock">In Stock</option>
                  <option value="outstock">Out of Stock</option>
                </select>
              </div>
              <div className="mb-4 flex flex-col">
                <label
                  htmlFor="amount"
                  className="flex text-sm text-black mb-1"
                >
                  Price
                </label>
                <input
                  type="text"
                  name="amount"
                  id="amount"
                  autoComplete="off"
                  placeholder="Enter product amount"
                  {...register("amount", {
                    required: "Product amount required",
                  })}
                  className={errors.amount && "input__error"}
                />
                {errors.amount && (
                  <span role="alert" className="input__error text-red-400">
                    {errors.amount.message}
                  </span>
                )}
              </div>
              <div className="mb-4 flex flex-col">
                <label htmlFor="pros" className="flex text-sm text-black mb-1">
                  Product Pros
                </label>
                <textarea
                  name="pros"
                  id="pros"
                  autoComplete="off"
                  placeholder="Enter  Pros"
                  {...register("pros", {
                    required: "Product Pros required",
                  })}
                  className={errors.pros && "input__error"}
                />
                {errors.pros && (
                  <span role="alert" className="input__error text-red-400">
                    {errors.pros.message}
                  </span>
                )}
              </div>
              <div className="mb-4 flex flex-col">
                <label htmlFor="cons" className="flex text-sm text-black mb-1">
                  Product Cons
                </label>
                <textarea
                  name="cons"
                  id="cons"
                  autoComplete="off"
                  placeholder="Enter product cons"
                  {...register("cons", {
                    required: "Product cons required",
                  })}
                  className={errors.cons && "input__error"}
                />
                {errors.cons && (
                  <span role="alert" className="input__error text-red-400">
                    {errors.cons.message}
                  </span>
                )}
              </div>
              <Button disabled={isLoadding} type="submit">
                Add
              </Button>
            </form>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AddProduct;
