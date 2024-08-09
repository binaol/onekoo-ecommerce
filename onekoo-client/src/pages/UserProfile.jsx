import React, { useState, useEffect } from "react";
import { ArrowBigRight } from "lucide-react";
import DefaultUserProfile from "../assets/images/Admin/profile-img-2.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const navigate = useNavigate();
  const [myCart, setCart] = useState(null);
  const [history, setHistory] = useState(null);
  const [orders, setOrders] = useState(null);
  const [isSet, setIsSet] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    axios
      .get("https://back.onekoocoffee.com/api/auth/check-auth")
      .then((res) => {
        console.log(res.data.user.user);
        setUser(res.data.user.user);
      })
      .catch((err) => {
        console.log(err);
        navigate("/account");
      });
  }, []);
  const handleCart = () => {
    axios
      .get("http://localhost:5000/api/cart") // change api endpoint
      .then((res) => {
        setCart(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setHistory(null);
    setOrders(null);
    setIsSet(true);
  };
  const handleOrders = () => {
    axios
      .get("http://localhost:5000/api/orders") // change api endpoint
      .then((res) => {
        setOrders(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setCart(null);
    setHistory(null);
    setIsSet(true);
  };
  const handleHistory = () => {
    axios
      .get("http://localhost:5000/api/history") // change api endpoint
      .then((res) => {
        setHistory(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setCart(null);
    setOrders(null);
    setIsSet(true);
  };
  const logoutHandler = () => {
    axios
      .get("https://back.onekoocoffee.com/api/auth/logout")
      .then((res) => {
        console.log(res.data);
        navigate("/account");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="my-10 h-[60vh]">
      <div className="w-[90%] md:w-[80%] m-auto gap-5 flex flex-col gap-y-6 font-mono">
        <div className="flex gap-12">
          <div className="flex w-[30%] items-start gap-6">
            <div className="w-[100px] h-[100px] rounded-full overflow-hidden shadow-md shadow-slate-700">
              <img
                className="overflow-hidden object-cover opacity-70"
                src={DefaultUserProfile}
                alt=""
              />
            </div>

            <div>
              <h1 className="text-xl font-medium text-slate-400">
                Name: {user && user.name}
              </h1>
              <h2 className="text-lg font-medium text-slate-400">
                phone: {user && user.phone}
              </h2>
              <button
                onClick={logoutHandler}
                className="bg-primary mt-4 text-white px-4 py-2 font-semibold rounded-md"
              >
                Logout
              </button>
            </div>
          </div>
          <div className="w-[70%] h-[40px] rounded-sm bg-orange-900 shadow-md shadow-orange-300"></div>
        </div>
        <div className="flex gap-12">
          <div className="w-[30%] shadow-md shadow-slate-300 p-3 rounded-sm">
            <div className="flex gap-1 mb-3">
              <ArrowBigRight />
              <h2
                onClick={handleCart}
                className="text-left duration-300 hover:translate-x-3 cursor-pointer"
              >
                My Cart
              </h2>
            </div>
            <div className="flex gap-1 mb-3">
              <ArrowBigRight />
              <h2
                onClick={handleOrders}
                className="text-left duration-300 hover:translate-x-3 cursor-pointer"
              >
                My Orders
              </h2>
            </div>
            <div className="flex gap-1 mb-3">
              <ArrowBigRight />
              <h2
                onClick={handleHistory}
                className="text-left duration-300 hover:translate-x-3 cursor-pointer"
              >
                My History
              </h2>
            </div>
          </div>

          <div className="w-[70%] shadow-md shadow-slate-300 px-6 py-3 rounded-sm flex flex-col">
            {!isSet && <p>No data available.</p>}
            <div className="flex flex-col gap-y-3">
              {myCart &&
                myCart.map((product, index) => {
                  return (
                    <div key={index}>
                      <div className="flex gap-5 justify-between">
                        <h1>{product.name}</h1>
                        <div className="w-[20px] h-[20px] p-3 flex justify-center items-center bg-slate-400/30 shadow-sm shadow-slate-500 rounded-full">
                          {product.amount}
                        </div>
                      </div>
                    </div>
                  );
                })}
              {history &&
                history.map((product, index) => {
                  return (
                    <div
                      key={index}
                      className="border-2 rounded-md border-blue-200 px-4 py-2"
                    >
                      <div className="flex gap-5 justify-between">
                        <h1>{product.name}</h1>
                        <div className="">
                          <span className="font-semibold">Amount</span>:{" "}
                          {product.amount} purchases
                        </div>
                        <div>
                          <span className="font-semibold">Price</span>:{" "}
                          {product.unitPrice * product.amount}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
