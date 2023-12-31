import React, { useEffect, useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logoLight } from "../../assets/images";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterUserMutation } from "../../redux/api/userApiSlice";
import { setCredentials } from "../../redux/slice/authSlice";
import { toast } from "react-toastify";
import Loader from "../../components/Loader/Loader";

const SignUp = () => {
  const [checked, setChecked] = useState(false);
  const [click, setClick] = useState(false);
  const [profileImg, setProfileImg] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);
  const location = useLocation();

  console.log("history", navigate);

  const fromLocation = location?.state?.from?.pathname;
  console.log("location", location, "fromLocation", fromLocation);
  const [registerUser, { isLoading }] = useRegisterUserMutation();

  // const transFormFileDate = (file) => {
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   if (file) {
  //     reader.onloadend = () => {
  //       // setProfileImg(reader.result.split(",")[1]);
  //       setProfileImg(reader.result);
  //     };
  //   } else {
  //     setProfileImg("");
  //   }
  // };

  const onSubmit = async (data) => {
    setClick(true);
    // await transFormFileDate(data.img[0]);

    const name = data.name;
    const email = data.email;
    const password = data.password;
    // const img = profileImg;

    try {
      const res = await registerUser({ name, email, password });
      console.log("res..in signup page", res);

      if (res.error) {
        setClick(false);
        toast.error(res?.error?.data?.message || res.error);
        return;
      }
      const userData = res.data;
      dispatch(setCredentials({ ...userData }));
      navigate(fromLocation ? fromLocation : "/");
      toast.success("User login successfully");
      setClick(false);
    } catch (error) {
      console.log("error", error);
      setClick(false);
    }
  };
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-full  h-full md:p-10 ">
        <form className="w-100 mx-auto shadow-xl px-4 py-8 " onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-2xl mdl:text-3xl mb-4">
            Create your account
          </h1>
          <div className="flex flex-col gap-.5">
            <p className="font-titleFont text-base font-semibold text-gray-600 my-2">Your Name</p>
            <input
              className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
              type="text"
              placeholder="john"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name Required !!!",
                },
              })}
            />
            <label className="level font-bold">
              {errors?.name?.type === "required" && (
                <span className="label-text-alt text-red-500">{errors?.name?.message}</span>
              )}
            </label>
          </div>
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
                pattern: {
                  value: /(?=.*[!#$%&?^*@~() "])(?=.{8,})/,
                  message: "Password Must be 8 char including a special char !!!",
                },
              })}
            />
            <label className="level font-bold">
              {errors?.password?.type === "required" && (
                <span className="label-text-alt text-red-500">{errors?.password?.message}</span>
              )}
              {errors?.password?.type === "pattern" && (
                <span className="label-text-alt text-red-500">{errors?.password.message}</span>
              )}
            </label>
          </div>
          {/* <div className="flex flex-col gap-.5">
            <p className="font-titleFont text-base font-semibold text-gray-600 my-2">
              Upload your image
            </p>
            <input
              type="file"
              {...register("img", {
                required: {
                  value: true,
                  message: "your  img Required !!!",
                },
              })}
            />

            <label className="level font-bold">
              {errors?.img?.type === "required" && (
                <span className="label-text-alt text-red-500">{errors?.img?.message}</span>
              )}
            </label>
          </div> */}

          <button
            disabled={click}
            type="submit"
            className="my-3 bg-primeColor hover:bg-black hover:text-white cursor-pointer w-full text-gray-200 text-base font-medium h-10 rounded-md hover:text-white duration-300"
          >
            Create Account
          </button>
          <p className="text-sm text-center font-titleFont font-medium mt-4">
            allready have an Account?{" "}
            <Link to="/signin">
              <span className="hover:text-blue-600 duration-300">Sign In</span>
            </Link>
          </p>
        </form>
        {click && <Loader />}
      </div>
    </div>
  );
};

export default SignUp;
