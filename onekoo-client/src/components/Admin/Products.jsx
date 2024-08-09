import React, { useState } from "react";
import { UserSearch } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Products = ({
  searchedProduct,
  onSearchChange2,
  searchHandler2,
  productExist,
  handleSubmit2,
  searchedProductData,
  formValues,
  errors,
  handleChange2,
  handleUpdate,
  allProducts,
}) => {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [fileInputKey, setFileInputKey] = useState(Date.now());

  const handleUpdateProduct = (e) => {
    console.log(image);
    e.preventDefault();
    const formdata = new FormData();
    const data = {
      id: searchedProductData.id,
      name: searchedProductData.name,
      description: searchedProductData.description,
      price: searchedProductData.price,
      categoryId: searchedProductData.category_id,
      image: searchedProductData.image_url,
      quality: searchedProductData.quality,
      location: searchedProductData.location,
      shop_id: searchedProductData.shop_id,
    };
    const prodImg = image ? image : data.image;
    console.log(prodImg);
    formdata.append("id", data.id);
    formdata.append("name", data.name);
    formdata.append("description", data.description);
    formdata.append("price", data.price);
    formdata.append("categoryId", data.categoryId);
    formdata.append("image", prodImg);
    formdata.append("quality", data.quality);
    formdata.append("location", data.location);
    formdata.append("shopId", data.shop_id);
    console.log(data);
    axios
      .post(
        "https://back.onekoocoffee.com/api/products/update-product",
        formdata
      )
      .then((res) => {
        console.log(res.data);
        alert("Product Updated");
        navigate(0);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="flex relative w-full max-w-sm items-center space-x-2">
        <Input
          value={searchedProduct}
          onChange={onSearchChange2}
          type="text"
          placeholder="Search"
        />
        <Button onClick={searchHandler2} type="">
          {" "}
          <UserSearch />
        </Button>
        {!productExist && (
          <div className="absolute text-xs left-0 -bottom-4 text-red-400">
            product does not Exist
          </div>
        )}
      </div>
      <form action="" onSubmit={handleSubmit2}>
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
                value={productExist && searchedProductData.name}
                onChange={handleChange2}
                className="w-full outline-none border-2 rounded-3xl border-yellow-900/30"
                id="name"
                placeholder="Product Name"
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
              Category:
            </label>
            <div className="relative w-[70%] md:w-[50%]">
              <Input
                type="number"
                name="category_id"
                value={productExist && searchedProductData.category_id}
                onChange={handleChange2}
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
          <div className="flex items-center gap-x-7 mb-3">
            <label
              className="text-base md:text-lg text-left w-[40%] md:w-[20%]"
              htmlFor="address"
            >
              Description:
            </label>
            <div className="relative w-[70%] md:w-[50%]">
              <Input
                name="description"
                value={productExist && searchedProductData.description}
                onChange={handleChange2}
                className="w-full border-2 rounded-3xl border-yellow-900/30"
                id="address"
                placeholder="Descripiton"
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
              htmlFor="price"
            >
              Price:
            </label>
            <div className="relative w-[70%] md:w-[50%]">
              <Input
                name="price"
                value={productExist && searchedProductData.price}
                onChange={handleChange2}
                className="w-full border-2 rounded-3xl border-yellow-900/30"
                id="price"
                placeholder="Price"
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
                  handleChange2(e);
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
              htmlFor="quality"
            >
              Quality:
            </label>
            <div className="relative w-[70%] md:w-[50%]">
              <Input
                name="quality"
                value={productExist && searchedProductData.quality}
                onChange={handleChange2}
                className="w-full border-2 rounded-3xl border-yellow-900/30"
                id="quality"
                placeholder="Quality: Values (A, B, C)"
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
              htmlFor="location"
            >
              Location:
            </label>
            <div className="relative w-[70%] md:w-[50%]">
              <Input
                name="location"
                value={productExist && searchedProductData.location}
                onChange={handleChange2}
                className="w-full border-2 rounded-3xl border-yellow-900/30"
                id="location"
                placeholder="Location"
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
              htmlFor="shop"
            >
              ShopId:
            </label>
            <div className="relative w-[70%] md:w-[50%]">
              <Input
                name="shop_id"
                value={productExist && searchedProductData.shop_id}
                onChange={handleChange2}
                className="w-full border-2 rounded-3xl border-yellow-900/30"
                id="shop"
                placeholder="Input correct shopId"
              />
              {errors.address && (
                <div className="absolute text-xs left-3 -bottom-4 text-red-400">
                  {errors.address}
                </div>
              )}
            </div>
          </div>
          <div className="flex gap-3 justify-end">
            <Button
              type="submit"
              className={`hover:bg-[#612203] hover:scale-95 bg-transparent text-[#612203] font-semibold shadow-md shadow-orange-900 hover:text-white duration-500 border-2 border-[#612203] px-6 py-1 rounded-full ${
                productExist ? "hidden" : "block"
              }`}
            >
              Create Product
            </Button>
            <Button
              onClick={handleUpdateProduct}
              className={`hover:bg-[#612203] hover:scale-95 bg-transparent text-[#612203] font-semibold shadow-md shadow-orange-900 hover:text-white duration-500 border-2 border-[#612203] px-6 py-1 rounded-full ${
                productExist ? "block" : "hidden"
              }`}
            >
              Update Product
            </Button>
          </div>
        </div>
      </form>
      <div>
        <h1 className="text-left font-semibold text-xl">Product List</h1>
        {allProducts && (
          <div className="flex flex-col gap-y-1">
            <div className="flex justify-between items-center border-t-2 border-b-2 p-2 mb-5 border-slate-200">
              <div className="text-left w-[50px]">ID</div>
              <div className="text-left w-[150px]">Title</div>
              <div className="text-left w-[250px]">Description</div>
              <div className="text-left w-[150px]">Category</div>
              <div className="text-left w-[150px]">Delete</div>
            </div>
            {allProducts.map((product, index) => {
              return (
                <div className="" key={index}>
                  <div className="flex justify-between items-center bg-amber-600/10  border-b-2 px-1 py-2 border-slate-200">
                    <div className="text-left w-[50px]">{product.id}</div>
                    <div className="text-left w-[150px]">{product.name}</div>
                    <div className="text-left w-[250px]">{product.desc}</div>
                    <div className="text-left w-[150px]">
                      {product.category}
                    </div>
                    <Button>Delete</Button>
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

export default Products;
