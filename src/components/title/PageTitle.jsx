import React from "react";

const PageTitle = (props) => {
  return (
    <div className={`pc__title ${props.className ? props.className : ""}`}>
      <h1 className="pc__title--h1 text-xl lg:text-2xl font-semibold mb-4 text-green-600">
        <span className="border-b-2 border-green-600">{props.children}</span>
      </h1>
    </div>
  );
};

export default PageTitle;
