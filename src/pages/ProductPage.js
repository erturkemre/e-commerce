import {React} from "react";
import  BrandBanner from "../components/BrandBanner";
import ProductDetailCard from "../components/ProductDetailCard";
import { useParams } from "react-router-dom";
import product1 from "../Assets/product.png";

const products = [
    {
      id: 1,
      name: "Graphic Design",
      description: "English Depatmant",
      price: "$16.48",
      image: product1,
    },
    {
      id: 2,
      name: "Graphic Design",
      description: "English Depatmant",
      price: "$16.48",
      image: product1,
    },
    {
      id: 3,
      name: "Graphic Design",
      description: "English Depatmant",
      price: "$16.48",
      image: product1,
    },
    {
      id: 4,
      name: "Graphic Design",
      description: "English Depatmant",
      price: "$16.48",
      image: product1,
    },
    {
      id: 5,
      name: "Graphic Design",
      description: "English Depatmant",
      price: "$16.48",
      image: product1,
    },
  ];

const ProductPage = () =>{
    const { id } = useParams();
    const myData = products.find((product) => product.id === Number(id));
    return(
        <div>
            <ProductDetailCard mayData={myData}/>
            <BrandBanner />
        </div>
    )
}

export default ProductPage;