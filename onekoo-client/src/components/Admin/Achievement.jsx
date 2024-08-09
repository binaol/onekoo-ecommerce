import React, { useState } from "react";
import { UserSearch } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import axios from "axios";
import { motion } from "framer-motion";

const Achievement = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [fileInputKey, setFileInputKey] = useState(Date.now());

  const containerVariants = {
    hidden: { opacity: 0, y: -40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.6, duration: 0.7 },
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(image, title, desc);
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("descripiton", desc);

    axios
      .post(
        "https://back.onekoocoffee.com/api/achievement/post-achievement",
        formData
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(formData);
    setImage(null);
    setTitle("");
    setDesc("");
    setFileInputKey(Date.now());
  };
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="show">
      <h1 className="text-center font-semibold text-lg mb-5">Achievement</h1>
      <div className="flex relative w-full max-w-sm items-center space-x-2">
        <Input
          // value={searchedCategory}
          // onChange={onSearchChange3}
          type="text"
          placeholder="Search"
        />
        <Button type="">
          {" "}
          <UserSearch />
        </Button>
        {/* {!categoryExist && (
          <div className="absolute text-xs left-0 -bottom-4 text-red-400">
            title does not Exist
          </div>
        )} */}
      </div>
      <form action="" onSubmit={handleSubmit}>
        <div className="mt-7 flex flex-col gap-y-4">
          <div className="flex items-center gap-x-7 mb-3">
            <label
              className="text-base md:text-lg text-left w-[40%] md:w-[20%]"
              htmlFor="file-1"
            >
              Image:{" "}
            </label>
            <div className="relative w-[70%] md:w-[50%]">
              <Input
                key={fileInputKey}
                onChange={(e) => {
                  setImage(e.target.files[0]);
                }}
                className="w-full outline-none border-2 rounded-3xl border-yellow-900/30"
                id="file-1"
                type="file"
              />
            </div>
          </div>
          <div className="flex items-center gap-x-7 mb-3">
            <label
              className="text-base md:text-lg text-left w-[40%] md:w-[20%]"
              htmlFor="name"
            >
              Title:
            </label>
            <div className="relative w-[70%] md:w-[50%]">
              <Input
                name="name"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                // value={
                //   categoryExist
                //     ? searchedCategoryData.name
                //     : formValues.fullname
                // }
                // onChange={handleChange3}
                className="w-full outline-none border-2 rounded-3xl border-yellow-900/30"
                id="name"
                placeholder="Title"
              />
              {/* {errors.fullname && (
                <div className="absolute text-xs left-3 -bottom-4 text-red-400">
                  {errors.fullname}
                </div>
              )} */}
            </div>
          </div>
          <div className="flex items-start gap-x-7 mb-3">
            <label
              className="text-base md:text-lg text-left w-[40%] md:w-[20%]"
              htmlFor="email"
            >
              Description:
            </label>
            <div className="relative w-[70%] md:w-[50%]">
              <Textarea
                name="desc"
                value={desc}
                onChange={(e) => {
                  setDesc(e.target.value);
                }}
                // value={
                //   categoryExist ? searchedCategoryData.desc : formValues.email
                // }
                // onChange={handleChange3}
                className="w-full border-2 rounded-3xl border-yellow-900/30"
                id="email"
                placeholder="description"
              />
              {/* {errors.email && (
                <div className="absolute text-xs left-3 -bottom-4 text-red-400">
                  {errors.email}
                </div>
              )} */}
            </div>
          </div>
          <div className="flex gap-3 justify-end">
            <Button
              type="submit"
              className={`hover:bg-[#612203] hover:scale-95 bg-transparent text-[#612203] font-semibold shadow-md shadow-orange-900 hover:text-white duration-500 border-2 border-[#612203] px-6 py-1 rounded-full `}
            >
              ADD
            </Button>
            {/* <Button
              onClick={handleUpdate}
              className={`hover:bg-[#612203] hover:scale-95 bg-transparent text-[#612203] font-semibold shadow-md shadow-orange-900 hover:text-white duration-500 border-2 border-[#612203] px-6 py-1 rounded-full ${
                categoryExist ? "block" : "hidden"
              }`}
            >
              Update
            </Button> */}
          </div>
        </div>
      </form>
    </motion.div>
  );
};

export default Achievement;
