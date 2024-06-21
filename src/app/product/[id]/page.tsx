import Image from "next/image";

import { Pix, Shoes01 } from "@/assets";


export default async function ProductId({ params }: any ) {
//   async function getProductById(id: number) {
//   const response = await fetch(`https://my-json-server.typicode.com/SENNiiNHA/uxflow-next-test/products/${id}`, {
//     method: 'GET',
//   });

//   return response.json();
// }

  // const product = await getProductById(params.id);

  return <div className="w-full flex justify-center">
          <div className="w-full max-w-[1232px] flex items-center justify-center pt-[52px] gap-10">
            <div className="w-full flex gap-6">
              <div className="w-[105px] flex flex-col gap-6">
                <Image src={Shoes01} alt="Shoes" className="w-full h-[100px] rounded-lg"/>
                <Image src={Shoes01} alt="Shoes" className="w-full h-[100px] rounded-lg"/>
                <Image src={Shoes01} alt="Shoes" className="w-full h-[100px] rounded-lg"/>
                <Image src={Shoes01} alt="Shoes" className="w-full h-[100px] rounded-lg"/>
              </div>
              <div>
                <Image src={Shoes01} alt="Shoes" className="w-[467px] h-[471px] rounded-lg"/>
              </div>
            </div>
            <div className="w-full flex flex-col gap-10">
              <div className="w-full flex flex-col gap-2">
                <p className="text-sm leading-6 text-gray-500">Tênis Social</p>
                <p className="text-[28px] leading-10 font-semibold">Sapatenis Masculino Branco Tênis Casual FLOW para Dia a Dia - Camursa</p>
              </div>
              <div className="w-full flex flex-col justify-center items-center px-5 py-12 bg-gray-50">
                <div className="w-full flex flex-col justify-center items-center gap-4">
                  <Pix className="w-6 h-6"/>
                  <div className="flex flex-col justify-center items-center">
                    <p className="text-sm leading-6 text-gray-400 line-through">De R$8.999,00</p>
                    <p className="text-[32px] leading-[48px] font-semibold">R$ 270,00</p>
                    <p className="flex text-sm leading-6 text-gray-500">no pix <span className="text-primary-500">&nbsp;10%&nbsp;</span> de desconto</p>
                  </div>
                </div>
              </div>
              <button className="w-full h-12 bg-primary-500 rounded-[4px] text-white text-sm leading-6">Adicionar ao carrinho</button>
            </div>
          </div>
        </div>;
}
