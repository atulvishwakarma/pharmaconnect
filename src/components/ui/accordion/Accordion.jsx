import { useState } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

import "./Accordion.css";
const Accordion = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prevIsOpn) => !prevIsOpn);
  };
  return (
    <div className="accordion__item flex flex-col mb-2 border-b-2 pb-1">
      <h1
        className={`accordion__item--title ${isOpen ? "active" : ""}text-base`}
        onClick={handleClick}
      >
        <span className="font-semibold">{props.title}</span>
        <span className="accordion__icon absolute right-1">
          {isOpen ? (
            <MdOutlineKeyboardArrowUp className="inline-block font-semibold" />
          ) : (
            <MdOutlineKeyboardArrowDown className="inline-block font-semibold" />
          )}
        </span>
      </h1>
      <div
        className={`text-sm py-2 ${
          isOpen
            ? "accordion__item--content accordion__item--content__active"
            : "accordion__item--content"
        }`}
      >
        {props.content}
      </div>
    </div>
  );
};

export default Accordion;
