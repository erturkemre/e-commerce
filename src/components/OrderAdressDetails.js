import { Phone, Plus, User } from "lucide-react";
import React, { useState } from "react";
import OrderAdressInputs from "./OrderAdressInputs";
import { useDispatch, useSelector } from "react-redux";
import { setAddress } from "../store/actions/shoppingCartAction";

const OrderAdressDetails = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [choosingAdress, setChoosingAdress] = useState(null);

  const adressForm = (data) => {
    dispatch(setAddress(data));
  };

  const adresses = useSelector((state) => state.shoppingCartReducer.adresses);

  const handleChooseAdress = (index) => {
    setChoosingAdress(index);
  };
  return (
    <div className="flex flex-row flex-wrap gap-2 justify-between">
      <button
        className="flex flex-col items-center basis-[45%] border-2 rounded-lg justify-center h-40 hover:bg-[#FFFFF] hover:shadow-md"
        onClick={() => setIsModalOpen(true)}
      >
        <Plus className="w-5 h-5" />
        <h2 className="text-xl font-semibold">Yeni Adres Ekle</h2>
      </button>
      {adresses &&
        adresses?.map((adres,index) => (
          <div className="flex flex-col justify-evenly items-start basis-[45%] border-2 rounded-lg h-40 hover:bg-[#FFFFF] hover:shadow-md">
            <div className="flex flex-row items-center px-5">
                <input
                  type="radio"
                  id={`address-${index}`}
                  name="chosenAddress"
                  checked={choosingAdress === index}
                  onChange={() => handleChooseAdress(index)}
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
      <OrderAdressInputs
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        onSave={adressForm}
      />
    </div>
  );
};
export default OrderAdressDetails;
