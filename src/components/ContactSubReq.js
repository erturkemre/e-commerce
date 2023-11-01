import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const ContactSubReq = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col items-center">
        <h6 className="text-[#252B42] font-bold text-sm">VISIT OUR OFFICE</h6>
        <h2 className="w-[40%] text-center text-[#252B42] font-bold text-4xl">
          We help small businesses with big ideas
        </h2>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center p-10">
        <div className="h-[343px] ">
          <div className="flex flex-col items-center gap-[15px] py-[50px] px-10 text-[#252B42]">
            <Phone className="text-primary-color w-14 h-14" />
            <div className="text-sm font-bold ">
              <p>georgia.young@example.com</p>
              <p>georgia.young@ple.com</p>
            </div>
            <h5 className="font-bold text-base ">Get Support</h5>
            <button className="text-primary-color border border-1 border-primary-color rounded-[37px] py-[15px] px-[36px] font-bold text-sm">
              Submit Request
            </button>
          </div>
        </div>
        <div className="h-[403px] ">
          <div className="flex flex-col items-center gap-[15px] py-[50px] px-10 bg-[#252B42] text-white">
            <MapPin className="text-primary-color w-14 h-14" />
            <div className="text-sm font-bold ">
              <p>georgia.young@example.com</p>
              <p>georgia.young@ple.com</p>
            </div>
            <h5 className="font-bold text-base ">Get Support</h5>
            <button className="text-primary-color border border-1 border-primary-color rounded-[37px] py-[15px] px-[36px] font-bold text-sm">
              Submit Request
            </button>
          </div>
        </div>
        <div className="h-[343px] ">
          <div className="flex flex-col items-center gap-[15px] py-[50px] px-10 text-[#252B42]">
            <Mail className="text-primary-color w-14 h-14"/>
            <div className="text-sm font-bold ">
              <p>georgia.young@example.com</p>
              <p>georgia.young@ple.com</p>
            </div>
            <h5 className="font-bold text-base ">Get Support</h5>
            <button className="text-primary-color border border-1 border-primary-color rounded-[37px] py-[15px] px-[36px] font-bold text-sm">
              Submit Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSubReq;
