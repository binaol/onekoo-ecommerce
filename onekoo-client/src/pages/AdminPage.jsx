import React, { useEffect, useState } from "react";
import { ArrowBigRight } from "lucide-react";
// import { UserSearch } from "lucide-react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
import DefaultUserProfile from "../assets/images/Admin/profile-img-2.jpg";
import axios from "axios";
import { motion } from "framer-motion";
import Users from "../components/Admin/Users";
import Products from "../components/Admin/Products";
import Category from "../components/Admin/Category";
import Orders from "../components/Admin/Orders";
import Payments from "../components/Admin/Payments";
import Inovation from "../components/Admin/Inovation";
import Achievement from "../components/Admin/Achievement";
import { useNavigate } from "react-router-dom";
import Shop from "../components/Admin/Shop";

const AdminPage = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState(false);
  const [products, setProducts] = useState(null);
  const [category, setCategory] = useState(null);
  const [orders, setOrders] = useState(null);
  const [payments, setPayments] = useState(null);
  const [shops, setShops] = useState(null);
  const [isSet, setIsSet] = useState(false);
  // User Dashboard states
  const [searchedUser, setSerachedUser] = useState("");
  const [userExist, setUserExist] = useState(null);
  const [searchedUserData, setSearchedUserData] = useState(null);
  // Product Dashboard states
  const [allProducts, setAllProducts] = useState(null);
  const [productExist, setProductExist] = useState(null);
  const [searchedProduct, setSearchedProduct] = useState("");
  const [searchedProductData, setSearchedProductData] = useState(null);
  // Shop Dashboard states
  const [allShops, setAllShops] = useState(null);
  const [shopExist, setShopExist] = useState(null);
  const [searchedShop, setSearchedShop] = useState("");
  const [searchedShopData, setSearchedShopData] = useState(null);
  // Category Dashboard states
  const [allCategories, setAllCategories] = useState(null);
  const [categoryExist, setCategoryExist] = useState(null);
  const [searchedCategory, setSearchedCategory] = useState("");
  const [searchedCategoryData, setSearchedCategoryData] = useState(null);
  // Inovation dashboard states
  const [inovation, setInovation] = useState(null);
  const [searchedInovation, setSearchedInovation] = useState("");
  const [inovationExist, setInovationExist] = useState(null);
  const [searchedInovationData, setSearchedInovationData] = useState(null);
  // Achievement
  const [achievement, setAchievement] = useState(null);
  const [searchedAchievement, setSearchedAchievement] = useState("");
  const [achievementExist, setAchievementExist] = useState(null);
  const [searchedAchievementData, setSearchedAchievementData] = useState(null);

  // auth
  const [user, setUser] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("https://back.onekoocoffee.com/api/auth/check-admin-auth")
      .then((res) => {
        console.log(res.data.user.user);
        setUser(res.data.user.user);
        setIsLoggedIn(true);
      })
      .catch((err) => {
        console.log("nahom");
        navigate("/admin-login");
        // navigate("/account");
        // setIsLoggedIn(false);
      });
  }, []);

  // framer motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.6 },
    },
  };

  // on search change

  const onSearchChange = (e) => {
    setSerachedUser(e.target.value);
  };

  // user signup
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const [productValues, setProductValues] = useState({
    name: "",
    description: "",
    price: "",
    category_id: "",
    image: null,
    quality: "",
    location: "",
    shop_id: "",
  });

  const [shopValues, setShopValues] = useState({
    name: "",
    location: "",
    image: null,
    email: "",
    phone: "",
    bank_name: "",
    acc_num: "",
  });

  const [categoryValues, setCategoryValues] = useState({
    name: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formValues.name || !searchedUserData.name) {
      newErrors.fullname = "Fullname is required";
    }

    if (!formValues.email || !searchedUserData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = "Invalid email";
    }

    if (!formValues.phone || !searchedUserData.phone) {
      newErrors.phone = "Phone is required";
    }

    if (!formValues.password || !searchedUserData.password) {
      newErrors.password = "Password is required";
    } else if (formValues.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (!formValues.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (formValues.password !== formValues.confirmPassword) {
      newErrors.confirmPassword = "Passwords must match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSearchedUserData({ ...searchedUserData, [name]: value });
    setFormValues({ ...formValues, [name]: value });

    // console.log(searchedUserData);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post("https://back.onekoocoffee.com/api/user/create-user", formValues)
      .then((res) => {
        alert("user created!");
        console.log(res.data);
        navigate(0);
      })
      .catch((err) => {
        console.log(err.response.data.msg);
        alert(err.response.data.msg);
      });
    // alert(response.data);
  };

  const changeToDefault = () => {
    setSearchedUserData(null);
    setUserExist(null);
    setSerachedUser("");
    console.log(searchedUserData);
    console.log(userExist);
    console.log(searchedUser);
    console.log("something");
    navigate(0);
    // setUserExist(null);
    // setSearchedUserData("");
    // setSerachedUser("");
    // console.log(searchedUserData);
    // console.log("nahommmm");
  };

  const handleUpdate = async () => {
    if (validate()) {
      setSerachedUser("");
      setUserExist(null);
      setSearchedUserData(null);
    }
  };

  const searchHandler = async () => {
    axios
      .get(`https://back.onekoocoffee.com/api/user/get-user/${searchedUser}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.length === 0) {
          console.log("no product available");
          setUserExist(null);
        } else {
          setSearchedUserData(res.data[0]);
          setUserExist(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    //   let searchedData;
    //   axios
    //     .get("http://localhost:5000/users")
    //     .then((res) => {
    //       if (
    //         res.data.filter((data) => data.fullname === searchedUser).length == 0
    //       ) {
    //         setUserExist(false);
    //       } else {
    //         searchedData = res.data.filter(
    //           (data) => data.fullname === searchedUser
    //         )[0];
    //         setSerachedUserData(searchedData);
    //         setUserExist(true);
    //       }
    //     })
    //     .catch((err) => console.log(err));
  };

  // sideBar functions
  const handleUsers = () => {
    // axios
    //   .get("http://localhost:5000/api/users") // change api endpoint
    //   .then((res) => {
    //     setUsers(res.data.users);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    setUsers(true);
    setCategory(null);
    setProducts(null);
    setOrders(null);
    setPayments(null);
    setInovation(false);
    setAchievement(false);
    setShops(false);
    setIsSet(true);
  };
  const handleOrders = () => {
    // axios
    //   .get("http://localhost:5000/orders") // change api endpoint
    //   .then((res) => {
    //     setOrders(res.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    setOrders(true);
    setUsers(null);
    setCategory(null);
    setProducts(null);
    setPayments(null);
    setInovation(false);
    setAchievement(false);
    setShops(false);
    setIsSet(true);
  };
  const handleProducts = () => {
    // axios
    //   .get("http://localhost:5000/api/products") // change api endpoint
    //   .then((res) => {
    //     setProducts(res.data.products);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    setProducts(true);
    setUsers(null);
    setOrders(null);
    setPayments(null);
    setCategory(null);
    setInovation(false);
    setAchievement(false);
    setShops(false);
    setIsSet(true);
  };

  const handleCategory = () => {
    // axios
    //   .get("http://localhost:5000/api/category") // change api endpoint
    //   .then((res) => {
    //     setCategory(res.data.category);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    setCategory(true);
    setUsers(null);
    setOrders(null);
    setProducts(null);
    setPayments(null);
    setInovation(false);
    setAchievement(false);
    setShops(false);
    setIsSet(true);
  };

  const handleShops = () => {
    setShops(true);
    setCategory(false);
    setUsers(null);
    setOrders(null);
    setProducts(null);
    setPayments(null);
    setInovation(false);
    setAchievement(false);
    setIsSet(true);
  };

  const handlePayments = () => {
    setPayments(true);
    setUsers(null);
    setOrders(null);
    setProducts(null);
    setCategory(null);
    setInovation(false);
    setAchievement(false);
    setShops(false);
    setIsSet(true);
  };

  // Product handler functions
  useEffect(() => {
    axios
      .get("https://back.onekoocoffee.com/products")
      .then((res) => {
        setAllProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange2 = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setSearchedProductData({ ...searchedProductData, image: files[0] });
      setProductValues({ ...productValues, image: files[0] });
    } else {
      setSearchedProductData({ ...searchedProductData, [name]: value });
      setProductValues({ ...productValues, [name]: value });
    }

    console.log(searchedProductData);
  };

  const searchHandler2 = () => {
    let searchedData;
    axios
      .get(
        `https://back.onekoocoffee.com/api/products/get-product/${searchedProduct}`
      )
      .then((res) => {
        console.log(res.data[0]);
        if (res.data.length === 0) {
          alert("There is no such product!");
          setProductExist(null);
        } else {
          setSearchedProductData(res.data[0]);
          setProductExist(true);
        }
      })
      .catch((err) => console.log(err));
  };
  const onSearchChange2 = (e) => {
    setSearchedProduct(e.target.value);
    console.log(e.target.value);
  };
  const handleSubmit2 = (e) => {
    e.preventDefault();
    console.log(productValues);
    const formdata = new FormData();
    formdata.append("name", productValues.name);
    formdata.append("description", productValues.description);
    formdata.append("price", productValues.price);
    formdata.append("categoryId", productValues.category_id);
    formdata.append("image", productValues.image);
    formdata.append("quality", productValues.quality);
    formdata.append("location", productValues.location);
    formdata.append("shopId", productValues.shop_id);
    axios
      .post(
        "https://back.onekoocoffee.com/api/products/create-product-admin",
        formdata
      )
      .then((res) => {
        console.log(res.data);
        alert("Product created successfully!");
        navigate(0);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // category handler functions
  useEffect(() => {
    axios
      .get("https://back.onekoocoffee.com/api/category/all-category")
      .then((res) => {
        setAllCategories(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange3 = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    setSearchedCategoryData({ ...searchedCategoryData, [name]: value });
    setCategoryValues({ ...categoryValues, [name]: value });
  };

  const reRenderPage = () => {
    axios
      .get("https://back.onekoocoffee.com/api/category/all-category")
      .then((res) => {
        setAllCategories(res.data);
      })
      .catch((err) => console.log(err));
  };
  const searchHandler3 = () => {
    let searchedData;
    axios
      .get(
        `https://back.onekoocoffee.com/api/category/get-category/${searchedCategory}`
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.length === 0) {
          alert("There is no such category");
          setCategoryExist(null);
        } else {
          setSearchedCategoryData(res.data[0]);
          setCategoryExist(true);
          console.log(res.data[0]);

          console.log(searchedCategoryData);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onSearchChange3 = (e) => {
    setSearchedCategory(e.target.value);
    console.log(e.target.value);
  };
  const handleSubmit3 = (e) => {
    e.preventDefault();
    console.log(categoryValues);
    axios
      .post(
        "https://back.onekoocoffee.com/api/category/create-category",
        categoryValues
      )
      .then((res) => {
        console.log(res.data);
        alert("Category Created!");
        navigate(0);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // handle Inovation
  const handleInovation = () => {
    setInovation(true);
    setUsers(false);
    setProducts(false);
    setCategory(false);
    setAchievement(false);
    setOrders(false);
    setPayments(false);
    setIsSet(true);
  };

  const onSearchChange4 = (e) => {
    setSearchedInovation(e.target.value);
  };

  const searchHandler4 = async () => {
    let searchedData;
    axios
      .get("https://back.onekoocoffee.com/users")
      .then((res) => {
        if (
          res.data.filter((data) => data.fullname === searchedUser).length === 0
        ) {
          setInovationExist(false);
        } else {
          searchedData = res.data.filter(
            (data) => data.fullname === searchedUser
          )[0];
          setSearchedInovationData(searchedData);
          setInovationExist(true);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit4 = () => {
    let data;
    if (false) {
      axios
        .post("/categories", data)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  };

  const handleChange4 = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    setSearchedUserData({ ...searchedUserData, [name]: value });
  };
  // handle achievement

  const handleAchievement = () => {
    setAchievement(true);
    setInovation(false);
    setUsers(false);
    setProducts(false);
    setCategory(false);
    setOrders(false);
    setPayments(false);
    setIsSet(true);
  };

  const onSearchChange5 = (e) => {
    setSearchedAchievement(e.target.value);
  };

  const searchHandler5 = async () => {
    let searchedData;
    axios
      .get("http://localhost:5000/users")
      .then((res) => {
        if (
          res.data.filter((data) => data.fullname === searchedUser).length == 0
        ) {
          setAchievementExist(false);
        } else {
          searchedData = res.data.filter(
            (data) => data.fullname === searchedUser
          )[0];
          setSearchedAchievementData(searchedData);
          setAchievementExist(true);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit5 = () => {
    let data;
    if (false) {
      axios
        .post("/categories", data)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  };

  const handleChange5 = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    setSearchedUserData({ ...searchedUserData, [name]: value });
  };

  // shop handler functions
  const onSearchChange6 = (e) => {
    setSearchedShop(e.target.value);
    console.log(e.target.value);
    console.log(searchedShop, "ksdlk");
  };

  const handleSubmit6 = (e) => {
    e.preventDefault();
    console.log(shopValues);
    const formdata = new FormData();
    formdata.append("name", shopValues.name);
    formdata.append("location", shopValues.location);
    formdata.append("image", shopValues.image);
    formdata.append("email", shopValues.email);
    formdata.append("phone", shopValues.phone);
    formdata.append("bank_name", shopValues.bank_name);
    formdata.append("acc_num", shopValues.acc_num);
    axios
      .post("https://back.onekoocoffee.com/api/shops/create-shop", formdata)
      .then((res) => {
        console.log(res.data);
        alert("Shop created successfully!");
        navigate(0);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange6 = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setSearchedShopData({ ...searchedShopData, image: files[0] });
      setShopValues({ ...shopValues, image: files[0] });
    } else {
      setSearchedShopData({ ...searchedShopData, [name]: value });
      setShopValues({ ...shopValues, [name]: value });
    }

    console.log(searchedShopData);
  };

  const searchHandler6 = () => {
    axios
      .get(`https://back.onekoocoffee.com/api/shops/find-shop/${searchedShop}`)
      .then((res) => {
        console.log(res.data[0]);
        if (res.data.length === 0) {
          alert("There is no such shop!");
          setShopExist(null);
        } else {
          setSearchedShopData(res.data[0]);
          setShopExist(true);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className=" my-40">
      <div className="w-[90%] md:w-[90%] m-auto gap-5 flex flex-col gap-y-6 font-mono">
        <div className="flex gap-12">
          <div className="flex w-[30%] max-w-[300px] items-start gap-6">
            <div className="w-[100px] h-[100px] rounded-full overflow-hidden shadow-md shadow-slate-700">
              <img
                className="overflow-hidden object-cover opacity-70"
                src={DefaultUserProfile}
                alt=""
              />
            </div>

            <div>
              <h1 className="text-xl mt-4 font-medium text-slate-400">
                User: Admin
              </h1>
            </div>
          </div>
          <div className="w-[70%] h-[40px] rounded-sm bg-orange-900 shadow-md shadow-orange-300"></div>
        </div>
        <div className="flex gap-12">
          <div className="w-[30%] max-w-[300px] h-fit shadow-md shadow-slate-300 p-3 rounded-sm">
            <div className="flex gap-1 mb-3">
              <ArrowBigRight />
              <h2
                onClick={handleUsers}
                className={`text-left duration-300 hover:translate-x-3 cursor-pointer ${
                  users && "text-orange-700 shadow-orange-100 shadow-sm"
                }`}
              >
                Users
              </h2>
            </div>
            <div className="flex gap-1 mb-3">
              <ArrowBigRight />
              <h2
                onClick={handleProducts}
                className={`text-left duration-300 hover:translate-x-3 cursor-pointer ${
                  products && "text-orange-700 shadow-orange-100 shadow-sm"
                }`}
              >
                Product
              </h2>
            </div>
            <div className="flex gap-1 mb-3">
              <ArrowBigRight />
              <h2
                onClick={handleCategory}
                className={`text-left duration-300 hover:translate-x-3 cursor-pointer ${
                  category && "text-orange-700 shadow-orange-100 shadow-sm"
                }`}
              >
                Category
              </h2>
            </div>
            <div className="flex gap-1 mb-3">
              <ArrowBigRight />
              <h2
                onClick={handleOrders}
                className={`text-left duration-300 hover:translate-x-3 cursor-pointer ${
                  orders && "text-orange-700 shadow-orange-100 shadow-sm"
                }`}
              >
                Order
              </h2>
            </div>
            <div className="flex gap-1 mb-3">
              <ArrowBigRight />
              <h2
                onClick={handleShops}
                className={`text-left duration-300 hover:translate-x-3 cursor-pointer ${
                  shops && "text-orange-700 shadow-orange-100 shadow-sm"
                }`}
              >
                Shops
              </h2>
            </div>
            <div className="flex gap-1 mb-3">
              <ArrowBigRight />
              <h2
                onClick={handlePayments}
                className={`text-left duration-300 hover:translate-x-3 cursor-pointer ${
                  payments && "text-orange-700 shadow-orange-100 shadow-sm"
                }`}
              >
                Payments
              </h2>
            </div>
            <div className="flex gap-1 mb-3">
              <ArrowBigRight />
              <h2
                onClick={handleInovation}
                className={`text-left duration-300 hover:translate-x-3 cursor-pointer ${
                  inovation && "text-orange-700 shadow-orange-100 shadow-sm"
                }`}
              >
                Involvment
              </h2>
            </div>
            <div className="flex gap-1 mb-3">
              <ArrowBigRight />
              <h2
                onClick={handleAchievement}
                className={`text-left duration-300 hover:translate-x-3 cursor-pointer ${
                  achievement && "text-orange-700 shadow-orange-100 shadow-sm"
                }`}
              >
                Achievments
              </h2>
            </div>
          </div>

          <div className="w-[70%] shadow-md shadow-slate-300 px-6 py-3 rounded-sm flex flex-col">
            {!isSet && (
              <p className="text-center">Select one of the following options</p>
            )}
            <div className="flex flex-col gap-y-3">
              {users && (
                <Users
                  searchedUser={searchedUser}
                  onSearchChange={onSearchChange}
                  searchHandler={searchHandler}
                  userExist={userExist}
                  handleSubmit={handleSubmit}
                  searchedUserData={searchedUserData}
                  handleChange={handleChange}
                  errors={errors}
                  formValues={formValues}
                  handleUpdate={handleUpdate}
                  setSerachedUserData={setSearchedUserData}
                  setUserExist={setUserExist}
                  setUserPageToDefault={changeToDefault}
                />
              )}
              {products && (
                <Products
                  searchedProduct={searchedProduct}
                  onSearchChange2={onSearchChange2}
                  searchHandler2={searchHandler2}
                  productExist={productExist}
                  handleSubmit2={handleSubmit2}
                  searchedProductData={searchedProductData}
                  formValues={formValues}
                  errors={errors}
                  handleChange2={handleChange2}
                  handleUpdate={handleUpdate}
                  allProducts={allProducts}
                />
              )}
              {category && (
                <Category
                  searchedCategory={searchedCategory}
                  onSearchChange3={onSearchChange3}
                  searchHandler3={searchHandler3}
                  categoryExist={categoryExist}
                  handleSubmit3={handleSubmit3}
                  reRenderPage={reRenderPage}
                  searchedCategoryData={searchedCategoryData}
                  formValues={formValues}
                  handleChange3={handleChange3}
                  errors={errors}
                  handleUpdate={handleUpdate}
                  allCategories={allCategories}
                />
              )}
              {orders && (
                <Orders containerVariants={containerVariants} orders={orders} />
              )}
              {payments && (
                <Payments
                  containerVariants={containerVariants}
                  payments={payments}
                />
              )}
              {inovation && (
                <Inovation
                  searchedCategory={searchedInovation}
                  onSearchChange3={onSearchChange4}
                  searchHandler3={searchHandler4}
                  categoryExist={inovationExist}
                  handleSubmit3={handleSubmit4}
                  searchedCategoryDatat={searchedInovationData}
                  formValues={formValues}
                  handleChange3={handleChange4}
                  errors={errors}
                  handleUpdate={handleUpdate}
                />
              )}
              {achievement && (
                <Achievement
                  searchedCategory={searchedAchievement}
                  onSearchChange3={onSearchChange5}
                  searchHandler3={searchHandler5}
                  categoryExist={achievementExist}
                  handleSubmit3={handleSubmit5}
                  searchedCategoryDatat={searchedAchievementData}
                  formValues={formValues}
                  handleChange3={handleChange5}
                  errors={errors}
                  handleUpdate={handleUpdate}
                />
              )}
              {shops && (
                <Shop
                  shopExist={shopExist}
                  searchedShop={searchedShop}
                  onSearchChange6={onSearchChange6}
                  errors={errors}
                  handleSubmit6={handleSubmit6}
                  handleChange6={handleChange6}
                  searchHandler6={searchHandler6}
                  searchedShopData={searchedShopData}
                  formValues={formValues}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
