import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { Card, Button } from "../ui/UI";
import "./Registration.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
const Registration = () => {
  const [errorSignup, setErrorSignup] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { signup, currentUser } = useAuth();
  const navigate = useNavigate();
  console.log(currentUser);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    try {
      setErrorSignup("");
      setIsLoading(true);
      await signup(data.email, data.password);
    } catch {
      setErrorSignup("Failed to create an account");
    }
    setIsLoading(false);
    reset();
    navigate("/login");
  };

  return (
    <div className="pc__registration">
      <div className="pc__registration--container container mx-auto px-4 py-8">
        <Card className="pc__registration--card max-w-md">
          <h1 className="pc__registration--card__title text-xl mb-5 text-green-600">
            Registration
          </h1>
          <div className="pc__registration--card__form">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* <div className="mb-4 flex flex-col">
                <label
                  htmlFor="firstName"
                  className="flex text-sm text-black mb-1"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  autoComplete="off"
                  placeholder="Enter First Name"
                  {...register("firstName", {
                    required: "First name required",
                  })}
                  className={errors.firstName && "input__error"}
                />
                {errors.firstName && (
                  <span role="alert" className="input__error text-red-400">
                    {errors.firstName.message}
                  </span>
                )}
              </div>

              <div className="mb-4 flex flex-col">
                <label
                  htmlFor="lastName"
                  className="flex text-sm text-black mb-1"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  autoComplete="off"
                  placeholder="Enter First Name"
                  {...register("lastName", {
                    required: "Last name required",
                  })}
                  className={errors.lastName && "input__error"}
                />
                {errors.firstName && (
                  <span role="alert" className="input__error text-red-400">
                    {errors.lastName.message}
                  </span>
                )}
              </div> */}

              <div className="mb-4 flex flex-col">
                <label htmlFor="email" className="flex text-sm text-black mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  placeholder="Enter email"
                  {...register("email", {
                    required: "Email required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Entered value does not match email format",
                    },
                  })}
                  className={errors.email && "input__error"}
                />
                {errors.email && (
                  <span role="alert" className="input__error text-red-400">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div className="mb-4 flex flex-col">
                <label
                  htmlFor="password"
                  className="flex text-sm text-black mb-1"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="off"
                  placeholder="*****"
                  {...register("password", {
                    required: "Password required",
                    minLength: {
                      value: 5,
                      message: "min length is 5",
                    },
                  })}
                  className={errors.password && "input__error"}
                />
                {errors.password && (
                  <span role="alert" className="input__error text-red-400">
                    {errors.password.message}
                  </span>
                )}
              </div>
              <Button disabled={isLoading} type="submit">
                Sign Up
              </Button>
            </form>
          </div>
          <p className="mt-4">
            Already have account?{" "}
            <Link to="/login" className="font-semibold">
              click here
            </Link>
            .
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Registration;
