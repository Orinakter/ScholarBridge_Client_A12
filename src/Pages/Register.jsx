import Lottie from "lottie-react";
import React, { useContext, useState } from "react";
import { FaUserLarge } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineMail, MdPhotoLibrary } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router";
import registerLottieData from "../assets/Lotties/loginLottie.json";
import { authorizedContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useForm } from "react-hook-form";

const Register = () => {
  const { registerUser, userProfileUpdate, googleLoginBtn, handleGoogleLogin } =
    useContext(authorizedContext);
  const axiosPublic = useAxiosPublic();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const { name, email, password, photo } = data;
    const userInfo = {
      name,
      email,
      photo,
    };

    registerUser(email, password).then(async (credential) => {
      const res = await axiosPublic.post("/users", userInfo);
      console.log(res.data);
     
    });

    console.log(data);
  };

  return (
    <div>
      <div className="flex items-center justify-center mt-12">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl flex flex-col lg:flex-row overflow-hidden">
          {/* Left Section - Lottie Animation */}
          <div className="lg:w-1/2 p-10">
            <h2 className="text-2xl text-[#126e82] text-center font-bold mb-4">
              Welcome to ScholarBridge
            </h2>
            <Lottie
              animationData={registerLottieData}
              style={{ width: "100%", height: "auto" }}
            />
          </div>

          {/* Right Section - Registration Form */}
          <div className="lg:w-1/2 p-10">
            <h2 className="text-3xl font-bold mb-3 text-[#126e82] text-center">
              Registration
            </h2>

            {/*  Form Starts */}
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="flex justify-start items-center gap-2 mb-2">
                  <FaUserLarge className="text-xl text-[#126e82]" />
                  <span className="text-[#126e82]">Name</span>
                </label>
                {/* Name */}
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Enter your Name"
                  className="input input-bordered"
                  aria-label="Enter your name"
                />
              </div>
              <div className="form-control">
                <label className="flex justify-start items-center gap-2 mb-2 mt-2">
                  <MdPhotoLibrary className="text-xl text-[#126e82]" />
                  <span className="text-[#126e82]">Photo-URL</span>
                </label>
                {/* Photo URL */}
                <input
                  {...register("photo", { required: true })}
                  type="url"
                  placeholder="Enter your photo URL"
                  className="input input-bordered"
                  aria-label="Enter your photo URL"
                />
              </div>
              <div className="form-control">
                <label className="flex justify-start items-center gap-2 mb-2 mt-2">
                  <MdOutlineMail className="text-xl text-[#126e82]" />
                  <span className="text-[#126e82]">Email</span>
                </label>
                {/* Email */}
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered"
                  aria-label="Enter your email"
                />
              </div>
              <div className="form-control">
                <label className="flex justify-start items-center gap-2 mb-2 mt-2">
                  <RiLockPasswordFill className="text-xl text-[#126e82]" />
                  <span className="text-[#126e82]">Password</span>
                </label>
                {/* Password */}
                <input
                  {...register("password", { required: true })}
                  type="password"
                  placeholder="Enter your password"
                  className="input input-bordered"
                  aria-label="Enter your password"
                />
              </div>
              <div className="form-control mt-3">
                <button
                  className="btn w-full bg-gradient-to-r from-[#126e82] to-black text-white py-3 rounded-lg text-lg font-semibold hover:opacity-90 transition duration-300"
                  disabled={isLoading}
                >
                  {isLoading ? "Registering..." : "Register"}
                </button>
              </div>
            </form>
            <div className="flex items-center my-6">
              <hr className="flex-grow border-gray-300" />
              <span className="px-4 text-gray-500 text-sm">Or, Login with</span>
              <hr className="flex-grow border-gray-300" />
            </div>
            <div className="text-center flex items-center gap-3">
              <button
                onClick={handleGoogleLogin}
                className="btn w-full bg-white py-3 rounded-lg text-lg font-semibold hover:opacity-90 transition duration-300"
                disabled={isLoading}
              >
                <FcGoogle className="text-2xl" />
                Login with Google
              </button>
            </div>
            <p className="text-center text-sm mt-4">
              Don't have an Account?{" "}
              <Link to="/login">
                <span className="text-[#126e82] hover:underline font-semibold">
                  Login Now
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
