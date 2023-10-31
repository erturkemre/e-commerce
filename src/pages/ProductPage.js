import {React} from "react";
import ProductDetailPage from "../components/ProductDetailCard";
import  BrandBanner from "../components/BrandBanner";


const ProductPage = () =>{
    
    return(
        <div>
            <ProductDetailPage/>
            <BrandBanner />
        </div>
    )
}

export default ProductPage;