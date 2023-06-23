"use client";

import React, { useEffect, useState } from "react";
// import { logInUser, setLoginUser } from "@/utils/fetchingFunctions";
import { useRouter } from "next/navigation";
import { lato } from "../app/layout";
import Image from "next/image";
import googleIcon from "../public/google-icon 1.svg"
import appleIcon from "../public/apple 1.svg"
import { signIn, useSession } from "next-auth/react";

const inputForm = () => {
  const router = useRouter();
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { userName, password } = e.target;
    // console.log(userName.value);
    // await logInUser(userName.value, password.value, router, error, setError);
  };

  const { data: session, status } = useSession();

  // if (status === "loading") {
  //   return <>Loading...</>;
  // }

  if (status === "authenticated") {
    router.push("/profile");
    return null;
  }

  // if (session?.value !== "null") {
  //   router.push("/profile");
  //   return null;
  // }

  // console.log(session)

  const handleSignIn = () => {
    signIn();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-start h-full justify-center flex-col gap-2 w-full max-w-xs relative"
    >
      <div>
        <h3 className=" text-gray-800 text-lg font-bold text-start">Sign In</h3>
        <h4 className=" text-gray-700 text-xs font-medium text-start">
          Sign in to your account
        </h4>
      </div>
      <div className="flex w-full items-center justify-between gap-2 flex-col lg:flex-row " >
      <button onClick={handleSignIn} className="text-xs w-full  bg-white px-2 py-1 rounded-md text-slate-400 font-medium flex items-center justify-center gap-2" >
        <Image className="h-3 w-3" src={googleIcon} alt="Google Icon" /> Sign In with Google</button>
      <button onClick={handleSignIn} className="text-xs w-full  bg-white px-2 py-1 rounded-md text-slate-400 font-medium flex items-center justify-center gap-2" >
        <Image className="h-3 w-3" src={appleIcon} alt="Apple Icon" /> Sign In with Apple</button>
      </div>
      <div className="bg-white p-10 flex items-start justify-center flex-col gap-3 rounded-2xl w-full ">
        <div className="w-full">
          <label
            className="text-gray-700 text-xs font-medium "
            htmlFor="userName"
          >
            Email address
          </label>
          <input
            autoComplete="off"
            id="userName"
            name="userName"
            type="text"
            className=" outline-none text-xs rounded-md bg-gray-300 text-gray-800 px-2 py-1.5 text-left w-full mt-1"
          />
        </div>
        <div className="w-full">
          <label
            className="text-gray-700 text-xs font-medium "
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className=" outline-none text-xs rounded-md bg-gray-300 text-gray-800 px-2 py-1.5 text-left w-full mt-1"
          />
        </div>

        <a href="#" className=" text-xs text-sky-600 hover:underline ">
          Forgot password?
        </a>

        <button
          type="submit"
          className="bg-gray-800 text-white py-1.5 rounded-md text-xs text-center w-full hover:bg-gray-700 transition-all duration-200"
        >
          Sign In
        </button>
      </div>

      <div className="w-full flex items-center justify-center py-2 gap-1">
        <span className=" text-xs text-gray-600 ">Don't have an account?</span>{" "}
        <a href="#" className=" text-xs text-sky-600 hover:underline ">
          Register here
        </a>
      </div>

      <span
        className={` absolute bottom-2 bg-red-500/50 text-white font-semibold px-3 py-1 rounded-md text-sm transition-all duration-300 lg:text-xs text-center ${
          error ? ` opacity-100` : ` opacity-0`
        } `}
      >
        Please check your username and password!!
      </span>
    </form>
  );
};

export default inputForm;
