import React from "react";
import { Link } from "react-router-dom";
import foo from "../assets/images/About/tbg.jpeg";
import {
  FaPhoneSquare,
  FaLink,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaYoutube,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex flex-col pt-5 bg-gradient-to-b from-white to-primary max-w-[100%] px-10">
      <div className="self-center w-full max-w-[80%] my-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-base font-semibold text-primary max-md:mt-10">
              <div className="self-center underline flex-row">Contact Us</div>
              <div className="flex gap-2.5 mt-6 whitespace-nowrap">
                <FaPhoneSquare />
                <div className="grow">+25123456789</div>
                <div>+25123456789</div>
              </div>
              <div className="flex gap-2.5 mt-2.5 whitespace-nowrap">
                <FaPhoneSquare />
                <div className="grow">+25123456789</div>
                <div>+25123456789</div>
              </div>
              <div className="flex gap-2.5 mt-2.5 whitespace-nowrap">
                <FaPhoneSquare />
                <div className="grow">+25123456789</div>
                <div>+25123456789</div>
              </div>
              <div className="flex gap-2.5 mt-2.5 whitespace-nowrap">
                <FaPhoneSquare />
                <div className="grow">+25123456789</div>
                <div>+25123456789</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-[10rem] w-[36%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col max-md:mt-10">
              <div className="ml-5 text-base font-semibold text-primary underline">
                Social Link’s
              </div>
              <div className="flex gap-6 mt-9 text-white">
                <Link
                  className="shrink-0 w-9 aspect-square"
                  onClick={() => window.scrollTo(0, 0)}
                  to={`https://www.facebook.com`}
                >
                  <FaFacebookF className="w-10 h-10" />
                </Link>
                <Link
                  className="shrink-0 w-9 aspect-square"
                  onClick={() => window.scrollTo(0, 0)}
                  to={`https://www.facebook.com`}
                >
                  <FaInstagram className="w-10 h-10" />
                </Link>
                <Link
                  className="shrink-0 w-9 aspect-square"
                  onClick={() => window.scrollTo(0, 0)}
                  to={`https://www.facebook.com`}
                >
                  <FaXTwitter className="w-10 h-10" />
                </Link>
                <Link
                  className="shrink-0 w-9 aspect-square"
                  onClick={() => window.scrollTo(0, 0)}
                  to={`https://www.facebook.com`}
                >
                  <FaTiktok className="w-10 h-10" />
                </Link>
              </div>
              <div className="flex gap-6 mt-4 text-white">
                <Link
                  className="shrink-0 w-9 aspect-square"
                  onClick={() => window.scrollTo(0, 0)}
                  to={`https://www.facebook.com`}
                >
                  <FaYoutube className="w-10 h-10" />
                </Link>
                <Link
                  className="shrink-0 w-9 aspect-square"
                  onClick={() => window.scrollTo(0, 0)}
                  to={`https://www.facebook.com`}
                >
                  <FaTelegramPlane className="w-10 h-10" />
                </Link>
                <Link
                  className="shrink-0 w-9 aspect-square"
                  onClick={() => window.scrollTo(0, 0)}
                  to={`https://www.facebook.com`}
                >
                  <FaWhatsapp className="w-10 h-10" />
                </Link>
                <Link
                  className="shrink-0 w-9 aspect-square"
                  onClick={() => window.scrollTo(0, 0)}
                  to={`https://www.facebook.com`}
                >
                  <FaLinkedinIn className="w-10 h-10" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[24%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col text-base font-semibold text-primary max-md:mt-10">
              <div className="self-center underline">Quick Link’s</div>
              <Link
                className="mt-7 flex flex-row gap-3"
                onClick={() => window.scrollTo(0, 0)}
                to={`https://www.oromiacoffeeunion.com`}
              >
                <FaLink />
                oromiacoffeeunion.com
              </Link>
              <Link
                className="mt-4 flex flex-row gap-3"
                onClick={() => window.scrollTo(0, 0)}
                to={`https://www.example.com`}
              >
                <FaLink />
                example.com
              </Link>
              <Link
                className="mt-4 flex flex-row gap-3"
                onClick={() => window.scrollTo(0, 0)}
                to={`https://www.example.com`}
              >
                <FaLink />
                example.com
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 items-start px-3 pb-6 mt-6 w-[80%] text-base font-semibold text-white  max-md:flex-wrap">
        <div className="flex-auto">Powered by PSYANN</div>
        <div className="flex-auto self-stretch">
          © 2024 Onekoo Coffee. All Rights Reserved.
          <br />
        </div>
        <div className="flex-auto">Terms of Service</div>
      </div>
    </div>
  );
};

export default Footer;
