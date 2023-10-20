import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

const team = [
  {
    id: 1,
    name: "Username",
    position: "Profession",
    image: "https://picsum.photos/200",
    facebook: "www.facebook.com",
    instagram: "www.instagram.com",
    twitter: "www.twitter.com",
  },
  {
    id: 2,
    name: "Username",
    position: "Profession",
    image: "https://picsum.photos/200",
    facebook: "facebook.com",
    instagram: "instagram.com",
    twitter: "twitter.com",
  },
  {
    id: 3,
    name: "Username",
    position: "Profession",
    image: "https://picsum.photos/200",
    facebook: "facebook.com",
    instagram: "instagram.com",
    twitter: "twitter.com",
  },
];

const OurTeam = () => {
  return (
    <div className="flex justify-center items-center bg-white p-12">
      <div className="">
        <div className="flex flex-col justify-center items-center pb-10">
          <h2 className="text-[#252B42] font-bold text-4xl">Meet Our Team</h2>
          <p className="text-[#737373] text-sm">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics.
          </p>
        </div>
        <div className="flex  ">
          {team.map((item, index) => {
            return (
              <div key={index} className="flex flex-col w-80 h-96 m-5 " >
                <div className="flex flex-col items-center">
                  <img src={item.image} className="w-80 h-60" alt="" />
                  <p className="font-bold text-[#252B42] text-base p-3">{item.name}</p>
                  <p className="font-bold text-[#737373] text-sm">{item.position}</p>
                </div>
                <div className="flex flex-row justify-center p-4 ">
                  <NavLink to={item.facebook}>
                    <FacebookIcon className="text-blue-500 mx-2" />
                  </NavLink>
                  <NavLink to={item.instagram}>
                    <InstagramIcon className="text-blue-500 mx-2"/>
                  </NavLink>
                  <NavLink to={item.twitter}>
                    <TwitterIcon className="text-blue-500 mx-2"/>
                  </NavLink>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
