import React from "react";
import OrderPageDetail from "../components/OrderPageDetail";
import Login from "../components/Login";

const OrderPage = () => {
    return (
        <div className="bg-[#FAFAFA]">
            {localStorage.getItem("token") ? <OrderPageDetail /> : <Login />} 
        </div>
    );
}

export default OrderPage;