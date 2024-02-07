import React from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";

const OrderCardInputs = ({ onSave, isOpen, onRequestClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      cardHolderName: "",
      cardNumber: "",
      expirationDate: "",
      cvv: "",
    },
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    onSave(data);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Order Address Modal"
      className="flex flex-col items-center justify-center mr-96 ml-96 mt-10 bg-[#FAFAFA] rounded-2xl"
    >
      <div className="flex flex-col gap-5">
        <h2 className="text-2xl font-semibold">Kredi Kartı Bilgileri</h2>
        <div className="w-full h-1 bg-black"></div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <div className="flex flex-col w-full">
            <label htmlFor="cardTitle" className="font-semibold">
              Kart ismi:
            </label>
            <input
              {...register("title", {
                required: "Kart sahibinin adı soyadı zorunlu",
              })}
              className="border-2 rounded-md bg-[#F5F5F5] text-black p-2"
            />
            {errors.cardHolderName && (
              <p className="text-red-500">{errors.cardHolderName.message}</p>
            )}
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="cardHolderName" className="font-semibold">
              Kart Sahibinin Adı Soyadı:
            </label>
            <input
              {...register("cardHolderName", {
                required: "Kart sahibinin adı soyadı zorunlu",
              })}
              className="border-2 rounded-md bg-[#F5F5F5] text-black p-2"
            />
            {errors.cardHolderName && (
              <p className="text-red-500">{errors.cardHolderName.message}</p>
            )}
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="cardNumber" className="font-semibold">
              Kart Numarası:
            </label>
            <input
              {...register("cardNumber", { required: "Kart numarası zorunlu" })}
              className="border-2 rounded-md bg-[#F5F5F5] text-black p-2"
            />
            {errors.cardNumber && (
              <p className="text-red-500">{errors.cardNumber.message}</p>
            )}
          </div>

          <div className="flex flex-row gap-10">
            <div>
              <label htmlFor="expirationDate" className="font-semibold">
                Son Kullanma Tarihi:
              </label>
              <br />
              <input
                {...register("expirationDate", {
                  required: "Son kullanma tarihi zorunlu",
                })}
                className="border-2 rounded-md bg-[#F5F5F5] text-black p-2"
              />
              {errors.expirationDate && (
                <p className="text-red-500">{errors.expirationDate.message}</p>
              )}
              <br />
            </div>
            <div>
              <label htmlFor="cvv" className="font-semibold">
                CVV:
              </label>
              <br />
              <input
                {...register("cvv", { required: "CVV zorunlu" })}
                className="border-2 rounded-md bg-[#F5F5F5] text-black p-2"
              />
              {errors.cvv && (
                <p className="text-red-500">{errors.cvv.message}</p>
              )}
              <br />
            </div>
          </div>

          <button
            type="submit"
            className="flex w-fit rounded-lg px-5 py-1 font-bold border-2 bg-[#23A6F0] text-white"
          >
            Kaydet
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default OrderCardInputs;
