import React from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";

const OrderAdressInputs = ({ onSave, isOpen, onRequestClose }) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      ad: "",
      soyad: "",
      phone: "",
      city: "",
      district: "",
      neighbourhood: "",
      address: "",
    },
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    console.log(data);
    onSave(data);
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Order Address Modal"
      className="flex flex-col items-center justify-center mr-96 ml-96 mt-10 bg-[#FAFAFA] rounded-2xl"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 py-5"
      >
        <h2 className="text-2xl font-semibold">Adres Ekle</h2>
        <div className="w-full h-1 bg-black"></div>
        <div className="flex flex-col w-full">
          <label htmlFor="title" className="font-semibold">
            Adres Başlığı:
          </label>
          <input
            {...register("title", { required: "Adres başlığı zorunlu" })}
            className="border-2 rounded-md bg-[#F5F5F5] text-black p-2"
          />

          {/* {errors.title && (
            <p className="text-red-500">{errors.title.message}</p>
          )} */}
        </div>
        <div className="flex flex-row gap-10">
          <div>
            <label htmlFor="ad" className="font-semibold">
              Ad*:
            </label>
            <br />
            <input
              {...register("ad", { required: "Ad zorunlu" })}
              className="border-2 rounded-md bg-[#F5F5F5] text-black p-2"
            />

            {errors.ad && <p className="text-red-500">{errors.ad.message}</p>}
            <br />
          </div>
          <div>
            <label htmlFor="soyad" className="font-semibold">
              Soyad*:
            </label>
            <br />
            <input
              {...register("soyad", { required: "Soyad zorunlu" })}
              className="border-2 rounded-md bg-[#F5F5F5] text-black p-2"
            />

            {errors.soyad && (
              <p className="text-red-500">{errors.soyad.message}</p>
            )}
            <br />
          </div>
        </div>

        <div className="flex flex-row gap-10">
          <div>
            <label htmlFor="phone" className="font-semibold">
              Telefon*:
            </label>
            <br />
            <input
              {...register("phone", { required: "Telefon zorunlu" })}
              className="border-2 rounded-md bg-[#F5F5F5] text-black p-2"
            />
            {errors.phone && (
              <p className="text-red-500">{errors.phone.message}</p>
            )}
            <br />
          </div>
          <div>
            <label htmlFor="city" className="font-semibold">
              Şehir*:
            </label>
            <br />
            <input
              {...register("city", { required: "Şehir zorunlu" })}
              className="border-2 rounded-md bg-[#F5F5F5] text-black p-2"
            />
            {errors.city && (
              <p className="text-red-500">{errors.city.message}</p>
            )}
            <br />
          </div>
        </div>
        <div className="flex flex-row gap-10">
          <div>
            <label htmlFor="district" className="font-semibold">
              İlçe*:
            </label>
            <br />
            <input
              {...register("district", { required: "ilçe zorunlu" })}
              className="border-2 rounded-md bg-[#F5F5F5] text-black p-2"
            />
            {errors.district && (
              <p className="text-red-500">{errors.district.message}</p>
            )}
            <br />
          </div>
          <div>
            <label htmlFor="neighbourhood" className="font-semibold">
              Mahalle*:
            </label>
            <br />
            <input
              {...register("neighbourhood", { required: "Mahalle zorunlu" })}
              className="border-2 rounded-md bg-[#F5F5F5] text-black p-2"
            />
            {errors.neighbourhood && (
              <p className="text-red-500">{errors.neighbourhood.message}</p>
            )}
            <br />
          </div>
        </div>

        <div className="flex flex-col w-full ">
          <label htmlFor="address" className="font-semibold">
            Açık Adres*:
          </label>
          <textarea
            {...register("address", { required: "Açık adres zorunlu" })}
            placeholder="Açık adresinizi giriniz..."
            className="border-2 rounded-md bg-[#F5F5F5] text-black p-2"
          />
          {errors.address && (
            <p className="text-red-500">{errors.address.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="flex w-fit rounded-lg px-5 py-1 font-bold border-2 bg-[#23A6F0] text-white"
        >
          Kaydet
        </button>
      </form>
    </Modal>
  );
};

export default OrderAdressInputs;
