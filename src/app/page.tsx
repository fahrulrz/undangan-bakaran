// import Image from "next/image";
"use client";

import BackgroundChanger from "@/components/BackgroundChanger";
import MyModal from "@/components/MyModal";
import NameList from "@/components/NameList";
import { Modal } from "flowbite";

export default function Home() {
  return (
    <>
      <div className="w-screen h-screen overflow-hidden flex items-center justify-center">
        <BackgroundChanger />

        <div className="backdrop-blur-sm bg-white/15 mx-6 p-5 max-h-[80vh] overflow-auto rounded-lg">
          <h1 className="text-4xl text-center font-bold">
            Undangan <br />
            Bakar Bakar
          </h1>
          <div className="mt-3">
            <p className="text-justify">
              Pasti pada suntuk dengan kegiatan kuliah kaliannn. Maka dari itu
              Enjel selaku sie acara berinisiatif untuk membuat acara berikut
              nihh…….
            </p>
          </div>
          <div className="my-3 font-bold">
            <div className="flex text-justify">
              <p>Acara : </p>
              <p>Bakar Bakar</p>
            </div>
            <div className="flex">
              <p>Lokasi : </p>
              <p>Rumah Jea</p>
            </div>
            <div className="flex">
              <p>Dana : </p>
              <p>Patungan</p>
            </div>
            <div className="flex">
              <p>Acara : </p>
              <p>Bakar Bakar</p>
            </div>
            <div className="flex">
              <p>Sie Acara : </p>
              <p>Enejelani</p>
            </div>
            <div className="flex">
              <p>Tanggal : </p>
              <p>Minggu ini</p>
            </div>
          </div>

          <div>
            <p className="text-justify">
              Cungg jariii yang pengennn. Acara ini hanya bisa dilakukan 6 bulan
              sekali lohhh, ayo ayoo semuanya sebelum kita semua disibukkan
              dengan kegiatan kita masing-masing yang pastinya dengan
              menambahnya semester pasti bertambah sibuk jugaa. Kapan lagi kita
              bisa bersama lagi kann
            </p>
          </div>
          <div className="mt-6">
            <div>
              <NameList />
            </div>
          </div>
          <div className="mt-5 flex justify-center items-center">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => {
                const modalElement =
                  document.querySelector<HTMLElement>("#modalEl");
                const modal = new Modal(modalElement);
                modal.toggle();
              }}>
              Ikut Ikut Ikut!!!
            </button>
          </div>
        </div>
        <MyModal />
      </div>
    </>
  );
}
