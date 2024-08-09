import React, { useEffect, useState } from "react";
import axios from "axios";
import Logo from "../assets/images/onekoo_logo_brown.png";
import sini from "../assets/images/sini.png";
import siniHover from "../assets/images/sini-hover.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import User from "../assets/images/user.png";

const NavBar = () => {
  const navigate = useNavigate();
  const [Active, setActive] = useState("home");
  const [NavWhite, setNavWhite] = useState(false);
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("https://back.onekoocoffee.com/api/products/get-all") // Replace with your API endpoint
      .then((response) => {
        console.log(response.data.products);

        setIsLoggedIn(true);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setIsLoggedIn(false);
      });
  }, []);
  useEffect(() => {
    var currentLocation =
      location.pathname.split("/")[1] === ""
        ? "home"
        : location.pathname.split("/")[1];
    setActive(currentLocation);
    window.addEventListener("scroll", (e) => {
      if (window.pageYOffset >= 452) {
        setNavWhite(true);
      } else {
        setNavWhite(false);
      }
    });
  }, [location.pathname]);
  return (
    <>
      <div
        className={` flex fixed top-0 mx-auto font-crimson md:px-16 px-[50px] justify-between z-[60] text-white h-[5rem] ${
          NavWhite
            ? "bg-white pb-2 drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)] w-full"
            : "w-[98%]"
        }`}
      >
        <div className="h-full pl-10">
          <img
            alt="logo"
            className={`${NavWhite ? " h-full" : "h-full"} object-cover`}
            src={Logo}
          />
        </div>
        <div className="md:flex hidden gap-2 justify-start items-start mr-20">
          <Link
            className={`bg-primary rounded-b-lg flex flex-col   ${
              NavWhite
                ? Active === "home"
                  ? " bg-primary h-full  text-white"
                  : " h-full"
                : Active === "home"
                ? "h-[200%] text-primary bg-white"
                : "h-full "
            } flex items-center  h-1/2 p-2.5 w-[5rem] text-[0.8rem] justify-center  text-center`}
            onClick={() => window.scrollTo(0, 0)}
            to={"/home"}
          >
            <img
              src={Active === "home" ? siniHover : sini}
              alt="sini"
              className="h-10 w-10"
            />
            <span className="h-10 w-10 flex items-center justify-center">
              Home
            </span>
          </Link>

          <Link
            className={`bg-primary rounded-b-lg flex flex-col  ${
              NavWhite
                ? Active === "about"
                  ? " bg-white h-full  text-primary"
                  : " h-full"
                : Active === "about"
                ? "h-[200%] text-primary bg-white"
                : "h-full "
            } flex items-center  h-1/2 p-2.5 w-[5rem] text-[0.8rem] justify-center  text-center`}
            onClick={() => window.scrollTo(0, 0)}
            to={"/about"}
          >
            <img
              src={Active === "about" ? siniHover : sini}
              alt="sini"
              className="h-10 w-10"
            />
            <span className="h-10 w-10 flex items-center justify-center">
              About Us
            </span>
          </Link>

          <Link
            className={`bg-primary rounded-b-lg flex flex-col ${
              NavWhite
                ? Active === "farm-to-cup"
                  ? " bg-white h-full  text-primary"
                  : " h-full"
                : Active === "farm-to-cup"
                ? "h-[200%] text-primary bg-white"
                : "h-full "
            } flex items-center  h-1/2 p-2.5 w-[5rem] text-[0.8rem] justify-center  text-center`}
            onClick={() => window.scrollTo(0, 0)}
            to={"/farm-to-cup"}
          >
            <img
              src={Active === "farm-to-cup" ? siniHover : sini}
              alt="sini"
              className="h-10 w-10"
            />
            <span className="h-10 w-10 flex items-center justify-center">
              Farm To Cup
            </span>
          </Link>

          <Link
            className={`bg-primary rounded-b-lg flex flex-col  ${
              NavWhite
                ? Active === "achievement-and-involvement"
                  ? " bg-white h-full  text-primary"
                  : " h-full"
                : Active === "achievement-and-involvement"
                ? "h-[200%] text-primary bg-white"
                : "h-full "
            } flex items-center  h-1/2 p-2.5 w-[5rem] text-[0.8rem] justify-center  text-center`}
            onClick={() => window.scrollTo(0, 0)}
            to={"/achievement-and-involvement"}
          >
            <img
              src={Active === "achievement-and-involvement" ? siniHover : sini}
              alt="sini"
              className="h-10 w-10"
            />
            <span className="h-10 w-10 flex items-center justify-center">
              Achievement And Involvement
            </span>
          </Link>

          <Link
            className={`bg-primary rounded-b-lg flex flex-col  ${
              NavWhite
                ? Active === "contact"
                  ? " bg-white h-full  text-primary"
                  : " h-full"
                : Active === "contact"
                ? "h-[200%] text-primary bg-white"
                : "h-full "
            } flex items-center  h-1/2 p-2.5 w-[5rem] text-[0.8rem] justify-center  text-center`}
            onClick={() => window.scrollTo(0, 0)}
            to={"/contact"}
          >
            <img
              src={Active === "contact" ? siniHover : sini}
              alt="sini"
              className="h-10 w-10"
            />
            <span className="h-10 w-10 flex items-center justify-center">
              Contact
            </span>
          </Link>

          <Link
            className={`bg-primary rounded-b-lg flex flex-col  ${
              NavWhite
                ? Active === "shop"
                  ? " bg-white h-full  text-primary"
                  : " h-full"
                : Active === "shop"
                ? "h-[200%] text-primary bg-white"
                : "h-full "
            } flex items-center  h-1/2 p-2.5 w-[5rem] text-[0.8rem] justify-center  text-center`}
            onClick={() => window.scrollTo(0, 0)}
            to={"/shop"}
          >
            <img
              src={Active === "shop" ? siniHover : sini}
              alt="sini"
              className="h-10 w-10"
            />
            <span className="h-10 w-10 flex items-center justify-center">
              Shop
            </span>
          </Link>
          <Link
            className={`bg-primary rounded-b-lg flex flex-col  ${
              NavWhite
                ? Active === "shop"
                  ? " bg-white h-full  text-primary"
                  : " h-full"
                : Active === "shop"
                ? "h-[200%] text-primary bg-white"
                : "h-full "
            } flex items-center  h-1/2 p-2.5 w-[5rem] text-[0.8rem] justify-center  text-center`}
            onClick={() => window.scrollTo(0, 0)}
            to={isLoggedIn ? "/profile" : "/account"}
          >
            <img
              src={User} // Use user.jpg here
              alt="User"
              className="h-10 w-10"
            />
            <span className="h-10 w-10 flex items-center justify-center">
              Account
            </span>
          </Link>
        </div>

        <div className=" relative group md:hidden flex items-center ">
          <div className=" cursor-pointer text-primary" onClick={() => {}}>
            <MenuOutlinedIcon />
          </div>
          <div className="absolute right-0 top-[70%] items-center hidden group-hover:flex flex-col gap-1 ">
            <Link onClick={() => window.scrollTo(0, 0)} to={"/home"}>
              <div
                className={`bg-primary rounded-xl  hover:scale-110 hover:scale-110${
                  Active === "home" ? "h-full text-white" : "h-1/2 "
                }  ${
                  NavWhite ? " h-full" : ""
                }flex items-end  p-2.5 w-[5rem] text-[0.8rem] justify-center text-center`}
              >
                Home
              </div>
            </Link>
            <Link onClick={() => window.scrollTo(0, 0)} to={"/about"}>
              <div
                className={`bg-primary rounded-xl  hover:scale-110 hover:scale-110${
                  Active === "campaings" ? "h-full text-white" : "h-1/2 "
                } ${
                  NavWhite ? " h-full" : ""
                } flex items-end  h-1/2 p-2.5 w-[5rem] text-[0.8rem] justify-center  text-center`}
              >
                About Us
              </div>
            </Link>

            <Link onClick={() => window.scrollTo(0, 0)} to={"/farm-to-cup"}>
              <div
                className={`bg-primary rounded-xl  hover:scale-110 hover:scale-110${
                  Active === "event" ? "h-full text-white" : "h-1/2 "
                }${
                  NavWhite ? " h-full" : ""
                } flex items-end  h-1/2 p-2.5 w-[5rem] text-[0.8rem] justify-center  text-center`}
              >
                Farm To Cup
              </div>
            </Link>

            <Link
              onClick={() => window.scrollTo(0, 0)}
              to={"/achievement-and-involvement"}
            >
              <div
                className={`bg-primary rounded-xl  hover:scale-110 hover:scale-110${
                  Active === "projects" ? "h-full text-white" : "h-1/2 "
                }${
                  NavWhite ? " h-full" : ""
                } flex items-end  h-1/2 p-2.5 w-[5rem] text-[0.8rem] justify-center  text-center`}
              >
                Achievement And Involvement
              </div>
            </Link>

            <Link onClick={() => window.scrollTo(0, 0)} to={"/contact"}>
              <div
                className={`bg-primary rounded-xl  hover:scale-110 hover:scale-110${
                  Active === "shop" ? "h-full text-white" : "h-1/2 "
                }${
                  NavWhite ? " h-full" : ""
                } flex items-end  h-1/2 p-2.5 w-[5rem] text-[0.8rem] justify-center  text-center`}
              >
                Contact
              </div>
            </Link>

            <Link onClick={() => window.scrollTo(0, 0)} to={"/shop"}>
              <div
                className={`bg-primary rounded-xl  hover:scale-110 hover:scale-110${
                  Active === "blogs" ? "h-full text-white" : "h-1/2 "
                }${
                  NavWhite ? " h-full" : ""
                } flex items-end  h-1/2 p-2.5 w-[5rem] text-[0.8rem] justify-center  text-center`}
              >
                Shop
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
