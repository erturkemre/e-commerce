import { CircleDot } from "lucide-react";
import React, { useState } from "react";
import OrderCardInputs from "./OrderCardInputs";
import { useDispatch, useSelector } from "react-redux";
import { setPayment } from "../store/actions/shoppingCartAction";

const OrderCardDetail = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const payments = useSelector((state) => state.shoppingCartReducer.payment);
  const productInCart = useSelector(
    (store) => store.shoppingCartReducer.cartList
  );
  const totalProductPrice = productInCart.reduce(
    (acc, product) =>
      product.checked === true
        ? acc + product.product.price * product.count
        : acc,
    0
  );

  const cardForm = (data) => {
    dispatch(setPayment(data));
  };
  const handleChoosePayment = (event) => {};

  return (
    <div className="flex flex-col border-2 rounded-md h-full">
      <div className="flex flex-row items-center font-semibold gap-3 border-b-2 p-2">
        <CircleDot strokeWidth={3} color="#008000" />{" "}
        <div className="flex flex-col items-start font-semibold">
          <h2 className="text-xl font-bold">Kart ile Öde</h2>{" "}
          <p>
            Kart ile ödemeyi seçtiniz. Banka veya Kredi Kartı kullanarak
            ödemenizi yapabilirsiniz
          </p>
        </div>{" "}
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col basis-1/2 border-r-2 px-5 py-5 gap-5">
          <div className="flex flex-row justify-between ">
            <h2 className="text-xl font-semibold">Kart Bilgileri</h2>{" "}
            <button
              onClick={() => setIsModalOpen(true)}
              className="text[#] hover:text[#FAFAFA]"
            >
              <h2 className="font-semibold">Başka Kart ile Ödeme Yap</h2>
            </button>
          </div>
          <div className="flex flex-row flex-wrap basis-[%30] h-fit justify-between">
            {payments &&
              payments?.map((payment, index) => (
                <div className="flex flex-col  items-start border-2 rounded-lg h-fit hover:bg-[#FFFFF] hover:shadow-md">
                  <div className="flex flex-row items-center px-5">
                    <input
                      type="radio"
                      id={`address-${index}`}
                      name="chosenAddress"
                      value={index}
                      checked={index}
                      onChange={handleChoosePayment}
                    />
                    <label
                      htmlFor={`payment-${index}`}
                      className="ml-2 font-semibold"
                    >
                      {payment.title}
                    </label>
                  </div>
                  <div className="flex flex-row justify-between px-3 py-2">
                    <h2 className="font-semibold">Kart Numarası:</h2>
                    <p>{payment.cardNumber}</p>
                  </div>
                  <div className="flex flex-row justify-between px-3 py-2">
                    <h2 className=" font-semibold">Son Kullanma Tarihi:</h2>
                    <p>{payment.expirationDate}</p>
                  </div>
                  <div className="flex flex-row justify-between px-3 py-2">
                    <h2 className="font-semibold">CVV:</h2>
                    <p>{payment.cvv}</p>
                  </div>
                  <div className="flex flex-row justify-between px-3 py-2">
                    <h2 className="font-semibold">Kart Sahibi:</h2>
                    <p>{payment.cardHolderName}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="flex flex-col basis-1/2 gap-5">
          <div className="flex flex-col justify-between px-3 py-2">
            <h2 className="text-xl font-semibold">Taksit Seçenekleri</h2>
            <h2 className="font-semibold">
              Kartınıza uygun taksit seçeneğini seçiniz
            </h2>
          </div>
          <div className="flex justify-center">
            <table className="table-auto basis-10/12">
              <thead>
                <tr className="bg-[#ADADAD]">
                  <th className="px-4 py-2 ">Taksit</th>
                  <th className="px-4 py-2">Tutar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2 text-center">Tek Çekim</td>
                  <td className="border px-4 py-2 text-center">
                    {totalProductPrice > 150
                      ? totalProductPrice.toFixed(2)
                      : (totalProductPrice + 29.99).toFixed(2)}
                    ₺
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <OrderCardInputs
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        onSave={cardForm}
      />
    </div>
  );
};

export default OrderCardDetail;
