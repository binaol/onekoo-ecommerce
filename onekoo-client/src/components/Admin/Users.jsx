import React from "react";
import { UserSearch } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import axios from "axios";

const Users = ({
  searchedUser,
  onSearchChange,
  searchHandler,
  userExist,
  handleSubmit,
  searchedUserData,
  handleChange,
  errors,
  formValues,
  handleUpdate,
  setSerachedUserData,
  setUserExist,
  setUserPageToDefault,
}) => {
  const handleUpdateUser = async () => {
    const data = {
      id: searchedUserData.id,
      name: searchedUserData.name,
      email: searchedUserData.email,
      password: searchedUserData.password,
      address: searchedUserData.address,
    };
    console.log(data);
    axios
      .post("https://back.onekoocoffee.com/api/user/update-user", data)
      .then((res) => {
        console.log(res.data);
        alert("User data updated successfully");
        setUserPageToDefault();
        setSerachedUserData(null);
        console.log(searchedUserData);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };
  return (
    <>
      <div className="flex relative w-full max-w-sm items-center space-x-2">
        <Input
          value={searchedUser}
          onChange={onSearchChange}
          type="text"
          placeholder="Search"
        />
        <Button onClick={searchHandler} type="">
          {" "}
          <UserSearch className=" text-white" />
        </Button>
        {!userExist && (
          <div className="absolute text-xs left-0 -bottom-4 text-red-400">
            User does not Exist
          </div>
        )}
      </div>
      <form action="" onSubmit={handleSubmit}>
        <div className="mt-3 flex flex-col gap-y-4">
          <div className="flex items-center gap-x-7 mb-3">
            <label
              className="text-base md:text-lg text-left w-[40%] md:w-[20%]"
              htmlFor="name"
            >
              Name
            </label>
            <div className="relative w-[70%] md:w-[50%]">
              <Input
                name="name"
                value={userExist && searchedUserData.name}
                onChange={handleChange}
                className="w-full outline-none border-2 rounded-3xl border-yellow-900/30"
                id="name"
                placeholder="Enter full name"
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
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative w-[70%] md:w-[50%]">
              <Input
                name="email"
                value={userExist && searchedUserData.email}
                onChange={handleChange}
                type="email"
                className="w-full border-2 rounded-3xl border-yellow-900/30"
                id="email"
                placeholder="Email"
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
              htmlFor="address"
            >
              Phone
            </label>
            <div className="relative w-[70%] md:w-[50%]">
              <Input
                name="address"
                value={userExist && searchedUserData.address}
                onChange={handleChange}
                className="w-full border-2 rounded-3xl border-yellow-900/30"
                id="address"
                placeholder="+251923443498"
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
              htmlFor="pass"
            >
              Password
            </label>
            <div className="relative w-[70%] md:w-[50%]">
              <Input
                name="password"
                value={userExist && searchedUserData.password}
                onChange={handleChange}
                type="password"
                className="w-full border-2 rounded-3xl border-yellow-900/30"
                id="pass"
                placeholder="Password"
              />
              {errors.password && (
                <div className="absolute text-xs left-3 -bottom-4 text-red-400">
                  {errors.password}
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center gap-x-7 mb-3">
            <label
              className="text-base md:text-lg text-left w-[40%] md:w-[20%]"
              htmlFor="confirmpass"
            >
              confirm password
            </label>
            <div className="relative w-[70%] md:w-[50%]">
              <Input
                name="confirmPassword"
                value={userExist && searchedUserData.password}
                onChange={handleChange}
                type="password"
                className="w-full border-2 rounded-3xl border-yellow-900/30"
                id="confirmpass"
                placeholder="Confirm password"
              />
              {errors.confirmPassword && (
                <div className="absolute text-xs left-3 -bottom-4 text-red-400">
                  {errors.confirmPassword}
                </div>
              )}
            </div>
          </div>
          <div className="flex gap-3 justify-end">
            <Button
              type="submit"
              className={`hover:bg-[#612203] hover:scale-95 bg-transparent text-[#612203] font-semibold shadow-md shadow-orange-900 hover:text-white duration-500 border-2 border-[#612203] px-6 py-1 rounded-full ${
                userExist ? "hidden" : "block"
              }`}
            >
              Create User
            </Button>
            <Button
              onClick={handleUpdateUser}
              className={`hover:bg-[#612203] hover:scale-95 bg-transparent text-[#612203] font-semibold shadow-md shadow-orange-900 hover:text-white duration-500 border-2 border-[#612203] px-6 py-1 rounded-full ${
                userExist ? "block" : "hidden"
              }`}
            >
              Update User
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Users;
