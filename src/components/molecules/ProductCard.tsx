import Image from "next/image";

import { Shoes01 } from "@/assets";


export default function ProductCard() {
  return (<div className="w-full max-w-[290px] flex flex-col items-center justify-center gap-6">
            <Image src={Shoes01} alt="Shoes" className="w-full h-[330px] rounded-lg"/>
            <div className="w-full flex flex-col justify-items-start gap-2">
              <p className="text-sm leading-6 text-gray-500">Tênis Social</p>
              <p className="text-xl leading-7 font-medium line-clamp-2">Sapatenis Masculino Branco Tênis Casual FLOW para Dia a Dia - Camursa</p>
            </div>
            <div className="w-full flex flex-col justify-items-start">
              <p className="text-sm leading-6 text-gray-400 line-through">De R$8.999,00</p>
              <p className="text-[28px] leading-[42px] font-semibold flex items-center gap-3">R$ 270,00<span className="text-primary-500 text-sm leading-6 font-normal">&nbsp;10% OFF</span></p>
            </div>
            <button className="w-full h-12 bg-white rounded-[4px] text-primary-500 text-sm leading-6 border-[1px] border-primary-500">Adicionar ao carrinho</button>
          </div>)
}
