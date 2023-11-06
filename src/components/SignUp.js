import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { API } from "../api/api";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { Spinner } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRolesActionCreator } from "../store/actions/globalAction";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirm: "",
      role_id: "customer",
      store: { name: "", phone: "", tax_no: "", bank_account: "" },
    },
    mode: "all",
  });
  const history = useHistory();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();
  const roles = useSelector((store) => store.global.roles);

  useEffect(() => {
    dispatch(fetchRolesActionCreator());
  }, [roles.length]);

  const formSubmit = (formdata) => {
    try {
      setIsSubmitting(true);
      API.post("signup", formdata);
      toast.success(
        "You need to click link in email to activate your account!"
      );
      history.push("/login", toast.message("Routing to login page"));
    } catch (err) {
      toast.error(err.response.data.message);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="flex flex-col items-center gap-10 py-10">
      <div className="flex flex-col items-center gap-4">
        <h3 className="font-bold text-4xl text-[#252B42] ">Sıgn Up</h3>
        <p className="text-[#737373] text-base ">
          Enter your name , email and password to register.
        </p>
      </div>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(formSubmit)}>
        <div className="flex flex-col items-start w-[22rem] h-24 ">
          <label className="font-bold text-md text-[#252B42] ">Your Name</label>
          <input
            className="border-2 border-[#252B42] rounded-md h-12 w-full p-2"
            type="text"
            placeholder="Name"
            {...register("name", {
              required: "Name field is required with min 3 char validation",
              validate: (value) => {
                if (value.length < 3) {
                  return "Name should be at-least 3 characters";
                }
              },
            })}
          />
          {errors.name && <p>{errors.name?.message}</p>}
        </div>
        <div className="flex flex-col items-start w-[22rem] h-24 ">
          <label className="font-bold text-md text-[#252B42] ">
            Your Email
          </label>
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
          {errors.email && <p>{errors.email?.message}</p>}
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
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                message:
                  "Password should be at-least 8 characters with 1 uppercase, 1 lowercase and 1 number",
              },
            })}
          />
          {errors.password && <p>{errors.password?.message}</p>}
        </div>
        <div className="flex flex-col items-start w-[22rem] h-24">
          <label className=" font-bold text-md text-[#252B42] ">
            Confirm Password
          </label>
          <input
            className="border-2 border-[#252B42] rounded-md h-12 w-full p-2"
            type="password"
            placeholder="Confirm Password"
            {...register("confirm", {
              required: "Password confirmation is required",
              validate: (value) =>
                value === watch("password")
                  ? "Password matched"
                  : "Passwords do not match",
            })}
          />
          {errors.confirm && <p> {errors.confirm?.message}</p>}
        </div>
        <div className="flex flex-col items-start  w-[22rem] h-max ">
          <label className=" font-bold text-md text-[#252B42] ">Role</label>
          <select
            className="border-2 border-[#252B42] rounded-md h-12 w-[50%] p-2"
            name="role_id"
            type="dropdown"
            {...register("role_id", {
              required: "Role is required",
            })}
          >
            {roles?.map((role) => (
              <option key={role.id} value={role.id}>
                {role.name}
              </option>
            ))}
          </select>

          {errors.role_id && <p>{errors.role_id?.message}</p>}

          {watch("role_id") === "store" && (
            <div className="flex flex-col gap-3 py-3">
              <div className="flex flex-col items-start w-[22rem] h-24">
                <label className="font-bold text-md text-[#252B42]">
                  Store Name
                </label>
                <input
                  type="text"
                  name="store.name"
                  placeholder="Store Name"
                  {...register("store.name", {
                    required: "Store Name is required",
                    minLength: {
                      value: 3,
                      message: "Store Name should be at-least 3 characters",
                    },
                  })}
                  className="border-2 border-[#252B42] rounded-md h-12 w-[50%] p-2"
                />
                {errors.store?.name && <p>{errors.store.name?.message}</p>}
              </div>
              <div className="flex flex-col items-start w-[22rem] h-24">
                <label className="font-bold text-md text-[#252B42]">
                  Store Phone
                </label>
                <input
                  type="text"
                  name="store.phone"
                  placeholder="90XXXXXXXXXX"
                  {...register("store.phone", {
                    required: "Store Phone is required",
                    pattern: {
                      value: /(^05\d{2})(\s|-)?(\d{3})(\s|-)?(\d{4})/,
                      message: "This is not a valid phone number for Turkey",
                    },
                    validate: (value) => {
                      if (value.length < 10) {
                        return "Store Phone should be at-least 10 characters";
                      }
                    },
                  })}
                  className="border-2 border-[#252B42] rounded-md h-12 w-[50%] p-2"
                />
                {errors.store?.phone && <p>{errors.store.phone?.message}</p>}
              </div>

              <div className="flex flex-col items-start w-[22rem] h-24">
                <label className="font-bold text-md text-[#252B42]">
                  Store Tax ID:
                </label>
                <input
                  placeholder="TXXXXVXXXXXX"
                  {...register("store.tax_no", {
                    required: "Tax ID is required!",
                    pattern: {
                      value: /^T\d{4}V\d{6}$/ /*[1-9](\d{9})([0,2,4,6,8]{1})*/,
                      message: "TAX ID is not valid",
                    },
                  })}
                  className="border-2 border-[#252B42] rounded-md h-12 w-[50%] p-2"
                />

                {errors.store?.tax_no?.message}
              </div>
              <div className="flex flex-col items-start w-[22rem] h-24">
                <label className="font-bold text-md text-[#252B42]">
                  IBAN:
                </label>
                <input
                  placeholder="TRXXXXXXXXXXXXXXXXXXXXXXXX"
                  {...register("store.bank_account", {
                    required: "Iban is required!",
                    pattern: {
                      value:
                        /TR[a-zA-Z0-9]{2}s?([0-9]{4}s?){1}([0-9]{1})([a-zA-Z0-9]{3}s?)([a-zA-Z0-9]{4}s?){3}([a-zA-Z0-9]{2})s?/,
                      message: "Iban is not valid",
                    },
                  })}
                  className="border-2 border-[#252B42] rounded-md h-12 w-[50%] p-2"
                />

                {errors.store?.bank_account?.message}
              </div>
            </div>
          )}
        </div>
        <div className="flex w-[22rem] h-20">
          <button
            className="font-bold text-md bg-[#252B42] text-white rounded-md w-full h-12"
            type="submit"
            disabled={!isValid || isSubmitting}
          >
            {isSubmitting ? (
              <div className="spinner">
                <Spinner />
              </div>
            ) : (
              "Sign Up"
            )}
          </button>
        </div>
      </form>
      <div>
        <p className="text-[#737373] text-base">
          Already have an account?{" "}
          <NavLink to="/login">
            <span className="text-[#252B42] font-bold">Login</span>
          </NavLink>
        </p>
      </div>
    </div>
  );
};
export default SignUp;
