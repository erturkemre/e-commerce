import React from "react";
import Slider from "../components/Slider";
import CategoryCard from "../components/CategoryCard";
import Carousel from "../components/Carousel";
import ProductCard from "../components/ProductCard";


const MainPage = () => {
  return (
    <div className="main-page-content">
      <Slider />
      <CategoryCard />
      <ProductCard />
      {/* <Carousel /> */}
    </div>
  );
};
export default MainPage;