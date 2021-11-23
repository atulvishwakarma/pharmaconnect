import React from "react";
import "./Error404.css";
const Error404 = () => {
  return (
    <div className="pc__error404">
      <div className="container mx-auto py-4">
        <div className="pc__error404--block bg-white flex flex-col">
          <h1 className="text-3xl text-green-600 font-semibold text-center my-10">
            Oops! Page Not Found.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Error404;
