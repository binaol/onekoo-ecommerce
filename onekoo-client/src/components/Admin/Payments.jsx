import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "../ui/select";

const Payments = ({ containerVariants, payments }) => {
  const navigate = useNavigate();
  const [paymentsList, setPaymentsList] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState("");
  useEffect(() => {
    axios
      .get("https://back.onekoocoffee.com/api/payment/get-all")
      .then((res) => {
        console.log(res.data);
        setPaymentsList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleStatusChange = (id, e) => {
    console.log(selectedStatus, "djlkjk");
    axios
      .post("https://back.onekoocoffee.com/api/payment/update-status", {
        id: id,
        status: e.target.value,
      })
      .then((res) => {
        console.log(res.data);
        setSelectedStatus(e.target.value);
        navigate(0);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <h1 className="text-2xl mb-4 font-semibold">Payment transactions list</h1>
      <table className="table-auto w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="border bg-amber-900 text-white border-gray-300 px-4 py-2">
              Payment ID
            </th>
            <th className="border bg-amber-900 text-white border-gray-300 px-4 py-2">
              Ordered By
            </th>

            <th className="border bg-amber-900 text-white border-gray-300 px-4 py-2">
              Total Price
            </th>
            <th className="border bg-amber-900 text-white border-gray-300 px-4 py-2">
              Payment Number
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
          {paymentsList &&
            paymentsList.map((payment, index) => {
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
                    {payment.id}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {payment.user_id}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {payment.total_price}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {payment.ref_num}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {/* <Select defaultValue="pending">
                      <SelectTrigger className="w-[100px]">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="pending">Pending</SelectItem>
                          <SelectItem value="approved">Sold Out</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select> */}
                    <select
                      id={payment.id}
                      value={payment.status}
                      onChange={(e) => {
                        console.log(selectedStatus);
                        handleStatusChange(payment.id, e);
                      }}
                      className="bg-golden py-3 px-1 text-white rounded-md"
                    >
                      <option value="pending">Pending</option>
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

export default Payments;
