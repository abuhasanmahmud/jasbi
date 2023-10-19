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
  const fromLocation = location?.state?.from?.pathname;
  // console.log("location", location, "fromLocation", fromLocation);
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
      const res = await registerUser({ name, email, password});

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
      <div className="w-1/2 hidden lgl:inline-flex h-full text-white">
        <div className="w-[450px] h-full bg-primeColor px-10 flex flex-col gap-6 justify-center">
          <p className="text-3xl font-bold ">
            Jas<span className="font-extrabold ">B</span>i
          </p>
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
                Get started fast with OREBI
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
              <span className="text-white font-semibold font-titleFont">Access all OREBI services</span>
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
                ©JASBI
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
          <p className="text-sm text-primeColor my-5">
            <Link to="/forgetpassword">
              <span className="text-blue-500 font-extrabold">Forget your password ?</span>
            </Link>
          </p>
          {/* Checkbox */}
          <div className="flex items-start mdl:items-center gap-2 my-3">
            <input
              onChange={() => setChecked(!checked)}
              className="w-4 h-4 mt-1 mdl:mt-0 cursor-pointer"
              type="checkbox"
            />
            <p className="text-sm text-primeColor">
              I agree to the OREBI <span className="text-blue-500">Terms of Service </span>and{" "}
              <span className="text-blue-500">Privacy Policy</span>.
            </p>
          </div>
          <button
            disabled={click}
            type="submit"
            className={`${
              checked
                ? "bg-primeColor hover:bg-black hover:text-white cursor-pointer"
                : "bg-gray-500 hover:bg-gray-500 hover:text-gray-200 cursor-none"
            } w-full text-gray-200 text-base font-medium h-10 rounded-md hover:text-white duration-300`}
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
