import React from "react";
import axios from "axios";
import { UserSearch } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

const Category = ({
  searchedCategory,
  onSearchChange3,
  searchHandler3,
  categoryExist,
  handleSubmit3,
  searchedCategoryData,
  formValues,
  handleChange3,
  errors,
  handleUpdate,
  allCategories,
  reRenderPage,
}) => {
  const navigate = useNavigate();
  const handleUpdateCategory = async (e) => {
    e.preventDefault();
    console.log(searchedCategoryData);
    const data = {
      id: searchedCategoryData.id,
      name: searchedCategoryData.name,
      description: searchedCategoryData.description,
    };
    console.log(data);
    axios
      .post("https://back.onekoocoffee.com/api/category/update-category", data)
      .then((res) => {
        console.log(res.data);
        alert("Category Updated");
        navigate(0);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const handleDelete = async (id) => {
    console.log(id);
    axios
      .delete(
        `https://back.onekoocoffee.com/api/category/delete-category/${id}`
      )
      .then((res) => {
        console.log(res.data);
        reRenderPage();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="flex relative w-full max-w-sm items-center space-x-2">
        <Input
          value={searchedCategory}
          onChange={onSearchChange3}
          type="text"
          placeholder="Search"
        />
        <Button onClick={searchHandler3} type="">
          {" "}
          <UserSearch />
        </Button>
        {!categoryExist && (
          <div className="absolute text-xs left-0 -bottom-4 text-red-400">
            category does not Exist
          </div>
        )}
      </div>
      <form action="" onSubmit={handleSubmit3}>
        <div className="mt-3 flex flex-col gap-y-4">
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
                value={categoryExist && searchedCategoryData.name}
                onChange={handleChange3}
                className="w-full outline-none border-2 rounded-3xl border-yellow-900/30"
                id="name"
                placeholder="Title"
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
              Description:
            </label>
            <div className="relative w-[70%] md:w-[50%]">
              <Input
                name="description"
                value={categoryExist && searchedCategoryData.description}
                onChange={handleChange3}
                className="w-full border-2 rounded-3xl border-yellow-900/30"
                id="email"
                placeholder="Category"
              />
              {errors.email && (
                <div className="absolute text-xs left-3 -bottom-4 text-red-400">
                  {errors.email}
                </div>
              )}
            </div>
          </div>
          <div className="flex gap-3 justify-end">
            <Button
              type="submit"
              className={`hover:bg-[#612203] hover:scale-95 bg-transparent text-[#612203] font-semibold shadow-md shadow-orange-900 hover:text-white duration-500 border-2 border-[#612203] px-6 py-1 rounded-full ${
                categoryExist ? "hidden" : "block"
              }`}
            >
              Create Category
            </Button>
            <Button
              onClick={handleUpdateCategory}
              className={`hover:bg-[#612203] hover:scale-95 bg-transparent text-[#612203] font-semibold shadow-md shadow-orange-900 hover:text-white duration-500 border-2 border-[#612203] px-6 py-1 rounded-full ${
                categoryExist ? "block" : "hidden"
              }`}
            >
              Update Category
            </Button>
          </div>
        </div>
      </form>
      <div>
        <h1 className="text-left font-semibold text-xl">Category List</h1>
        {allCategories && (
          <div className="flex flex-col gap-y-1">
            <div className="flex justify-between items-center border-t-2 border-b-2 p-2 mb-5 border-slate-200">
              <div className="text-left w-[50px]">ID</div>
              <div className="text-left w-[150px]">Title</div>
              <div className="text-left w-[250px]">Description</div>
              <div className="text-left w-[150px]">Delete</div>
            </div>
            {allCategories.map((category, index) => {
              return (
                <div className="" key={index}>
                  <div className="flex justify-between items-center bg-amber-600/10  border-b-2 px-1 py-2 border-slate-200">
                    <div className="text-left w-[50px]">{category.id}</div>
                    <div className="text-left w-[150px]">{category.name}</div>
                    <div className="text-left w-[250px]">
                      {category.description}
                    </div>
                    <Button
                      onClick={() => {
                        handleDelete(category.id);
                      }}
                      className="text-white"
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Category;
