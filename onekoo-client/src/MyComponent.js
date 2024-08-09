import React, { useState } from 'react';
import { motion } from 'framer-motion';

function MyComponent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedQuality, setSelectedQuality] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState({ min: 'min', max: 'max' });
  const [quantityRange, setQuantityRange] = useState({ min: '1 KG', max: '100 KG' });

  const handleSearch = () => {
    console.log('Search query:', searchQuery);
    // Implement your search functionality here
  };

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
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
    <div className="flex flex-col pt-5 pb-20 mx-auto w-[150px] bg-brown-700">
      <div className="flex flex-col px-2 w-full">
        <div className="flex gap-1">
          <div className="flex items-center justify-between px-1 py-1 bg-brown-600 rounded-full flex-grow">
            <input
              type="text"
              placeholder="Search"
              className="bg-brown-600 text-white outline-none flex-grow text-xs w-[80px] px-1"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={handleSearch} className="material-icons text-white text-xs px-1">
              search
            </button>
          </div>
        </div>
        <div className="flex gap-1 mt-2 items-center">
          <span className="text-xs text-white">Filter cart</span>
          <span className="material-icons text-white text-xs">filter_alt</span>
        </div>
        <div className="self-start mt-3 text-xs text-white">Sort by price</div>
        <div className="flex gap-1 items-center mt-2">
          <span className="material-icons text-white text-xs">attach_money</span>
          <div className="flex flex-auto gap-1 items-center py-1 px-2 bg-brown-600 rounded-lg border border-white">
            <input
              type="text"
              name="min"
              placeholder="Min (e.g., 1000$)"
              className="bg-brown-500 text-white rounded-md text-xs px-1 py-1 w-[45px] text-center"
              value={priceRange.min}
              onChange={handlePriceChange}
            />
            <div className="text-xs text-white">-</div>
            <input
              type="text"
              name="max"
              placeholder="Max (e.g., 15000$)"
              className="bg-brown-500 text-white rounded-md text-xs px-1 py-1 w-[45px] text-center"
              value={priceRange.max}
              onChange={handlePriceChange}
            />
          </div>
        </div>
        <div className="self-start mt-3 text-xs text-white">Sort by location</div>
        <div className="flex gap-1 items-center mt-2">
          <span className="material-icons text-white text-xs">location_on</span>
          <motion.div
            className="flex flex-col flex-grow justify-center px-1 py-1 bg-brown-600 rounded-lg border border-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.select
              className="bg-brown-600 text-white rounded-md outline-none text-xs w-full"
              value={selectedLocation}
              onChange={handleLocationChange}
            >
              <option value="" disabled>Select Location</option>
              <motion.option
                value="Location1"
                initial={{ opacity: 0, transform: 'translateY(-10px)' }}
                animate={{ opacity: 1, transform: 'translateY(0)' }}
                transition={{ duration: 0.3 }}
              >
                Location 1
              </motion.option>
              <motion.option
                value="Location2"
                initial={{ opacity: 0, transform: 'translateY(-10px)' }}
                animate={{ opacity: 1, transform: 'translateY(0)' }}
                transition={{ duration: 0.3 }}
              >
                Location 2
              </motion.option>
              <motion.option
                value="Location3"
                initial={{ opacity: 0, transform: 'translateY(-10px)' }}
                animate={{ opacity: 1, transform: 'translateY(0)' }}
                transition={{ duration: 0.3 }}
              >
                Location 3
              </motion.option>
            </motion.select>
          </motion.div>
        </div>
        <div className="self-start mt-3 text-xs text-white">Sort by Quantity</div>
        <motion.div
          className="flex gap-1 items-center mt-2"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-auto gap-1 items-center py-1 px-2 bg-brown-600 rounded-lg border border-white">
            <input
              type="text"
              name="min"
              className="bg-brown-500 text-white rounded-md text-xs px-1 py-1 w-[45px] text-center"
              value={quantityRange.min}
              onChange={handleQuantityChange}
            />
            <div className="text-xs text-white">-</div>
            <input
              type="text"
              name="max"
              className="bg-brown-500 text-white rounded-md text-xs px-1 py-1 w-[45px] text-center"
              value={quantityRange.max}
              onChange={handleQuantityChange}
            />
          </div>
        </motion.div>
        <div className="self-start mt-3 text-xs text-white">Sort by Quality (in grade)</div>
        <motion.div
          className="flex gap-1 items-center mt-2"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col flex-grow justify-center px-1 py-1 bg-brown-600 rounded-lg border border-white">
            <motion.select
              className="bg-brown-600 text-white rounded-md outline-none text-xs"
              value={selectedQuality}
              onChange={handleQualityChange}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <option value="" disabled>Select Quality</option>
              <motion.option
                value="Quality1"
                initial={{ opacity: 0, transform: 'translateY(-10px)' }}
                animate={{ opacity: 1, transform: 'translateY(0)' }}
                transition={{ duration: 0.3 }}
              >
                Grade A
              </motion.option>
              <motion.option
                value="Quality2"
                initial={{ opacity: 0, transform: 'translateY(-10px)' }}
                animate={{ opacity: 1, transform: 'translateY(0)' }}
                transition={{ duration: 0.3 }}
              >
                Grade B
              </motion.option>
              <motion.option
                value="Quality3"
                initial={{ opacity: 0, transform: 'translateY(-10px)' }}
                animate={{ opacity: 1, transform: 'translateY(0)' }}
                transition={{ duration: 0.3 }}
              >
                Grade C
              </motion.option>
            </motion.select>
          </div>
        </motion.div>
        <div className="self-start mt-3 text-xs text-white">Sort by category</div>
        <motion.div
          className="flex gap-1 items-center mt-2"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col flex-grow justify-center px-1 py-1 bg-brown-600 rounded-lg border border-white">
            <motion.select
              className="bg-brown-600 text-white rounded-md outline-none text-xs"
              value={selectedCategory}
              onChange={handleCategoryChange}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <option value="" disabled>Select category</option>
              <motion.option
                value="Category1"
                initial={{ opacity: 0, transform: 'translateY(-10px)' }}
                animate={{ opacity: 1, transform: 'translateY(0)' }}
                transition={{ duration: 0.3 }}
              >
                Coffee
              </motion.option>
              <motion.option
                value="Category2"
                initial={{ opacity: 0, transform: 'translateY(-10px)' }}
                animate={{ opacity: 1, transform: 'translateY(0)' }}
                transition={{ duration: 0.3 }}
              >
                Cookies
              </motion.option>
            </motion.select>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default MyComponent;
