import { React, useEffect, useState } from "react";
import BrandBanner from "../components/BrandBanner";
import ProductDetailCard from "../components/ProductDetailCard";
import { useParams } from "react-router-dom";
import product1 from "../Assets/product.png";
import ProductCard from "../components/ProductCard";
import ProductNavbar from "../components/ProductNavbar";

const products = [
  {
    id: 1,
    name: "Graphic Design",
    description: "English Depatmant",
    price: "$16.48",
    image: product1,
    availability: "In Stock"
  },
  {
    id: 2,
    name: "Graphic Design",
    description: "English Depatmant",
    price: "$16.48",
    image: product1,
    availability: "In Stock"
  },
  {
    id: 3,
    name: "Graphic Design",
    description: "English Depatmant",
    price: "$16.48",
    image: product1,
    availability: "In Stock"
  },
  {
    id: 4,
    name: "Graphic Design",
    description: "English Depatmant",
    price: "$16.48",
    image: product1,
    availability: "not Stock"
  },
  {
    id: 5,
    name: "Graphic Design",
    description: "English Depatmant",
    price: "$16.48",
    image: product1,
    availability: "not Stock"
  },
];

const ProductPage = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const productId = parseInt(id);
    const myData = products.find((p) => p.id === productId);
    setProduct(myData);
  }, [id, product]);
  return (
    <div>
      {product ? (
        <ProductDetailCard myData={product} />
      ) : (
        <p>Ürün yükleniyor...</p>
      )}
      <ProductNavbar />
      <ProductCard />
      <BrandBanner />
    </div>
  );
};

export default ProductPage;
