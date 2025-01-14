import Lottie from 'lottie-react';
import React, { useContext, useState } from 'react';
import { FaUserLarge } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import { MdOutlineMail, MdPhotoLibrary } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router';
import registerLottieData from '../assets/Lotties/loginLottie.json'
import { authorizedContext } from '../AuthProvider/AuthProvider';
import { toast } from 'react-toastify';

const Register = () => {

    const {registerUser,userProfileUpdate,googleLoginBtn} = useContext(authorizedContext)
    const [errorMessage,setErrorMessage] = useState(null)
    const navigate = useNavigate()
    const registerFormHandler = (e)=>{
      e.preventDefault()
      const name = e.target.name.value;
      const photoUrl = e.target.photoUrl.value;
      const email = e.target.email.value;
      const password = e.target.password.value;
  
      setErrorMessage("")
      
      if (!/[!@#$%^&*]/.test(password)) {
         toast.error("Password must have at least one special character")
         return
      }
  
     const uppercaseRegex = /^(?=.*[A-Z]).+$/;
     if(!uppercaseRegex.test(password)){
      toast.error("You Should need one Uppercase")
      return
     }
  
     if(password.length<6){
      toast.error("Password Should be 6 digit")
      
     }
  
     registerUser(email, password)
        .then((data) => {
          userProfileUpdate(name,photoUrl)
           navigate("/")
  
          toast.success("User Registation Successfully");
        })
        .catch((error) => {
          navigate("/")
          toast.error("All fields are required")
          setErrorMessage(error.message);
        });
    };
  
    const googleRegisterHandler  = ()=>{
        googleLoginBtn()
    
        .then(result=>{
          if(state){
            navigate(state)
          }
          else{
            navigate("/")
    
          }
          navigate("/")
          toast.success ("User Login Successfully")
        })
        .catch(error=>{
          setErrorMessage(error.message)
          
        })
        
    
      }
    


    


    return (
        <div>
            <div className="flex  items-center justify-center mt-12">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl flex flex-col lg:flex-row overflow-hidden">
        <div className="lg:w-1/2 p-10">
          <h2 className="text-2xl text-[#126e82] text-center font-bold mb-4">
            Welcome to ScholarBridge
          </h2>
         
          <Lottie animationData={registerLottieData}></Lottie>
         
        </div>

        <div className="lg:w-1/2 p-10">
          <h2 className="text-3xl font-bold mb-3 text-[#126e82] text-center">
            Registration 
          </h2>
          <form onSubmit={registerFormHandler}  className="card-body">
            <div className="form-control">
              <label className="flex justify-start items-center gap-2 mb-2 ">
                <span className="text-xl text-[#126e82]">
                  <FaUserLarge />
                </span>
                <span className="text-[#126e82]">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="flex justify-start items-center gap-2 mb-2 mt-2">
                <span className="text-xl text-[#126e82]">
                  <MdPhotoLibrary />
                </span>
                <span className="text-[#126e82]">Photo-URL</span>
              </label>
              <input
                type="text"
                placeholder="Enter your photo-url"
                name="photoUrl"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="flex justify-start items-center gap-2 mb-2 mt-2">
                <span className="text-xl text-[#126e82] ">
                  <MdOutlineMail />
                </span>
                <span className="text-[#126e82]">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="flex justify-start items-center gap-2 mb-2 mt-2">
                <span className="text-xl text-[#126e82]">
                  <RiLockPasswordFill />
                </span>
                <span className="text-[#126e82]">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-3">
              <button className="btn w-full bg-gradient-to-r from-[#126e82] to-black text-white py-3 rounded-lg text-lg font-semibold hover:opacity-90 transition duration-300">
                Register
              </button>
            </div>
          </form>
          <div class="flex items-center my-6">
              <hr class="flex-grow border-gray-300" />
              <span class="px-4 text-gray-500 text-sm">Or, Login with</span>
              <hr class="flex-grow border-gray-300" />
            </div>
          <div className="text-center flex items-center gap-3">
                        <button
                        onClick={googleRegisterHandler}
                         
                          className="btn w-full bg-white py-3 rounded-lg text-lg font-semibold hover:opacity-90 transition duration-300"
                        >
                          <span className="text-2xl">
                            <FcGoogle />
                          </span>
                          Login with Google
                        </button>
                      </div>

          <p className="text-center text-sm mt-4">
            Don't have an Account?
            <Link to="/login">
              <span className="text-[#126e82] hover:underline font-semibold"> Login Now</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
            
        </div>
    );
};

export default Register;