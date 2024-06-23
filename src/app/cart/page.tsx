"use client";

import { Shoes01, Trash } from "@assets";
import CounterInput from "@components/atoms/CounterInput";
import Image from "next/image";

export default function Cart() {
  const handleCountChange = (value: number) => {
    console.log("Count changed to:", value);
  };

  return (
    <div className="w-full flex justify-center px-[104px]">
      <div className="w-full max-w-xl2 m-auto flex flex-wrap lg:flex-nowrap pt-[52px] gap-10 margin-auto">
        <div className="w-full max-w-[1016px] flex gap-10">
          <Image src={Shoes01} alt="Shoes" className="w-[150px] h-[150px] rounded-lg" />
          <div className="w-full flex flex-col gap-3">
            <p className="text-2xl leading-9 font-medium line-clamp-2">
              Sapatenis Masculino Branco Tênis Casual FLOW para Dia a Dia - Camursa
            </p>
            <div className="w-full flex justify-between items-center">
              <p className="text-[28px] leading-[42px] text-black font-semibold">R$ 270,00</p>
              <div className="flex gap-3">
                <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-red-500/10">
                  <Trash className="w-6 h-6" />
                </button>
                <CounterInput min={1} max={10} value={7} onCountChange={handleCountChange} />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:max-w-96 flex flex-col items-center justify-center gap-8 border-gray-200 p-8 border-[1px] rounded-[4px]">
          <div className="w-full flex flex-col gap-6">
            <div className="w-full flex justify-between items-center">
              <p className="text-[16px] leading-6 text-gray-500 font-normal">Sub total:</p>
              <p className="text-[16px] leading-6 text-black font-medium">R$ 270,00</p>
            </div>
            <div className="w-full flex bg-gray-100 h-[1px]" />
            <div className="w-full flex justify-between items-center">
              <p className="text-[16px] leading-6 text-gray-500 font-normal">Frete:</p>
              <p className="text-[16px] leading-6 text-green-600 font-medium">Grátis</p>
            </div>
            <div className="w-full flex bg-gray-100 h-[1px]" />
            <div className="w-full flex justify-between items-center">
              <p className="text-[16px] leading-6 text-gray-500 font-normal">Valor total:</p>
              <p className="text-[22px] leading-6 text-black font-medium">R$ 270,00</p>
            </div>
          </div>
          <button className="w-full h-12 bg-primary-500 rounded-[4px] text-white text-sm leading-6">
            Finalizar pedido
          </button>
        </div>
      </div>
    </div>
  );
}
