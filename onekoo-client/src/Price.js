import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Button.css";

function Price({ cart, user }) {
  const [price1, setPrice1] = useState("");
  const [price2, setPrice2] = useState("");
  const [total, setTotal] = useState(
    cart
      .map((product) => {
        return product.price;
      })
      .reduce((acc, curr) => {
        return acc + curr;
      }, 0)
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [isDropdownModalOpen, setIsDropdownModalOpen] = useState(false);
  const [dropdownValue, setDropdownValue] = useState("");
  const [isThirdModalOpen, setIsThirdModalOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [rfid, setRfid] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [shops, setShops] = useState(null);

  useEffect(() => {
    axios
      .get("https://back.onekoocoffee.com/api/shops/all-shops")
      .then((res) => {
        console.log(res.data);
        setShops(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/prices")
      .then((response) => {
        const { price1, price2 } = response.data;
        setPrice1(price1);
        setPrice2(price2);
      })
      .catch((error) => {
        console.error("Error fetching prices:", error);
      });
  }, []);

  // const handleProceedClick = () => {
  //   const numPrice1 = parseFloat(price1) || 0;
  //   const numPrice2 = parseFloat(price2) || 0;
  //   const sum = numPrice1 + numPrice2;
  //   setTotal(sum);
  // };

  const handleCheckoutClick = () => {
    setIsModalOpen(true);
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    setErrorMessage("");
  };

  const handleNextClick = () => {
    if (!selectedOption) {
      setErrorMessage("Please select an option.");
      return;
    }
    setIsModalOpen(false);
    setIsDropdownModalOpen(true);
  };

  const handleDropdownChange = (e) => {
    setDropdownValue(e.target.value);
    setErrorMessage("");
  };

  const handleConfirmClick = () => {
    if (!dropdownValue) {
      setErrorMessage("Please select a bank.");
      return;
    }
    setIsDropdownModalOpen(false);
    setIsThirdModalOpen(true);
  };

  const handleThirdModalConfirmClick = () => {
    if (!fullName || !rfid) {
      setErrorMessage("Please fill out all fields.");
      return;
    }
    axios
      .post("https://back.onekoocoffee.com/api/payment/checkout-payment", {
        total_price: total,
        option: selectedOption,
        dropdownValue,
        user_id: user.id,
        ref_num: rfid,
      })
      .then((response) => {
        alert(response.data.message);
        setIsThirdModalOpen(false);
      })
      .catch((error) => {
        console.error("Error during checkout:", error);
        setIsThirdModalOpen(false);
      });
  };

  const renderDropdown = () => {
    switch (selectedOption) {
      case "Option 1":
        return (
          <select
            value={dropdownValue}
            onChange={handleDropdownChange}
            className="border border-gray-300 rounded-md p-2"
          >
            <option value="" disabled>
              Select a bank in Ldeta
            </option>
            <option value="Option A">CBE</option>
            <option value="Option B">Abyssinia</option>
            <option value="Option C">Oromia Cooperative</option>
            <option value="Option D">Nib Bank</option>
          </select>
        );
      case "Option 2":
        return (
          <select
            value={dropdownValue}
            onChange={handleDropdownChange}
            className="border border-gray-300 rounded-md p-2"
          >
            <option value="" disabled>
              Select a bank in Mexico
            </option>
            <option value="Option A">Abyssinia</option>
            <option value="Option B">CBE</option>
            <option value="Option C">Nib</option>
            <option value="Option D">Oromia Cooperative</option>
          </select>
        );
      case "Option 3":
        return (
          <select
            value={dropdownValue}
            onChange={handleDropdownChange}
            className="border border-gray-300 rounded-md p-2"
          >
            <option value="" disabled>
              Select a bank in Bole
            </option>
            <option value="Option A">Nib</option>
            <option value="Option B">Abyssinia</option>
            <option value="Option C">CBE</option>
            <option value="Option D">Oromia Cooperative</option>
          </select>
        );
      case "Option 4":
        return (
          <select
            value={dropdownValue}
            onChange={handleDropdownChange}
            className="border border-gray-300 rounded-md p-2"
          >
            <option value="" disabled>
              Select a bank in Summit
            </option>
            <option value="Option A">Oromia Cooperative</option>
            <option value="Option B">Nib</option>
            <option value="Option C">Abyssinia</option>
            <option value="Option D">CBE</option>
          </select>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="flex flex-col px-2 pt-2 pb-4 bg-white-50 max-w-[700px] w-full">
        <div className="flex flex-col px-2 py-2 mt-2 bg- rounded-[15px] w-full">
          <div className="flex flex-col md:flex-row gap-2">
            <div className="flex flex-col w-full md:w-2/3">
              <div className="flex justify-center items-center px-9 py-9 text-base font-semibold text-white bg-secondary rounded-[35px]">
                Total
              </div>
            </div>
            <div className="flex flex-col mt-2 md:mt-0 md:w-1/3 ml-0 md:ml-2">
              <div className="flex flex-col items-center px-3 pt-0.5 pb-1 font-semibold bg-secondary rounded-[25px]">
                <div className="text-base text-white">Final price</div>
                <div className="flex flex-col items-center px-2 py-2 mt-1 bg-yellow-50 rounded-[20px] w-[70px]">
                  <div className="text-base text-yellow-900">
                    ${cart && total}
                  </div>
                  <hr className="w-full my-1 border-t border-black" />
                  <button
                    className="checkout-button text-xs text-amber-900 bg-yellow-200 px-2 py-1 rounded-md hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    onClick={handleCheckoutClick}
                  >
                    Pay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* First Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded-md shadow-lg max-w-sm w-full">
            <h2 className="text-lg font-bold mb-2">
              Please select the shop you ordered from
            </h2>
            <div className="flex flex-col space-y-2">
              {shops &&
                shops.map((shop, index) => {
                  return (
                    <label key={index}>
                      <input
                        type="radio"
                        value={shop.id}
                        checked={Number(selectedOption) === shop.id}
                        onChange={handleOptionChange}
                      />
                      {shop.name}
                    </label>
                  );
                })}
            </div>
            {errorMessage && (
              <p className="text-red-500 mt-2">{errorMessage}</p>
            )}
            <div className="mt-4 flex justify-end">
              <button
                className="text-xs text-amber-900 bg-yellow-200 px-3 py-1 rounded-md hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                onClick={handleNextClick}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Second Modal */}
      {isDropdownModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded-md shadow-lg max-w-sm w-full">
            <h2 className="text-lg font-bold mb-2">Please select a bank</h2>
            <div className="flex flex-col space-y-2">
              <select
                value={dropdownValue}
                onChange={handleDropdownChange}
                className="border border-gray-300 rounded-md p-2"
              >
                <option value="" disabled>
                  Select a bank
                </option>
                {shops &&
                  shops
                    .filter((shop) => {
                      return shop.id === Number(selectedOption);
                    })
                    .map((shop, index) => {
                      return (
                        <option key={index} value={shop.id}>
                          {shop.bank_name} {shop.acc_num}
                        </option>
                      );
                    })}
              </select>
            </div>
            {errorMessage && (
              <p className="text-red-500 mt-2">{errorMessage}</p>
            )}
            <div className="mt-4 flex justify-end">
              <button
                className="text-xs text-amber-900 bg-yellow-200 px-3 py-1 rounded-md hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                onClick={handleConfirmClick}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Third Modal */}
      {isThirdModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded-md shadow-lg max-w-sm w-full">
            <h2 className="text-lg font-bold mb-2">Enter your details</h2>
            <div className="flex flex-col space-y-2">
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="border border-gray-300 rounded-md p-2"
              />
              <input
                type="text"
                placeholder="RF ID"
                value={rfid}
                onChange={(e) => setRfid(e.target.value)}
                className="border border-gray-300 rounded-md p-2"
              />
              <select
                value={dropdownValue}
                onChange={handleDropdownChange}
                className="border border-gray-300 rounded-md p-2"
              >
                <option value="" disabled>
                  Select a bank
                </option>
                {shops &&
                  shops
                    .filter((shop) => {
                      return shop.id === Number(selectedOption);
                    })
                    .map((shop, index) => {
                      return (
                        <option key={index} value={shop.id}>
                          {shop.bank_name} {shop.acc_num}
                        </option>
                      );
                    })}
              </select>
            </div>
            {errorMessage && (
              <p className="text-red-500 mt-2">{errorMessage}</p>
            )}
            <div className="mt-4 flex justify-end">
              <button
                className="text-xs text-amber-900 bg-yellow-200 px-3 py-1 rounded-md hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                onClick={handleThirdModalConfirmClick}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Price;
