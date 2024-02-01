import { AlertCircle } from "lucide-react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import OrderAdressDetails from "./OrderAdressDetails";

const OrderPageDetail = () => {
  const [content, setContent] = useState(0);
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
  return (
    <div className="flex flex-row">
      <div className="basis-3/4 flex flex-col px-8 py-3 gap-3">
        <div className="flex flex-row border-2 rounded-lg">
          <div className=" basis-1/2 border-r-2">
            <button
              className={`w-full h-full flex flex-col justify-between items-start ${
                content === 0 ? "bg-white" : ""
              }`}
              onClick={() => setContent(0)}
            >
              <h2 className="px-4 font-semibold">Adres Bilgileri</h2>
              <h2>Adres Ekle</h2>
              {content === 0 ? (
                <div className="w-full h-1 bg-[#23A6F0]"></div>
              ) : (
                <div className="w-full h-1 bg-[#FAFAFA]"></div>
              )}
            </button>
          </div>
          <div className="basis-1/2">
            <button
              className={`w-full h-20 flex flex-col justify-between items-start ${
                content === 1 ? "bg-white" : ""
              }`}
              onClick={() => setContent(1)}
            >
              <h2 className="px-4 font-semibold">Ödeme Bilgileri</h2>
              <p className="px-4 font-semibold text-xs">
                Banka/Kredi Kartı veya Alışveriş kredisi ile ödeyebilirsiniz.
              </p>
              {content === 1 ? (
                <div className="w-full h-1 bg-[#23A6F0]"></div>
              ) : (
                <div className="w-full h-1 bg-[#FAFAFA]"></div>
              )}
            </button>
          </div>
        </div>
        <div className="flex flex-row bg-light-blue-50 rounded-md px-3 py-2 gap-3 ">
          <AlertCircle size={28} color="#008000" />
          <h3 className=" font-semibold ">
            Kurumsal faturalı alışveriş yapmak için "Faturamı aynı adrese
            gönder" tikini kaldırın ve fatura adresi olarak kayıtlı kurumsal
            adresinizi seçin.
          </h3>
        </div>
        <div className="flex flex-col border-2 rounded-lg px-10 gap-5 py-5">
          <div className="flex flex-row justify-between items-center">
            <h2 className="text-xl font-semibold  ">Teslimat Adresi</h2>
            <div className="flex flex-row items-center gap-2">
              <input type="checkbox" className="w-5 h-5" checked />
              <label>Faturamı Aynı Adrese Gönder</label>
            </div>
          </div>
          {content === 0 ? <OrderAdressDetails /> : <div></div>}
        </div>
      </div>
      <div className="flex flex-col gap-5 basis-1/4 pe-20 py-3 gap">
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
            <h2 className="font-semibold">
              {totalProductPrice > 150
                ? totalProductPrice.toFixed(2)
                : (totalProductPrice + 29.99).toFixed(2)}
              ₺
            </h2>
          </div>
        </div>
        <div>
          <button className="bg-[#23A6F0] text-white rounded-lg px-4 py-2 w-full">
            <h2>Siparişi Onayla </h2>
          </button>
        </div>
      </div>
    </div>
  );
};
export default OrderPageDetail;
