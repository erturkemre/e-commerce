import React from "react";

const OrderSummaryBox = ({ productInCart }) => {
  const totalProductPrice = productInCart.reduce(
    (acc, product) =>
      product.checked === true
        ? acc + product.product.price * product.count
        : acc,
    0
  );
  return (
    <div className=" flex flex-col gap-5 py-3 pe-20">
      <div>
        <button className="bg-[#23A6F0] text-white rounded-lg px-4 py-2 w-full">
          Siparişi Onayla
        </button>
      </div>
      <div className="flex flex-col gap-1 border-2 rounded-lg bg-white ">
        <h2 className="text-xl font-semibold px-10 py-5">Sipariş Özeti</h2>

        <div className="flex flex-row justify-evenly">
          <h2>Ürünün Tutarı:</h2>
          <h2>{totalProductPrice.toFixed(2)}₺</h2>
        </div>
        <div className="flex flex-row justify-evenly">
          <h2>Kargo Toplam:</h2>
          <h2>29.99₺</h2>
        </div>
        {totalProductPrice > 150 && (
          <div className="flex flex-row justify-evenly items-center">
            <h2 className="w-28 px-1 text-red-700">
              150₺ ve Üzeri Bedava (Satıcı Karşılar):
            </h2>
            <h2 className=" text-red-700">-29.99₺</h2>
          </div>
        )}

        <div className="w-full h-1 bg-[#E0E0E0] "></div>
        <div className="flex flex-row justify-evenly py-3">
          <h2>Toplam:</h2>
          <h2 className="font-semibold">{(totalProductPrice > 150 ? totalProductPrice.toFixed(2): (totalProductPrice + 29.99).toFixed(2) )}₺</h2>
        </div>
      </div>
      <div>
        <button className="bg-[#23A6F0] text-white rounded-lg px-4 py-2 w-full">
          <h2>Siparişi Onayla </h2>
        </button>
      </div>
    </div>
  );
};

export default OrderSummaryBox;
