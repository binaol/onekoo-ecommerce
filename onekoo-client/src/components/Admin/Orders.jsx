import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "../ui/select";

const Orders = ({ containerVariants, orders }) => {
  const [ordersList, setOrdersList] = useState(null);
  useEffect(() => {
    axios
      .get("https://back.onekoocoffee.com/api/orders/get-orders")
      .then((res) => {
        console.log(res.data);
        setOrdersList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <h1 className="text-2xl mb-4 font-semibold">Orders list</h1>
      <table className="table-auto w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="border bg-amber-900 text-white border-gray-300 px-4 py-2">
              Order ID
            </th>
            <th className="border bg-amber-900 text-white border-gray-300 px-4 py-2">
              Ordered By
            </th>
            <th className="border bg-amber-900 text-white border-gray-300 px-4 py-2">
              Quantity
            </th>
            <th className="border bg-amber-900 text-white border-gray-300 px-4 py-2">
              Price
            </th>
            <th className="border bg-amber-900 text-white border-gray-300 px-4 py-2">
              Status
            </th>
          </tr>
        </thead>
        <motion.tbody
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {ordersList &&
            ordersList.map((order, index) => {
              return (
                <motion.tr
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.7,
                        delay: index * 0.3,
                      },
                    },
                  }}
                  key={index}
                  className={`${index % 2 === 0 && " bg-orange-400/10"}`}
                >
                  <td className="border border-gray-300 px-4 py-2">
                    {order.id}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {order.user_id}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {order.quantity}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {order.total_price}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {/* <Select defaultValue="pending">
                      <SelectTrigger className="w-[100px]">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="pending">Pending</SelectItem>
                          <SelectItem value="approved">Approved</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select> */}
                    <select
                      id="status"
                      name="status"
                      className="bg-golden py-3 px-1 text-white rounded-md"
                    >
                      <option value="pending" selected>
                        Pending
                      </option>
                      <option value="approved">Approved</option>
                    </select>
                  </td>
                </motion.tr>
              );
            })}
        </motion.tbody>
      </table>
    </>
  );
};

export default Orders;
