"use client";

import { postData } from "@/api/postData";
import { Modal } from "flowbite";
import type { ModalInterface, ModalOptions } from "flowbite";
// import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const MyModal: React.FC = () => {
  const [name, setName] = useState("");
//   const router = useRouter();

  const handleAddName = async () => {
    try {
      const data = await postData(name);
      console.log(`Name successfully added: ${data}`);
      window.location.reload();
    } catch (error) {
      console.error(`Error adding name: ${error}`);
    }
  };

  useEffect(() => {
    // Pilih elemen modal
    const modalElement = document.querySelector<HTMLElement>("#modalEl");

    if (!modalElement) return;

    // Konfigurasi modal
    const modalOptions: ModalOptions = {
      placement: "bottom-right",
      backdrop: "dynamic",
      backdropClasses: "bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40",
      closable: true,
      onHide: () => {
        console.log("Modal is hidden");
      },
      onShow: () => {
        console.log("Modal is shown");
      },
      onToggle: () => {
        console.log("Modal has been toggled");
      },
    };

    // Buat instance modal
    const modal: ModalInterface = new Modal(modalElement, modalOptions);

    // Modal ketika pertama kali terload
    modal.hide();

    // Cleanup modal saat unmount
    return () => {
      modal.hide();
    };
  }, []);

  return (
    <div
      id="modalEl"
      className="hidden fixed inset-0 flex items-center justify-center z-50 mx-5">
      <div className="bg-white rounded-lg shadow-lg p-6 text-black">
        <h2 className="text-lg font-semibold">
          Siapa Namanya, Dimana Rumahnya Ha!!
        </h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 mt-2 w-full"
          placeholder="Siapa kamuu??"
        />
        <div className="w-full flex justify-center items-center">
          <button
            onClick={handleAddName}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-4">
            Gwetch ikut bakar bakar 😋
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyModal;
