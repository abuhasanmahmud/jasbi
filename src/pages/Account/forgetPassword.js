import React, { useState, useEffect } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logoLight } from "../../assets/images";
import { useForm  } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Loader from "../../components/Loader/Loader";
import { useForgetPasswordMutation, useLoginMutation } from "../../redux/api/userApiSlice";
import { setCredentials } from "../../redux/slice/authSlice";

const ForgetPassword = () => {
          const [click, setClick] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset 
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);
  
  const [forgetPassword]=useForgetPasswordMutation()
  const onSubmit = async (data) => {
          // console.log(data)
          setClick(true)
      const res=   await forgetPassword({email:data.email})
      console.log('res',res)
      if(res?.data?.token){
          reset()
          toast.success(`Password reset link send your email ${data.email}`)
          setClick(false)
      }
      else{
          toast.error(' your email is invalid')
          setClick(false)
      }
  };
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-1/2 hidden lgl:inline-flex h-full text-white">
        <div className="w-[450px] h-full bg-primeColor px-10 flex flex-col gap-6 justify-center">
          <Link to="/">
            <p className="text-3xl font-bold ">
              Jas<span className="font-extrabold text-white-900 ">B</span>i
            </p>
          </Link>
          <div className="flex flex-col gap-1 -mt-1">
            <h1 className="font-titleFont text-xl font-medium">Stay sign in for more</h1>
            <p className="text-base">When you sign in, you are with us!</p>
          </div>
         
          <div className="w-[300px] flex items-start gap-3">
            <span className="text-green-500 mt-1">
              <BsCheckCircleFill />
            </span>
            <p className="text-base text-gray-300">
              <span className="text-white font-semibold font-titleFont">
                Get started fast with JASBI
              </span>
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis nisi dolor recusandae
              consectetur!
            </p>
          </div>
          <div className="w-[300px] flex items-start gap-3">
            <span className="text-green-500 mt-1">
              <BsCheckCircleFill />
            </span>
            <p className="text-base text-gray-300">
              <span className="text-white font-semibold font-titleFont">Access all JASBI services</span>
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis nisi dolor recusandae
              consectetur!
            </p>
          </div>
          <div className="w-[300px] flex items-start gap-3">
            <span className="text-green-500 mt-1">
              <BsCheckCircleFill />
            </span>
            <p className="text-base text-gray-300">
              <span className="text-white font-semibold font-titleFont">Trusted by online Shoppers</span>
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis nisi dolor recusandae
              consectetur!
            </p>
          </div>
          <div className="flex items-center justify-between mt-10">
            <Link to="/">
              <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
                © JASBI
              </p>
            </Link>
            <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
              Terms
            </p>
            <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
              Privacy
            </p>
            <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
              Security
            </p>
          </div>
        </div>
      </div>
      <div className="w-full  h-full md:p-10 ">
      

        <form className="w-100 mx-auto shadow-xl px-4 py-8 " onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-2xl mdl:text-3xl mb-4">
            Enter your Email
          </h1>
          <div className="flex flex-col gap-5">
            <p className="font-titleFont text-base font-semibold text-gray-600 my-2">Work Email</p>
            <input
              className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 py-5 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
              type="email"
              placeholder="john@workemail.com"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email Required !!!",
                },
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                  message: "Invalid Email Provided !!!",
                },
              })}
            />
            <label className="level font-bold">
              {errors?.email?.type === "required" && (
                <span className="label-text-alt text-red-500">{errors?.email?.message}</span>
              )}
              {errors?.email?.type === "pattern" && (
                <span className="label-text-alt text-red-500">{errors?.email?.message}</span>
              )}
            </label>
          </div>

        
          <button
            type="submit"
            className={click ? `  w-full text-gray-900 text-base font-medium h-10 rounded-md  duration-300` : `bg-primeColor hover:bg-black hover:text-white cursor-pointer w-full text-gray-200 text-base font-medium h-10 rounded-md hover:text-white duration-300`}
          >
            Reset password
          </button>
         
          <p className="text-sm text-center font-titleFont font-medium mt-4">
            Don't have an Account?{" "}
            <Link to="/signup">
              <span className="hover:text-blue-600 duration-300">Create Account</span>
            </Link>
          </p>
        </form>
        {click && <Loader/> }
      </div>
    </div>
  );
};

export default ForgetPassword;
