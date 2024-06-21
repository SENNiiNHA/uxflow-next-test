import Image from "next/image";

import { Shoes01, Trash } from "@/assets";



export default async function Cart() {

  return <div className="w-full flex justify-center">
          <div className="w-full max-w-[1232px] flex items-center justify-center pt-[52px] gap-10 margin-auto">
            <div className="w-full max-w-[808px] flex  gap-10">
              <Image src={Shoes01} alt="Shoes" className="w-[150px] h-[150px] rounded-lg"/>
              <div className="w-full flex flex-col gap-3">
                <p className="text-2xl leading-9 font-medium line-clamp-2">Sapatenis Masculino Branco Tênis Casual FLOW para Dia a Dia - Camursa</p>
                <div className="w-full flex justify-between items-center">
                  <p className="text-[28px] leading-[42px] text-black font-semibold">R$ 270,00</p>
                  <div className="flex gap-3">
                    <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-red-500/10"><Trash className="w-6 h-6" /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>;
}
