import React from "react";
import OurTeam from "../components/OurTeam";

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

const TeamPage = () => {
  return (
    <div>
      <OurTeam />
    </div>
  );
};

export default TeamPage;
