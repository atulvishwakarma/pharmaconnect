import React from "react";

const Footer = () => {
  return (
    <div className="footer bg-gray-700 py-4">
      <div className="container mx-auto py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 space-x-4">
          <div className="footer__copy">
            <p className="text-center md:text-left text-base text-white">
              Design and develop by Ajay Vishwakarma
            </p>
          </div>
          <div className="footer__contact">
            <p className="text-center md:text-right text-base text-white">
              Contact: &nbsp; <a href="tel:+919691058855">+91-9691058855</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
