import { React } from "react";
import BrandBanner from "../components/BrandBanner";
import ProductDetailCard from "../components/ProductDetailCard";
import ProductCard from "../components/ProductCard";
import ProductNavbar from "../components/ProductNavbar";

const ProductPage = () => {
  return (
    <div>
      <ProductDetailCard />

      <ProductNavbar />
      <ProductCard />
      <BrandBanner />
    </div>
  );
};

export default ProductPage;
