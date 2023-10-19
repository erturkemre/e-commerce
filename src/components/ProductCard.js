import React from "react";
import "tailwindcss/tailwind.css";
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";
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
const ProductCard = () => {
  return (
    <div className="flex flex-col content-center justify-center items-center bg-white ">
      <div className="flex flex-col items-center w-[70%]">
        <div className="flex py-10 flex-col items-center">
          <h4 className="text-[#737373]">Featured Products</h4>
          <h3 className="text-2xl font-bold text-center">
            BESTSELLER PRODUCTS
          </h3>
          <p className="text-[#737373]">
            Problems trying to resolve the conflict between.
          </p>
        </div>
        <div className="flex flex-row justify-between flex-wrap overflow-hidden">
          {products.map((product, index) => (
            <Card
              className="mb-10 mx-[1%]"
              style={{
                width: "15rem",
              }}
            >
              <img className="w-15" alt={product.id} src={product.image} />
              <CardBody className="flex flex-col items-center">
                <CardTitle tag="h5">{product.name}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  {product.description}
                </CardSubtitle>
                <CardText>{product.price}</CardText>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
