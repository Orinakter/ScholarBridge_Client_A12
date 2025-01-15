import React from "react";
import { Link, useRouteError } from "react-router";
import ErrorData from '../assets/Lotties/Error.json'
import Lottie from "lottie-react";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div>
      <div className="">
        <Lottie className="w-full h-[450px]" animationData={ErrorData}></Lottie>
        <h1 className="text-4xl font-bold text-center mb-5 text-[#126e82]">
          {error.statusText}
        </h1>
        <h1 className="text-4xl font-bold text-center mb-5 text-[#126e82]">{error.status}</h1>
        <h1 className="text-4xl font-bold text-center mb-5 text-[#126e82]">{error.data}</h1>
      </div>
      <div className="text-center mt-12">
        <Link to="/">
          <button className="btn bg-gradient-to-r from-[#126e82] to-black text-white py-3 rounded-lg text-lg font-semibold hover:opacity-90 transition duration-300">
            Return Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
