import React, { useState, useEffect } from "react";
import { UserSearch } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Shop = ({
  shopExist,
  searchedShop,
  onSearchChange6,
  searchHandler6,
  errors,
  handleChange6,
  handleSubmit6,
  searchedShopData,
  formValues,
}) => {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [fileInputKey, setFileInputKey] = useState(Date.now());
  const [allShops, setAllShops] = useState(null);

  useEffect(() => {
    axios
      .get("https://back.onekoocoffee.com/api/shops/all-shops")
      .then((res) => {
        console.log(res.data);
        setAllShops(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.6 },
    },
  };

  const handleUpdateShop = (e) => {
    console.log(image);
    e.preventDefault();
    const formdata = new FormData();
    const data = {
      id: searchedShopData.id,
      name: searchedShopData.name,
      location: searchedShopData.location,
      image: searchedShopData.image,
      email: searchedShopData.email,
      phone: searchedShopData.phone,
      bank_name: searchedShopData.bank_name,
      acc_num: searchedShopData.acc_num,
    };
    const shopImg = image ? image : data.image;
    console.log(shopImg);
    formdata.append("id", data.id);
    formdata.append("name", data.name);
    formdata.append("location", data.location);
    formdata.append("image", shopImg);
    formdata.append("email", data.email);
    formdata.append("phone", data.phone);
    formdata.append("bank_name", data.bank_name);
    formdata.append("acc_num", data.acc_num);
    console.log(data);
    axios
      .post("https://back.onekoocoffee.com/api/shops/update-shop", formdata)
      .then((res) => {
        console.log(res.data);
        alert("Shop Updated");
        navigate(0);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="flex relative w-full max-w-sm items-center space-x-2">
        <Input
          value={searchedShop}
          onChange={onSearchChange6}
          type="text"
          placeholder="Search"
        />
        <Button onClick={searchHandler6} type="">
          {" "}
          <UserSearch />
        </Button>
        {!shopExist && (
          <div className="absolute text-xs left-0 -bottom-4 text-red-400">
            shop does not Exist
          </div>
        )}
      </div>
      <form action="" onSubmit={handleSubmit6}>
        <div className="mt-5 flex flex-col gap-y-4">
          <div className="flex items-center gap-x-7 mb-3">
            <label
              className="text-base md:text-lg text-left w-[40%] md:w-[20%]"
              htmlFor="name"
            >
              Name:
            </label>
            <div className="relative w-[70%] md:w-[50%]">
              <Input
                name="name"
                value={shopExist && searchedShopData.name}
                onChange={handleChange6}
                className="w-full outline-none border-2 rounded-3xl border-yellow-900/30"
                id="name"
                placeholder="Shop name"
              />
              {errors.fullname && (
                <div className="absolute text-xs left-3 -bottom-4 text-red-400">
                  {errors.fullname}
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center gap-x-7 mb-3">
            <label
              className="text-base md:text-lg text-left w-[40%] md:w-[20%]"
              htmlFor="location"
            >
              Location:
            </label>
            <div className="relative w-[70%] md:w-[50%]">
              <Input
                type="text"
                name="location"
                value={shopExist && searchedShopData.location}
                onChange={handleChange6}
                className="w-full border-2 rounded-3xl border-yellow-900/30"
                id="location"
                placeholder="Location"
              />
              {errors.email && (
                <div className="absolute text-xs left-3 -bottom-4 text-red-400">
                  {errors.email}
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center gap-x-7 mb-3">
            <label
              className="text-base md:text-lg text-left w-[40%] md:w-[20%]"
              htmlFor="email"
            >
              Email:
            </label>
            <div className="relative w-[70%] md:w-[50%]">
              <Input
                name="email"
                value={shopExist && searchedShopData.email}
                onChange={handleChange6}
                className="w-full border-2 rounded-3xl border-yellow-900/30"
                id="email"
                placeholder="Email"
              />
              {errors.address && (
                <div className="absolute text-xs left-3 -bottom-4 text-red-400">
                  {errors.address}
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center gap-x-7 mb-3">
            <label
              className="text-base md:text-lg text-left w-[40%] md:w-[20%]"
              htmlFor="phone"
            >
              Phone:
            </label>
            <div className="relative w-[70%] md:w-[50%]">
              <Input
                name="phone"
                value={shopExist && searchedShopData.phone}
                onChange={handleChange6}
                className="w-full border-2 rounded-3xl border-yellow-900/30"
                id="price"
                placeholder="Phone"
              />
              {errors.address && (
                <div className="absolute text-xs left-3 -bottom-4 text-red-400">
                  {errors.address}
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center gap-x-7 mb-3">
            <label
              className="text-base md:text-lg text-left w-[40%] md:w-[20%]"
              htmlFor="bank-name"
            >
              Bank Name:
            </label>
            <div className="relative w-[70%] md:w-[50%]">
              <Input
                name="bank_name"
                value={shopExist && searchedShopData.bank_name}
                onChange={handleChange6}
                className="w-full border-2 rounded-3xl border-yellow-900/30"
                id="bank-name"
                placeholder="Bank Name"
              />
              {errors.address && (
                <div className="absolute text-xs left-3 -bottom-4 text-red-400">
                  {errors.address}
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center gap-x-7 mb-3">
            <label
              className="text-base md:text-lg text-left w-[40%] md:w-[20%]"
              htmlFor="acc-num"
            >
              Account Number:
            </label>
            <div className="relative w-[70%] md:w-[50%]">
              <Input
                name="acc_num"
                value={shopExist && searchedShopData.acc_num}
                onChange={handleChange6}
                className="w-full border-2 rounded-3xl border-yellow-900/30"
                id="acc-num"
                placeholder="Account number"
              />
              {errors.address && (
                <div className="absolute text-xs left-3 -bottom-4 text-red-400">
                  {errors.address}
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center gap-x-7 mb-3">
            <label
              className="text-base md:text-lg text-left w-[40%] md:w-[20%]"
              htmlFor="file-1"
            >
              Image:{" "}
            </label>
            <div className="relative w-[70%] md:w-[50%]">
              <Input
                name="image"
                key={fileInputKey}
                onChange={(e) => {
                  setImage(e.target.files[0]);
                  handleChange6(e);
                }}
                className="w-full outline-none border-2 rounded-3xl border-yellow-900/30"
                id="file-1"
                type="file"
              />
            </div>
          </div>
          <div className="flex gap-3 justify-end">
            <Button
              type="submit"
              className={`hover:bg-[#612203] hover:scale-95 bg-transparent text-[#612203] font-semibold shadow-md shadow-orange-900 hover:text-white duration-500 border-2 border-[#612203] px-6 py-1 rounded-full ${
                shopExist ? "hidden" : "block"
              }`}
            >
              Create Shop
            </Button>
            <Button
              onClick={handleUpdateShop}
              className={`hover:bg-[#612203] hover:scale-95 bg-transparent text-[#612203] font-semibold shadow-md shadow-orange-900 hover:text-white duration-500 border-2 border-[#612203] px-6 py-1 rounded-full ${
                shopExist ? "block" : "hidden"
              }`}
            >
              Update Shop
            </Button>
          </div>
        </div>
      </form>
      <div>
        <h1 className="text-2xl font-semibold mb-3">Shops List</h1>
        <table className="table-auto w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="border bg-amber-900 text-white border-gray-300 px-4 py-2">
                ShopID
              </th>
              <th className="border bg-amber-900 text-white border-gray-300 px-4 py-2">
                ShopName
              </th>
              <th className="border bg-amber-900 text-white border-gray-300 px-4 py-2">
                Location
              </th>
              <th className="border bg-amber-900 text-white border-gray-300 px-4 py-2">
                Email
              </th>
              <th className="border bg-amber-900 text-white border-gray-300 px-4 py-2">
                Phone
              </th>
              <th className="border bg-amber-900 text-white border-gray-300 px-4 py-2">
                BankName
              </th>
              <th className="border bg-amber-900 text-white border-gray-300 px-4 py-2">
                AccNum
              </th>
            </tr>
          </thead>
          <motion.tbody
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {allShops &&
              allShops.map((shop, index) => {
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
                      {shop.id}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {shop.name}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {shop.location}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {shop.email}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {shop.phone}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {shop.bank_name}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {shop.acc_num}
                    </td>
                  </motion.tr>
                );
              })}
          </motion.tbody>
        </table>
      </div>
    </div>
  );
};

export default Shop;
