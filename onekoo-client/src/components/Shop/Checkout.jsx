import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Price from "../../Price";
import CartCheckout from "../Shop/CartCheckout";

const Cart = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);

  axios.defaults.withCredentials = true;
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
  const cart = location.state;
  console.log(cart);
  return (
    <div className="mt-20">
      <CartCheckout cart={cart} />

      <Price cart={cart} user={user} />
    </div>
  );
};

export default Cart;
