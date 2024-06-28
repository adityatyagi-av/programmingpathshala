"use client";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import { useState } from "react";

const Page = () => {
  const [showMessage,setShowMessage]=useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onDialogClose = () => {
    setShowMessage(false)
  };
  const onFormSubmit = async (data) => {
    try {
      
      const response = await axios.post(
        "http://localhost:8000/api/register-user",
        { name: data.name,
          email: data.email,
          password: data.password,
          confirmpassword:data.confirmpassword
         }
      );
      setShowMessage(true);
      reset();
      
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message || "Registration failed");
      } else if (error.request) {
        alert("No response from server. Please try again later.");
      } else {
        alert("An error occurred: " + error.message);
      }
    }
  };

  const onErrors = (errors) => console.error(errors);

  return (

    <>
      <main className="flex overflow-hidden">
        <div className="py-12 flex-1 lg:flex lg:justify-center lg:h-screen lg:overflow-auto">
          <div className="max-w-lg flex-1 mx-auto px-4 text-gray-600">
            <div>
              <h3 className="text-gray-800 dark:text-[#D9D9D9] text-3xl font-semibold sm:text-4xl">
                Signup
              </h3>
            </div>
            <form
              className="space-y-5 mt-12 lg:pb-12"
              onSubmit={handleSubmit(onFormSubmit, onErrors)}
            >
              <div>
                <label className="dark:text-[#ffffff] font-medium">
                  Full name
                </label>
                <input
                  className="w-full mt-2 px-3 py-2 text-gray-500 dark:text-gray-200 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  type="text"
                  name="name"
                  {...register("name", {
                    required: "Full name is required",
                    minLength: {
                      value: 6,
                      message: "Full name must be at least 6 characters",
                    },
                  })}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <label className="dark:text-[#ffffff] font-medium">
                  Email address
                </label>
                <input
                  className="w-full mt-2 px-3 py-2 text-gray-500 dark:text-gray-200 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  type="email"
                  name="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Email is not valid",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label className="dark:text-gray-200 font-medium">
                  Phone number
                </label>
                <div className="relative mt-2">
                  <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                    <select className="text-sm bg-transparent outline-none rounded-lg h-full">
                      <option>IN</option>
                      <option>US</option>
                      <option>ES</option>
                      <option>MR</option>
                    </select>
                  </div>
                  <input
                    type="number"
                    placeholder="+91 8057226016"
                    name="phone"
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[0-9]{10,15}$/,
                        message: "Phone number is not valid",
                      },
                    })}
                    className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-gray-800 dark:text-gray-200 shadow-sm rounded-lg"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="dark:text-[#ffffff] font-medium">
                  Password
                </label>
                <input
                  className="w-full mt-2 px-3 py-2 text-gray-500 dark:text-gray-200 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  type="password"
                  name="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  })}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div>
                <label className="dark:text-[#ffffff] font-medium">
                  Confirm Password
                </label>
                <input
                  className="w-full mt-2 px-3 py-2 text-gray-500 dark:text-gray-200 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  type="password"
                  name="confirmpassword"
                  {...register("confirmpassword", {
                    required: "Please confirm your password",
                    validate: (value, { password }) =>
                      value === password || "Passwords do not match",
                  })}
                />
                {errors.confirmpassword && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.confirmpassword.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </main>
      <Dialog open={showMessage} onDismiss={onDialogClose}>
        <DialogContent>
          <DialogClose asChild>
            <button className="absolute top-0 right-0 p-2">
             
              <span className="sr-only">Close</span>
            </button>
          </DialogClose>
          <DialogTitle>Form Submitted Successfully</DialogTitle>
          <DialogDescription>
            Your registration has been successful. Thank you!
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Page;
