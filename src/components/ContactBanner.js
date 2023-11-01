import React from "react";
import banner from "../Assets/contactBanner.png";
import { Facebook, Instagram, LinkedinIcon, Twitter } from "lucide-react";
import { NavLink } from "react-router-dom";

const ContactBanner = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center">
      <div className="flex flex-col items-center sm:items-start justify-center ">
        <h1 className="text-[#252B42] font-bold text-6xl mt-8">
          Get in touch today!
        </h1>
        <p className="text-lg text-[#252B42] mt-4">
          We know how large objects will act, but things on a small scale
        </p>

        <p className="text-[#252B42] text-lg font-semibold py-5">
          Phone:+1 234 567 8901
        </p>

        <p className="text-[#252B42] text-lg font-semibold">
          Fax:+1 234 567 8901
        </p>
        <div className="flex flex-row">
          <NavLink
            to="https://twitter.com"
            
          >
            <Twitter className="text-[#252B42] text-lg font-semibold m-2" />
          </NavLink>
          <NavLink to="https://facebook.com">
            <Facebook className="text-[#252B42] text-lg font-semibold m-2" />
          </NavLink>
          <NavLink to="https://instagram.com">
          <Instagram className="text-[#252B42] text-lg font-semibold m-2" />
          </NavLink>
          <NavLink to="https://linkedin.com">
          <LinkedinIcon className="text-[#252B42] text-lg font-semibold m-2" />
          </NavLink>
            
          
          
        </div>
      </div>
      <div>
        <div className="absolute">
          <div className="absolute rounded-full top-[15.4rem] left-[34.6rem] bg-[#FFE9EA] w-8 h-8"></div>
          <div className="absolute rounded-full top-32 left-[36rem] bg-[#977DF4] w-2 h-2"></div>
          <div className="absolute rounded-full top-[25.5rem] left-6 bg-[#977DF4] w-2 h-2"></div>
          <div className="absolute rounded-full top-3  bg-[#FFE9EA] w-20 h-20"></div>
          <div className="absolute rounded-full left-14 bg-[#FFE9EA] w-[30.25rem] h-[30.25rem]"></div>
        </div>
        <img className="relative top-[-1.5rem] left-10" src={banner} />
      </div>
    </div>
  );
};

export default ContactBanner;
