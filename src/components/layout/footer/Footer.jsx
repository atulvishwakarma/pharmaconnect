import React from "react";
import { phone } from "../../../user-config/UserConfig";

const Footer = () => {
  return (
    <div className="footer bg-gray-700 py-4">
      <div className="container mx-auto py-4 sm:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:space-x-4">
          <div className="footer__copy">
            <p className="text-center md:text-left text-base text-white mb-4 md:mb-0">
              Design and develop by Ajay Vishwakarma
            </p>
          </div>
          <div className="footer__contact">
            <p className="text-center md:text-right text-base text-white">
              Contact: &nbsp; <a href={`tel:${phone}`}>{phone}</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
