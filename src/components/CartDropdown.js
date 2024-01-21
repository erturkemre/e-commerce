import { Minus, Plus, X } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseProduct,decreaseProduct,removeProduct } from "../store/actions/shoppingCartAction";
import { Link } from "react-router-dom";

const CartDropdown = ({ toggle2, setToggle2 }) => {
    const dispatch = useDispatch();
  const productInCart = useSelector(
    (store) => store.shoppingCartReducer.cartList
  );
  const totalProductCount = productInCart.reduce(
    (acc, product) => acc + product.count,
    0
  );

  const handleQuantityChange = (product, type) => {
    if (type === 'increase') {
       dispatch(increaseProduct(product));
      } else if (type === 'decrease') {
        dispatch(decreaseProduct(product));
      }
  };
  const handleRemoveProduct = (product) => {
    dispatch(removeProduct(product));
  };

  return (
    <div className="">
      {totalProductCount > 0 && (
        <button className="bg-[#23A6F0] text-white text-xs rounded-full px-2 py-1">
          {totalProductCount}
        </button>
      )}
      <div className="flex flex-col relative">
        {toggle2 && (
          <div className="flex flex-col absolute z-10 top-0 right-4 bg-white border-2 border-[#E0E0E0] rounded-lg">
            <h2 className="text-xl text-center font-bold text-[#252B42]">
              Sepetim ({totalProductCount} Ürün)
            </h2>
            {productInCart.map((product) => (
              <div
                key={product.id}
                className="flex flex-row items-center justify-evenly gap-6 px-6 py-3 border-b-2 border-[#E0E0E0]"
              >
                <div className="w-20 overflow-hidden rounded-lg">
                  <img
                    className="w-full h-full object-cover transform transition-transform hover:scale-110"
                    src={product.product.images[0].url}
                    alt={product.product.name}
                  />
                </div>
                <div className="flex flex-col w-full h-full gap-3 items-start flex-wrap">
                  <h3 className="font-bold">{product.product.name}</h3>

                  <div className="flex flex-row  gap-2">
                    <button
                      className="bg-[#23A6F0] text-white text-xs rounded px-2 py-1"
                      onClick={() =>
                        handleQuantityChange(product, "decrease")
                      }
                    >
                      <Minus size={12} strokeWidth={1.5} />
                    </button>
                    <p>Adet: {product.count}</p>
                    <button
                      className="bg-[#23A6F0] text-white text-xs rounded px-2 py-1"
                      onClick={() =>
                        handleQuantityChange(product, "increase")
                        
                      }
                    >
                      <Plus size={12} strokeWidth={1.5} />
                    </button>
                    <button
                      className="bg-[#FF0000] text-white text-xs rounded px-2 py-1"
                      onClick={() => handleRemoveProduct(product)}
                    >
                      <X size={12} strokeWidth={1.5} />
                    </button>
                  </div>

                  <p className="font-bold">{product.product.price}₺</p>
                </div>

              </div>
              
            ))}
            <div className="flex flex-row h-12 items-center px-8 py-7 justify-center gap-4">
              <Link to="/cart" className="bg-[#FAFAFA] text-[#23A6F0] w-32 h-8 text-sm rounded-lg px-2 py-1">
                Sepete Git
              </Link>
              <Link to="/cart" className="bg-[#23A6F0] text-white w-32 h-8 text-sm rounded-lg px-2 py-1">
                Siparişi Tamamla
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDropdown;
