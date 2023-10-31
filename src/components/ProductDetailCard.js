import { ChevronRight } from "lucide-react";
import { React } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "reactstrap";

const ProductDetailPage = () => {
  const { productId } = useParams();
  return (
    <div className="bg-[#FAFAFA] w-[80%] flex ">
      <div className="mx-24 ">
        <div className="flex flex-row items-center ">
          <NavLink
            to="/"
            className="text-[#252B42] font-bold hover:text-blue-800"
          >
            Home
          </NavLink>
          <ChevronRight size={18} />
          <p to="/shop" className="text-[#BDBDBD]">
            shop
          </p>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default ProductDetailPage;
