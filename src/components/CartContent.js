import { CheckCircle2, Minus, Plus, X } from "lucide-react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseProduct,
  increaseProduct,
  removeProduct,
} from "../store/actions/shoppingCartAction";
import OrderSummaryBox from "./OrderSummaryBox";

const CartContent = () => {
  const [checked, setChecked] = useState(true);

  const dispatch = useDispatch();
  const productInCart = useSelector(
    (store) => store.shoppingCartReducer.cartList
  );
  const totalProductCount = productInCart.reduce(
    (acc, product) => acc + product.count,
    0
  );
  const onChange = (productId, event) => {

  };

  const handleQuantityChange = (product, type) => {
    if (type === "increase") {
      dispatch(increaseProduct(product));
    } else if (type === "decrease") {
      dispatch(decreaseProduct(product));
    }
  };
  const handleRemoveProduct = (product) => {
    dispatch(removeProduct(product));
  };

  return (
    <div className="flex flex-row ">
      <div className="basis-3/4 ">
        <div className="px-20 flex flex-col gap-3">
          <h2 className=" text-xl font-semibold">
            Sepetim {totalProductCount} ürün
          </h2>
          <div className="flex flex-row bg-light-blue-50 rounded-md px-3 py-2 gap-3 ">
            <CheckCircle2 size={28} color="#008000" />
            <h3 className=" font-semibold ">
              Sepetindeki ürünleri bireysel veya kurumsal fatura seçerek
              alabilirsiniz
            </h3>
          </div>
          <div className="flex flex-col gap-5 ">
            {productInCart.map((product) => (
              <div
                key={product.product.id}
                className="flex flex-row items-center justify-between gap-6 px-6 py-3 rounded-lg border-2 border-[#E0E0E0] bg-white"
              >
                <input
                  type="checkbox"
                  name="order"
                  className="w-5 h-5 "
                  id={product.product.id}
                  value={!!checked}
                  onChange={(event) => onChange(product.product.id, event)}
                  checked={checked}
                />
                <div className="w-20 overflow-hidden rounded-lg">
                  <img
                    className="w-full h-full object-cover transform transition-transform hover:scale-110"
                    src={product.product.images[0].url}
                    alt={product.product.name}
                  />
                </div>
                <div className="flex flex-row w-full h-full gap-3 items-center">
                  <div className="flex flex-col flex-wrap basis-4/6">
                    <h3 className="font-bold">{product.product.name}</h3>
                    <p>{product.product.description}</p>
                  </div>

                  <div className="flex flex-row justify-between basis-2/6 gap-2">
                    <div className="flex flex-row gap-3">
                      <button
                        className="bg-[#23A6F0] text-white text-xs rounded px-2 py-1"
                        onClick={() =>
                          handleQuantityChange(product, "decrease")
                        }
                      >
                        <Minus size={12} strokeWidth={1.5} />
                      </button>
                      <p>{product.count}</p>
                      <button
                        className="bg-[#23A6F0] text-white text-xs rounded px-2 py-1"
                        onClick={() =>
                          handleQuantityChange(product, "increase")
                        }
                      >
                        <Plus size={12} strokeWidth={1.5} />
                      </button>
                    </div>

                    <p className="font-bold">{product.product.price}₺</p>
                    <button
                      className="bg-[#FF0000] text-white text-xs rounded px-2 py-1"
                      onClick={() => handleRemoveProduct(product)}
                    >
                      <X size={12} strokeWidth={1.5} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="basis-1/4 flex flex-col">
        <OrderSummaryBox productInCart={productInCart} />
      </div>
    </div>
  );
};

export default CartContent;
