import React, { useEffect, useState } from "react";
import { useAllOrderQuery } from "../../redux/api/orderApiSlice";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useUpdateProfileMutation } from "../../redux/api/userApiSlice";
const UserProfile = () => {
  const [profileImg, setProfileImg] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [orders, setAllorder] = useState([]);
  const { userInfo } = useSelector((state) => state.user);

  const { data } = useAllOrderQuery();
  // console.log("data", data);

  const [updateProfile] = useUpdateProfileMutation();

  const transFormFileDate = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    if (file) {
      reader.onloadend = () => {
        // setProfileImg(reader.result.split(",")[1]);
        setProfileImg(reader.result);
      };
    } else {
      setProfileImg("");
    }
  };

  const onSubmit = async (data) => {
    // console.log("daata", data);
    await transFormFileDate(data.img[0]);
    const userData = {
      name: data?.name,
      email: data?.email,
      id: userInfo?._id,
      img: profileImg,
    };

    updateProfile(userData);
  };

  // console.log("profileImg", profileImg);

  return (
    <div className="grid grid-cols-2  mx-6 my-5">
      <div className="mx-10">
        <p className="text-2xl py-3 font-bold ">User Profile</p>

        <img className="w-48 rounded-full" src={userInfo?.img?.url} alt="" />

        <p className="my-2">{userInfo?.name}</p>
        <p>{userInfo?.email}</p>
      </div>

      <div>
        <form className="w-100  py-8 " onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-2xl mdl:text-3xl mb-4">
            Edit your account
          </h1>
          <div className="flex flex-col gap-.5">
            <input type="file" {...register("img")} />
            <p className="font-titleFont text-base font-semibold text-gray-600 my-2">Your Name</p>
            <input
              className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
              type="text"
              placeholder="john@workemail.com"
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

          <button type="submit" className="btn my-4 bg-gray-500 text-white font-semibold p-3 mt-7">
            Update your profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
