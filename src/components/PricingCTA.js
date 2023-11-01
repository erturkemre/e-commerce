import { Facebook, Instagram, LinkedinIcon, Twitter } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

const PricingCTA = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-5 py-20">
        <h2 className="font-bold text-[40px] text-[#252B42] ">
          Start your 14 days free trial
        </h2>
        <p className="w-[40%] text-center m-auto font-normal text-sm text-[#737373]">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent.
        </p>
        <button className="bg-[#23A6F0] text-white rounded-md py-[15px] px-10 font-bold text-sm">
          Try it free now
        </button>
        <div className="flex flex-row">
          <NavLink to="https://twitter.com">
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
    </div>
  );
};
export default PricingCTA;
