import React from "react";
import { FcGoogle } from "react-icons/fc";
export const OAuth = () => {
  return (
    <div
      className="flex items-center justify-center w-full bg-red-600 px-7 py-3 text-white uppercase text-sm font-medium hover:bg-red-800 active:bg-red-900 shadow-md
    hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out rounded-none"
    >
      <FcGoogle className="text-2xl bg-white rounded mr-2" />
      Continue with Google
    </div>
  );
};
