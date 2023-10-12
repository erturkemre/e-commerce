import React from "react";
import Slider from "../components/Slider";
import CategoryCard from "../components/CategoryCard";
import Carousel from "../components/Carousel";


const MainPage = () => {
  return (
    <div className="main-page-content">
      <Slider />
      <CategoryCard />

      {/* <Carousel /> */}
    </div>
  );
};
export default MainPage;