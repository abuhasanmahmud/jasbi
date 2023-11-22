import React, { useState, useEffect } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logoLight } from "../../assets/images";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Loader from "../../components/Loader/Loader";
import { useLoginMutation } from "../../redux/api/userApiSlice";
import { setCredentials } from "../../redux/slice/authSlice";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);
  const [checked, setChecked] = useState(false);

  const [login, { isLoading }] = useLoginMutation();

  const location = useLocation();
  const fromLocation = location?.state?.from?.pathname;
  console.log("fromLocation", fromLocation);

  const onSubmit = async (data) => {
    const email = data.email;
    const password = data.password;
    // console.log("email", email, password);
    try {
      const res = await login({ email, password });
      // console.log("res", res);

      if (res.error) {
        toast.error(res?.error?.data?.message || res.error);
        return;
      }
      const userData = res.data;
      dispatch(setCredentials({ ...userData }));
      navigate(fromLocation ? fromLocation : "/");
      toast.success("User login successfully");
    } catch (err) {
      console.log("err in singin ", err);
    }
  };
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-full  h-full md:p-10 ">
        {/* <form className="w-full " onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full mb-5 ">
            <label className="">
              <span className="text-secondary font-semibold text-lg">Email</span>
            </label>
            <input
              type="text"
              placeholder="example@email.com"
              className="input input-bordered w-full rounded-full"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email Required !!!",
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
          <div className="form-control w-full">
            <label className="">
              <span className="text-secondary font-semibold text-lg">Password</span>
            </label>
            <input
              type="password"
              placeholder="abcd123$"
              className="input input-bordered w-full rounded-full"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password Required !!!",
                },
              })}
            />
            <label className="level font-bold">
              {errors?.password?.type === "required" && (
                <span className="label-text-alt text-red-500">{errors?.password?.message}</span>
              )}
              {errors?.password?.type === "pattern" && (
                <span className="label-text-alt text-red-500">{errors?.password?.message}</span>
              )}
            </label>
          </div>
          <input type="submit" />
        </form> */}

        <form className="w-100 mx-auto shadow-xl px-4 py-8 " onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-2xl mdl:text-3xl mb-4">
            Login your account
          </h1>
          <div className="flex flex-col gap-.5">
            <p className="font-titleFont text-base font-semibold text-gray-600 my-2">Work Email</p>
            <input
              className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
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

          {/* errors will return when field validation fails  */}
          <div className="flex flex-col gap-.5">
            <p className="font-titleFont text-base font-semibold text-gray-600 my-2">Password</p>
            <input
              className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
              type="password"
              placeholder="Your password"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password Required !!!",
                },
              })}
            />
            <label className="level font-bold">
              {errors?.password?.type === "required" && (
                <span className="label-text-alt text-red-500">{errors?.password?.message}</span>
              )}
            </label>
          </div>

          <button
            type="submit"
            className="bg-primeColor hover:bg-black hover:text-white cursor-pointer w-full text-gray-200 text-base font-medium h-10 rounded-md hover:text-white duration-300 my-3"
          >
            Sign In
          </button>
          {isLoading && (
            <>
              {" "}
              <Loader />
            </>
          )}
          <p className="text-sm text-center font-titleFont font-medium mt-4">
            Don't have an Account?{" "}
            <Link to="/signup">
              <span className="text-blue-800 duration-300">Create Account</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
