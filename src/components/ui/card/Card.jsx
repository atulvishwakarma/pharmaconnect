import React from "react";

const Card = (props) => {
  return (
    <div
      className={`p-4 mx-auto bg-white rounded shadow-md ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default Card;
