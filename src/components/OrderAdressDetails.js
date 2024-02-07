import { AlertCircle, Phone, Plus, User } from "lucide-react";
import React, { useState } from "react";
import OrderAdressInputs from "./OrderAdressInputs";
import { useDispatch, useSelector } from "react-redux";
import { setAddress } from "../store/actions/shoppingCartAction";


const OrderAdressDetails = ({onChooseAdress}) => {
  const [chosed, setChosed] = useState(null);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const adressForm = (data) => {
    dispatch(setAddress(data));
  };

  const adresses = useSelector((state) => state.shoppingCartReducer.adresses);
  const handleChooseAdress = (event) => {
    const selectedIndex = parseInt(event.target.value);
    setChosed(selectedIndex);
    onChooseAdress(selectedIndex);
    
  };

  return (
    <div className="flex flex-col rounded-md px-3 py-2 gap-3 ">
      <div className="flex flex-row bg-light-blue-50 rounded-md px-3 py-2 gap-3 ">
        <AlertCircle size={28} color="#008000" />
        <h3 className=" font-semibold ">
          Kurumsal faturalı alışveriş yapmak için "Faturamı aynı adrese gönder"
          tikini kaldırın ve fatura adresi olarak kayıtlı kurumsal adresinizi
          seçin.
        </h3>
      </div>
      <div className="flex flex-col border-2 rounded-md">
        <div className="flex flex-col  rounded-lg px-10 gap-5 py-5">
          <div className="flex flex-row justify-between items-center">
            <h2 className="text-xl font-semibold  ">Teslimat Adresi</h2>
            <div className="flex flex-row items-center gap-2">
              <input type="checkbox" className="w-5 h-5" checked />
              <label>Faturamı Aynı Adrese Gönder</label>
            </div>
          </div>
        </div>

        <div className="flex flex-row flex-wrap gap-2 px-8 py-5 justify-between">
          <button
            className="flex flex-col items-center basis-[45%] border-2 rounded-lg justify-center h-40 hover:bg-[#FFFFF] hover:shadow-md"
            onClick={() => setIsModalOpen(true)}
          >
            <Plus className="w-5 h-5" />
            <h2 className="text-xl font-semibold">Yeni Adres Ekle</h2>
          </button>
          {adresses &&
            adresses?.map((adres, index) => (
              <div className="flex flex-col justify-evenly items-start basis-[45%] border-2 rounded-lg h-40 hover:bg-[#FFFFF] hover:shadow-md">
                <div className="flex flex-row items-center px-5">
                  <input
                    type="radio"
                    id={`address-${index}`}
                    name="chosenAddress"
                    value={index}
                    checked={chosed === index}
                    onChange={handleChooseAdress}
                  />
                  <label
                    htmlFor={`address-${index}`}
                    className="ml-2 font-semibold"
                  >
                    {adres.title}
                  </label>
                </div>
                <div className="flex flex-row w-full justify-between px-5">
                  <div className="flex flex-row">
                    <User className="w-5 h-5" />
                    <p className="font-semibold">{adres.ad}</p>
                    <p className=" font-semibold">{adres.soyad}</p>
                  </div>
                  <div className="flex flex-row">
                    <Phone className="w-5 h-5" />
                    <p className="font-semibold">{adres.phone}</p>
                  </div>
                </div>
                <div className="flex flex-wrap px-5">
                  <p className=" font-semibold">{adres.address}</p>
                </div>
              </div>
            ))}
          {}
        </div>
      </div>
      <OrderAdressInputs
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        onSave={adressForm}
      />
    </div>
  );
};
export default OrderAdressDetails;
