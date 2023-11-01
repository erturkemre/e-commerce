import { Carousel } from "@material-tailwind/react";
import { ChevronRight } from "lucide-react";
import { React } from "react";
import { NavLink } from "reactstrap";





const ProductDetailCard = ({myData}) => {

  return (
    <div className="bg-[#FAFAFA] w-[100%] flex ">
      <div className="flex flex-col mx-24 ">
        <div className="flex flex-row items-center my-5">
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
        <div className="flex flex-row">
          <div className="w-[31.80rem] h-[34.30rem]">
            <Carousel className="flex rounded-xl h-[28.125rem]">
              <img
                src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                alt="image 1"
                className="h-full w-full object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                alt="image 2"
                className="h-full w-full object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                alt="image 3"
                className="h-full w-full object-cover"
              />
            </Carousel>
            <div className="flex flex-row">
            <img
                src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                alt="image 1"
                className="h-[6.25rem] w-[6.25rem] object-cover rounded-xl p-2 "
              />
            <img
                src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                alt="image 2"
                className="h-[6.25rem] w-[6.25rem] object-cover rounded-xl p-2"
              />  
              <img
                src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                alt="image 3"
                className="h-[6.25rem] w-[6.25rem] object-cover rounded-xl p-2"
              /> 
            </div>
          </div>
          <div>
            <h4>{myData?.name}</h4>
            <h3>{myData?.price}</h3>
            <p>{myData?.description}</p>

          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ProductDetailCard;
