import React from "react";
import "tailwindcss/tailwind.css";
import manCategory from "../Assets/manCategory.png";
import womenCategory from "../Assets/womenCategory.png";
import accessoriesCategory from "../Assets/accessoriesCategory.png";
import kidsCategory from "../Assets/kidsCategory.png";
import { Button, Card, CardBody } from "reactstrap";

const CategoryCard = () => {
  return (
    <div className="flex flex-col content-center justify-center items-center bg-[#FAFAFA] ">
      <div className="flex pt-10 flex-col">
        <h2 className="text-2xl font-bold text-center">EDITOR'S PICK</h2>
        <p>Problems trying to resolve the conflict between.</p>
      </div>
      <div className="flex flex-col sm:flex-row justify-center w-[20.30rem] sm:w-[100%] sm:h-[32rem] m-10 ">
        <Card className=" sm:w-[31.5rem] px-6 relative">
          <img className="w-[31.5rem] h-[31.5rem]" alt="Men" src={manCategory} />
          <CardBody className="absolute bottom-12 left-20">
            <Button className="bg-white w-40 h-12">MEN</Button>
          </CardBody>
        </Card>
        <Card className="sm:w-[15rem] pt-10 sm:pt-0 px-6 relative">
          <img className="w-full h-[31.5rem]" alt="Women" src={womenCategory} />
          <CardBody className="absolute bottom-12 left-10">
            <Button className="bg-white w-40 h-10">WOMEN</Button>
          </CardBody>
        </Card>
        <div className="flex flex-col pt-10 sm:pt-0  justify-between">
          <Card className="w-[20.30rem] sm:w-60 h-60 px-6 relative">
            <img className="w-[20.30rem] sm:w-60 h-60" alt="Accessories" src={accessoriesCategory} />
            <CardBody className="absolute bottom-12 left-10">
              <Button className="bg-white w-40 h-10">ACCESSORIES</Button>
            </CardBody>
          </Card>
          <Card className="pt-5 sm:pt-0 w-[20.30rem] sm:w-60 h-60 px-6 relative">
            <img className="w-[20.30rem] sm:w-60 h-60" alt="Kids" src={kidsCategory} />
            <CardBody className="absolute bottom-12 left-10">
              <Button className="bg-white w-40 h-10">KIDS</Button>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default CategoryCard;
