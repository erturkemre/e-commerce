import React from "react";
import "tailwindcss/tailwind.css";
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";
import product1 from "../Assets/product.png";
import { LayoutGridIcon, List } from "lucide-react";
import { Link } from "react-router-dom";
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
const ProductListCard = () => {
  const pageHandle = () => {
    console.log("click");
  };
  return (
    <div className="flex flex-col justify-evenly py-5 bg-white">
      <div className="flex justify-around items-center mx-6">
        <div className="text-[#737373]">Showing all results</div>
        <div className="flex items-center">
          <p>Views:</p>
          <button className="border p-3 mx-1 rounded-md text-[#252B42]">
            <LayoutGridIcon size={16} />
          </button>
          <button className="border p-3 mx-1 rounded-md text-[#252B42]">
            <List size={16} />
          </button>
        </div>
        <div>
          {" dropdown"}
          <button className="text-white bg-[#23A6F0] rounded-md px-5 py-3">
            Filter
          </button>
        </div>
      </div>
      <div>
        <div className="flex flex-row flex-wrap mx-48 py-5">
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

        <div className="flex flex-row justify-center items-center rounded-lg p-2">
          <button
            className="border rounded-lg bg-gray-400 text-white px-4 py-2 mx-1"
            onClick={pageHandle}
          >
            <Link to="/">First</Link>
          </button>

          <button
            className="border rounded-lg bg-white text-[#23A6F0] px-4 py-2 mx-1"
            onClick={pageHandle}
          >
            <Link to="/shop/page1">1</Link>
          </button>
          <button
            className="border rounded-lg bg-white text-[#23A6F0] px-4 py-2 mx-1"
            onClick={pageHandle}
          >
            <Link to="/shop/page2">2</Link>
          </button>
          <button
            className="border rounded-lg bg-white text-[#23A6F0] px-4 py-2 mx-1"
            onClick={pageHandle}
          >
            <Link to="/shop/page3">3</Link>
          </button>
          <button
            className="border rounded-lg bg-white text-[#23A6F0] px-4 py-2 mx-1"
            onClick={pageHandle}
          >
            <Link to="/">Next</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductListCard;
