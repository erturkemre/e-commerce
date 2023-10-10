import React from "react";
import "tailwindcss/tailwind.css";
import { Mail, Phone } from "lucide-react";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 header-bg ">
      <div className="text-white">
        <p>
          <Phone className="inline-block"/> (541)863-7254
        </p>
      </div>
      <div>
        <p>
          <Mail className="inline-block"/> emre.ertrk.3455@gmail.com
        </p>
      </div>
      <div></div>
    </div>
  );
};
export default Header;
