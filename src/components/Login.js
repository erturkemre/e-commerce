import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: { email: "", password: "", rememberMe: false },
    mode: "all",
  });

  const formSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex flex-col items-center gap-4">
        <h3 className="font-bold text-4xl text-[#252B42] ">Login</h3>
        <p className="text-[#737373] text-base ">Enter your email and password to login</p>
      </div>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(formSubmit)}>
        <div className="flex flex-col items-start w-[22rem] h-24 ">
          <label className="font-bold text-md text-[#252B42] ">Your Email</label>
          <input
            className="border-2 border-[#252B42] rounded-md h-12 w-full p-2"
            type="text"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className="flex flex-col items-start w-[22rem] h-24">
          <label className=" font-bold text-md text-[#252B42] ">Password</label>
          <input
            className="border-2 border-[#252B42] rounded-md h-12 w-full p-2"
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password should be at-least 8 characters",
              },
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div className="flex flex-row items-center gap-4">
          <label className="font-bold text-md text-[#252B42] ">Remember Me</label>
          <input type="checkbox" {...register("rememberMe")} />
        </div>
        <div className="flex w-[22rem] h-20">
          <button className="font-bold text-md bg-[#252B42] text-white rounded-md w-full h-12" type="submit" disabled={!isValid}>
            Login
          </button>
        </div>
        <div  >
          <p className="text-[#737373] text-base">Don't have an account? <NavLink to="/signup" className="text-[#252B42]">Sign Up</NavLink></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
