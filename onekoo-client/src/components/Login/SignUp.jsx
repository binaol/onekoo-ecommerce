import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { motion } from "framer-motion";
import axios from "axios";

const SignUp = () => {
  const [formValues, setFormValues] = useState({
    fullname: "",
    email: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formValues.fullname) {
      newErrors.fullname = "Fullname is required";
    }

    if (!formValues.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = "Invalid email";
    }

    if (!formValues.address) {
      newErrors.address = "Address is required";
    }

    if (!formValues.password) {
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
    setFormValues({
      ...formValues,
      [name]: value,
    });
    // console.log(formValues);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post(
          "https://back.onekoocoffee.com/api/auth/register",
          formValues
        );
        console.log(response.data);
        alert("You are successfully registered!");
        setFormValues({
          fullname: "",
          email: "",
          address: "",
          password: "",
          confirmPassword: "",
        });
      } catch (error) {
        console.error(error);
      }
    }
  };
  return (
    <>
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
          },
        }}
        initial="hidden"
        animate="show"
        className="w-[90%] font-mono md:w-[70%] m-auto my-24"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.25,
              },
            },
          }}
          className="flex gap-x-6"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -100 },
              show: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 1.3,
                  delay: 0.3,
                },
              },
            }}
            className="w-[50%] md:w-[30%] mb-2"
          >
            <h1 className="text-3xl md:text-5xl mb-2 text-left font-semibold text-amber-950">
              Welcome
            </h1>
            <p className="text-left text-sm md:text-base">
              Please fill out the form below to create an account
            </p>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -20 },
              show: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1.3,
                  delay: 0.3,
                },
              },
            }}
            className="w-[70%] md:w-[80%] rounded-md shadow-lg shadow-orange-900 mt-1 md:mt-4 h-[30px] py-1 bg-amber-950"
          ></motion.div>
        </motion.div>
        <form action="" onSubmit={handleSubmit}>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 100 },
              show: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1.3,
                  delay: 0.3,
                },
              },
            }}
            className="mt-3 flex flex-col gap-y-4"
          >
            <div className="flex items-center gap-x-7 mb-3">
              <label
                className="text-base md:text-lg text-left w-[40%] md:w-[20%]"
                htmlFor="name"
              >
                Name
              </label>
              <div className="relative w-[70%] md:w-[50%]">
                <Input
                  name="fullname"
                  value={formValues.fullname}
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
                  value={formValues.email}
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
                Address
              </label>
              <div className="relative w-[70%] md:w-[50%]">
                <Input
                  name="address"
                  value={formValues.address}
                  onChange={handleChange}
                  className="w-full border-2 rounded-3xl border-yellow-900/30"
                  id="address"
                  placeholder="Addis Ababa, Ethiopia"
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
                  value={formValues.password}
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
                  value={formValues.confirmPassword}
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
            <div className="flex justify-end">
              <Button
                variants={{
                  hidden: { opacity: 0, x: 100 },
                  show: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 2,
                      delay: 0.3,
                    },
                  },
                }}
                type="submit"
                className="hover:bg-[#612203] hover:scale-95 bg-transparent text-[#612203] font-semibold shadow-md shadow-orange-900 hover:text-white duration-500 border-2 border-[#612203] px-6 py-1 rounded-full"
              >
                Sign Up
              </Button>
            </div>
          </motion.div>
        </form>
      </motion.div>
    </>
  );
};

export default SignUp;
