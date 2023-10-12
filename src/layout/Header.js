import React from "react";
import "tailwindcss/tailwind.css";
import { Facebook, Instagram, Mail, Phone, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-header-bg text-white">
      <div className="flex px-4 ">
        <p>
          <Phone className="inline-block" /> (541)863-7254
        </p>
        
      </div>
      <div>
          <Mail className="inline-block" /> emre.ertrk.3455@gmail.com
        </div>
      <div>
        <p>Follow Us and get a chance to win 80% off</p>
      </div>
      <div className="">
        <p>Follow Us :
          
        <Link to="https://www.instagram.com/" className="px-1">
          <Instagram className="inline-block" />
          </Link>
          <Link to="https://www.youtube.com/" className="px-1">
          <Youtube className="inline-block" />
          </Link>
          <Link to="https://www.facebook.com/" className="px-1">
          <Facebook className="inline-block" />
          </Link>
          <Link to="https://www.x.com/"  className="px-1">
          <Twitter className="inline-block" />
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Header;
