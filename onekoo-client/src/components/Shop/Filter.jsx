import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { GoFilter } from "react-icons/go";

function Filter({ products, setProducts, fetchAgain }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedShop, setSelectedShop] = useState("");
  const [selectedQuality, setSelectedQuality] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [quantityRange, setQuantityRange] = useState({ min: "", max: "" });
  const [filteredData, setFilteredData] = useState([]);
  const [shops, setShops] = useState(null);

  useEffect(() => {
    axios
      .get(`https://back.onekoocoffee.com/api/shops/all-shops`)
      .then((res) => {
        console.log(res.data);
        setShops(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // useEffect(() => {
  //   fetchData();
  // }, [
  //   searchQuery,
  //   selectedLocation,
  //   selectedQuality,
  //   selectedCategory,
  //   priceRange,
  //   quantityRange,
  // ]);

  // const fetchData = () => {
  //   axios
  //     .get("https://api.example.com/products", {
  //       params: {
  //         search: searchQuery,
  //         location: selectedLocation,
  //         quality: selectedQuality,
  //         category: selectedCategory,
  //         minPrice: priceRange.min,
  //         maxPrice: priceRange.max,
  //         minQuantity: quantityRange.min,
  //         maxQuantity: quantityRange.max,
  //       },
  //     })
  //     .then((response) => {
  //       setFilteredData(response.data); // Assuming response.data is an array of filtered products
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // };

  const handleSearch = () => {
    console.log("from filter");
    console.log(
      searchQuery,
      selectedLocation,
      selectedCategory,
      selectedQuality,
      priceRange
    );
    if (selectedLocation !== "") {
      setProducts(
        products.filter((product) => {
          return product.Location === selectedLocation;
        })
      );
    }
    if (selectedCategory !== "") {
      console.log("nahom", "in category");
      setProducts(
        products.filter((product) => {
          return product.category_id === Number(selectedCategory);
        })
      );
    }
    if (selectedQuality !== "") {
      setProducts(
        products.filter((product) => {
          return product.quality === selectedQuality;
        })
      );
    }
    if (selectedShop !== "") {
      setProducts(
        products.filter((product) => {
          return product.shop_id === Number(selectedShop);
        })
      );
    }
    if (searchQuery !== "") {
      setProducts(
        products.filter((product) => {
          return product.name === searchQuery;
        })
      );
    }
    if (priceRange.min !== "" && priceRange.max !== "") {
      console.log("nahom");
      setProducts(
        products.filter((product) => {
          console.log(
            Number(priceRange.min) <= Number(product.price) &&
              Number(priceRange.max) >= Number(product.price)
          );
          return (
            Number(priceRange.min) <= Number(product.price) &&
            Number(priceRange.max) >= Number(product.price)
          );
        })
      );
    }

    console.log(products);
  };

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  const handleShopChange = (e) => {
    setSelectedShop(e.target.value);
  };

  const handleQualityChange = (e) => {
    setSelectedQuality(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setPriceRange((prevRange) => ({
      ...prevRange,
      [name]: value,
    }));
  };

  const handleQuantityChange = (e) => {
    const { name, value } = e.target;
    setQuantityRange((prevRange) => ({
      ...prevRange,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col pt-5 pb-16 mx-auto w-full max-w-xs h-fit bg-secondary p-4 md:min-w-[200px] md:max-w-md lg:max-w-lg">
      <div className="flex flex-col w-full">
        {/* Search */}
        <div className="gap-2 mb-4">
          <input
            type="text"
            placeholder="Search"
            className="bg-secondary text-white outline-none text-xs md:text-sm px-2 py-1 rounded-full border border-white w-[9rem]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="flex justify-between mt-4 items-center">
            <button
              onClick={handleSearch}
              className="material-icons text-white text-xs md:text-sm px-2 border border-white rounded"
              z
            >
              search
            </button>
            <button
              onClick={() => {
                setPriceRange({ min: "", max: "" });
                setSelectedLocation("");
                setSelectedShop("");
                setSelectedCategory("");
                setSelectedQuality("");
                setSearchQuery("");
                fetchAgain();
              }}
              className="material-icons text-white text-xs md:text-sm px-2 border border-white rounded"
              z
            >
              Clear
            </button>
          </div>
        </div>

        {/* Filter Header */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs md:text-sm text-white">Filter cart</span>
          <span className="material-icons text-white text-xs md:text-sm">
            <GoFilter />
          </span>
        </div>

        {/* Sort by Price */}
        <div className="text-xs md:text-sm text-white mb-2">Sort by price</div>
        <div className="flex gap-2 items-center mb-4">
          <div className="flex flex-auto gap-2 items-center py-1 px-2 bg-secondary rounded-lg border border-white">
            <input
              type="text"
              name="min"
              placeholder="Min"
              className="bg-secondary text-white rounded-md text-xs md:text-sm px-2 py-1 w-[70px] text-center border border-white"
              value={priceRange.min}
              onChange={handlePriceChange}
            />
            <div className="text-xs md:text-sm text-white">-</div>
            <input
              type="text"
              name="max"
              placeholder="Max"
              className="bg-secondary text-white rounded-md text-xs md:text-sm px-2 py-1 w-[70px] text-center border border-white"
              value={priceRange.max}
              onChange={handlePriceChange}
            />
          </div>
        </div>
        {/* sort by shop */}
        <div className="text-xs md:text-sm text-white mb-2">Sort by Shop</div>
        <motion.div
          className="flex flex-col gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.select
            className="bg-secondary text-white rounded-md outline-none text-xs md:text-sm w-full py-1 px-2 border border-white"
            value={selectedShop}
            onChange={handleShopChange}
          >
            <option value="" disabled>
              Select Shop
            </option>
            {shops &&
              shops.map((shop, index) => {
                return (
                  <motion.option
                    key={index}
                    value={shop.id}
                    initial={{ opacity: 0, transform: "translateY(-10px)" }}
                    animate={{ opacity: 1, transform: "translateY(0)" }}
                    transition={{ duration: 0.3 }}
                  >
                    {shop.name}
                  </motion.option>
                );
              })}
          </motion.select>
        </motion.div>

        {/* Sort by Location */}
        <div className="text-xs md:text-sm text-white mb-2">
          Sort by location
        </div>
        <motion.div
          className="flex flex-col gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.select
            className="bg-secondary text-white rounded-md outline-none text-xs md:text-sm w-full py-1 px-2 border border-white"
            value={selectedLocation}
            onChange={handleLocationChange}
          >
            <option value="" disabled>
              Select Location
            </option>
            <motion.option
              value="Addis Ababa"
              initial={{ opacity: 0, transform: "translateY(-10px)" }}
              animate={{ opacity: 1, transform: "translateY(0)" }}
              transition={{ duration: 0.3 }}
            >
              Addis Ababa
            </motion.option>
            <motion.option
              value="Adama"
              initial={{ opacity: 0, transform: "translateY(-10px)" }}
              animate={{ opacity: 1, transform: "translateY(0)" }}
              transition={{ duration: 0.3 }}
            >
              Adama
            </motion.option>
            <motion.option
              value="Yirgacheffe"
              initial={{ opacity: 0, transform: "translateY(-10px)" }}
              animate={{ opacity: 1, transform: "translateY(0)" }}
              transition={{ duration: 0.3 }}
            >
              Yirgacheffe
            </motion.option>
          </motion.select>
        </motion.div>

        {/* Sort by Quantity */}
        {/* <div className="text-xs md:text-sm text-white mb-2">Sort by Quantity</div> */}
        {/* <motion.div
          className="flex gap-2 items-center mb-4"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-auto gap-2 items-center py-1 px-2 bg-secondary rounded-lg border border-white">
            <input
              type="text"
              name="min"
              className="bg-secondary text-white rounded-md text-xs md:text-sm px-2 py-1 w-[45px] text-center border border-white"
              value={quantityRange.min}
              onChange={handleQuantityChange}
            />
            <div className="text-xs md:text-sm text-white">-</div>
            <input
              type="text"
              name="max"
              className="bg-secondary text-white rounded-md text-xs md:text-sm px-2 py-1 w-[45px] text-center border border-white"
              value={quantityRange.max}
              onChange={handleQuantityChange}
            />
          </div>
        </motion.div> */}

        {/* Sort by Quality */}
        <div className="text-xs md:text-sm text-white my-2">
          Sort by Quality (in grade)
        </div>
        <motion.div
          className="flex flex-col gap-2"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
        >
          <motion.select
            className="bg-secondary text-white rounded-md outline-none text-xs md:text-sm w-full py-1 px-2 border border-white"
            value={selectedQuality}
            onChange={handleQualityChange}
          >
            <option value="" disabled>
              Select Quality
            </option>
            <motion.option
              value="A"
              initial={{ opacity: 0, transform: "translateY(-10px)" }}
              animate={{ opacity: 1, transform: "translateY(0)" }}
              transition={{ duration: 0.3 }}
            >
              Grade A
            </motion.option>
            <motion.option
              value="B"
              initial={{ opacity: 0, transform: "translateY(-10px)" }}
              animate={{ opacity: 1, transform: "translateY(0)" }}
              transition={{ duration: 0.3 }}
            >
              Grade B
            </motion.option>
            <motion.option
              value="C"
              initial={{ opacity: 0, transform: "translateY(-10px)" }}
              animate={{ opacity: 1, transform: "translateY(0)" }}
              transition={{ duration: 0.3 }}
            >
              Grade C
            </motion.option>
          </motion.select>
        </motion.div>

        {/* Sort by Category */}
        <div className="text-xs md:text-sm text-white my-2">
          Sort by category
        </div>
        <motion.div
          className="flex flex-col gap-2"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
        >
          <motion.select
            className="bg-secondary text-white rounded-md outline-none text-xs md:text-sm w-full py-1 px-2 border border-white"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="" disabled>
              Select category
            </option>
            <motion.option
              value="1"
              initial={{ opacity: 0, transform: "translateY(-10px)" }}
              animate={{ opacity: 1, transform: "translateY(0)" }}
              transition={{ duration: 0.3 }}
            >
              Coffee
            </motion.option>
            <motion.option
              value="2"
              initial={{ opacity: 0, transform: "translateY(-10px)" }}
              animate={{ opacity: 1, transform: "translateY(0)" }}
              transition={{ duration: 0.3 }}
            >
              Cookies
            </motion.option>
          </motion.select>
        </motion.div>

        {/* Display Filtered Data */}
        <div className="text-xs md:text-sm text-white mt-4">
          Showing {products && products.length} results
        </div>
        <div className="flex flex-col gap-2 mt-2">
          {/* Render your filtered data here */}
          {filteredData.map((item, index) => (
            <div key={index} className="text-white">
              {item.name} - {item.price}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Filter;
