import React, { useState, useEffect } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { logoLight } from "../../assets/images";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../../redux/userApiSlice";
import { setCredentials } from "../../redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
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

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

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
      navigate("/");
      toast.success("User login successfully");
    } catch (err) {
      console.log("err in singin ", err);
    }
  };
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-1/2 hidden lgl:inline-flex h-full text-white">
        <div className="w-[450px] h-full bg-primeColor px-10 flex flex-col gap-6 justify-center">
          <Link to="/">
            <img src={logoLight} alt="logoImg" className="w-28" />
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
                © OREBI
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
                // pattern: {
                //   value: /(?=.*[!#$%&?^*@~() "])(?=.{8,})/,
                //   message: "Password Must be 8 char including a special char !!!",
                // },
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
            type="submit"
            className={`${
              checked
                ? "bg-primeColor hover:bg-black hover:text-white cursor-pointer"
                : "bg-gray-500 hover:bg-gray-500 hover:text-gray-200 cursor-none"
            } w-full text-gray-200 text-base font-medium h-10 rounded-md hover:text-white duration-300`}
          >
            Sign In
          </button>
          <p className="text-sm text-center font-titleFont font-medium mt-4">
            Don't have an Account?{" "}
            <Link to="/signup">
              <span className="hover:text-blue-600 duration-300">Create Account</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
