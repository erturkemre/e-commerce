
import { Plus } from "lucide-react";
import React from "react";
import API from "../api/api";

const OrderAdressDetails = () => {
    
    const adressForm = () => {
        console.log("Adres Formu")
    }
    return (
        <div className="flex flex-row flex-wrap">
              <button className="flex flex-col items-center basis-1/2 border-2 rounded-lg justify-center h-40 hover:bg-[#FFFFF] hover:shadow-md" onClick={adressForm} >
                    <Plus className="w-5 h-5" />
                    <h2 className="text-xl font-semibold">Yeni Adres Ekle</h2>
              </button>
              
          </div>
    )
}
export default OrderAdressDetails;