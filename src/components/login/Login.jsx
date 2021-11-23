import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Card, Button } from "../ui/UI";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
const Login = () => {
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [errorLogin, setErrorLogin] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    // console.log(data);
    try {
      setErrorLogin("");
      setIsLoading(true);
      await login(data.email, data.password);
      setIsLoading(false);
      navigate("/");
    } catch {
      setErrorLogin("Invalid email and password.");
    }
    reset();
  };
  return (
    <div className="pc__login">
      <div className="pc__login--container container mx-auto px-4 py-8">
        <Card className="pc__login--card max-w-md">
          <h1 className="pc__login--card__title text-xl mb-5 text-green-600">
            Login
          </h1>
          <div className="pc__login--card__form">
            {errorLogin && <p className="text-red-400 mb-2">{errorLogin}</p>}
            <form onSubmit={handleSubmit(onSubmit)}>
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
                Login
              </Button>
            </form>
          </div>
          <p className="mt-4">
            Don't have account?{" "}
            <Link to="/register" className="font-semibold">
              click here
            </Link>
            .
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Login;
