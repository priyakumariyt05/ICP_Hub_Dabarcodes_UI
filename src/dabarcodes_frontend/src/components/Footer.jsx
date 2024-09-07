import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function Footer() {
  return (
    <footer className="bg-[#DBF4FD] w-full py-10 px-10 font-roboto">
      <div className="w-full m-4 lg:grid grid-cols-12 gap-20">
        <div className="col-span-6">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Pricing Promotion
            </h3>
            <p className="text-gray-600 mb-4">
              At daBarcodes, we are committed to providing you with the best
              deals and promotions available. We guarantee to honor the lowest
              price posted on the sales floor for in-store purchases, ensuring
              you always get the best value. Please note, internet advertised
              prices may differ from in-store prices and are therefore excluded
              from this promise.
            </p>
          </div>
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Our Socials
            </h3>
            <div className="flex space-x-4">
              <Link to="#" className="text-blue-600 hover:text-blue-800">
                <FaFacebook size={24} />
              </Link>
              <Link to="#" className="text-blue-600 hover:text-blue-800">
                <FaTwitter size={24} />
              </Link>
              <Link to="#" className="text-blue-600 hover:text-blue-800">
                <IoLogoInstagram size={24} />
              </Link>
              <Link to="#" className="text-blue-600 hover:text-blue-800">
                <FaLinkedin size={24} />
              </Link>
            </div>
          </div>
        </div>

        <div className="col-span-6 pt-8 lg:pt-0 flex gap-6 xl:gap-20">
          <div className="col-span-1">
            <h3 className="lg:text-2xl font-bold text-gray-800 mb-4">
              Quick Links
            </h3>
            <ul className="list-none space-y-2">
              <li>
                <Link
                  to="/about"
                  className="flex items-center text-gray-600 hover:text-gray-800"
                >
                  <MdOutlineKeyboardArrowRight className="mr-2" />
                  About us
                </Link>
              </li>
              <li>
                <Link
                  to="/how-it-works"
                  className="flex items-center text-gray-600 hover:text-gray-800"
                >
                  <MdOutlineKeyboardArrowRight className="mr-2" />
                  How it works
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="flex items-center text-gray-600 hover:text-gray-800"
                >
                  <MdOutlineKeyboardArrowRight className="mr-2" />
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="lg:text-2xl font-bold text-gray-800 mb-4">
              Support
            </h3>
            <ul className="list-none space-y-2">
              <li>
                <Link
                  to="/help-center"
                  className="flex items-center text-gray-600 hover:text-gray-800"
                >
                  <MdOutlineKeyboardArrowRight className="mr-2" />
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="/faqs"
                  className="flex items-center text-gray-600 hover:text-gray-800"
                >
                  <MdOutlineKeyboardArrowRight className="mr-2" />
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  to="/customer-support"
                  className="flex items-center text-gray-600 hover:text-gray-800"
                >
                  <MdOutlineKeyboardArrowRight className="mr-2" />
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="lg:text-2xl font-bold text-gray-800 mb-4">Legal</h3>
            <ul className="list-none space-y-2">
              <li>
                <Link
                  to="/privacy-policy"
                  className="flex items-center text-gray-600 hover:text-gray-800"
                >
                  <MdOutlineKeyboardArrowRight className="mr-2" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-service"
                  className="flex items-center text-gray-600 hover:text-gray-800"
                >
                  <MdOutlineKeyboardArrowRight className="mr-2" />
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/cookie-policy"
                  className="flex items-center text-gray-600 hover:text-gray-800"
                >
                  <MdOutlineKeyboardArrowRight className="mr-2" />
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-300" />

      <div className="text-center">
        <h3 className="text-2xl font-extrabold text-gray-800 mb-4 font-mono">
          Subscribe to Newsletter
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          Stay updated with the latest promotions and deals by subscribing to
          our newsletter. Be the first to know about new offers and exclusive
          discounts!
        </p>
        <span className="text-[#0D90C1] font-bold py-2 px-4 text-lg rounded">
          Subscribe Now
        </span>
      </div>
    </footer>
  );
}

export default Footer;
