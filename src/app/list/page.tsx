import { Search } from "@/assets";

export default function List() {
  return <div className="w-full bg-white flex items-center justify-center gap-12 flex-col">
          <div className="w-full max-xl2 px-[104px] flex justify-between">
            <p className="text-xl leading-[30px]">06 itens encontrados</p>
            <div className="relative">
              <input placeholder='Pesquisar' className="w-[400px] h-10 rounded-lg border-0 bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-200 placeholder:text-gray-500 pr-10"/>
              <Search className="absolute top-3 right-3 w-4 h-4" />
            </div>
          </div>
          <div className="w-full flex gap-6 px-[104px]">
            <div className="w-full flex flex-col gap-4">
              <div className="w-full max-xl2 flex justify-between">
                <div className="w-[290px] h-auto bg-gray-50 p-4 rounded-lg">
                  <div className="flex flex-col bg-white p-4 rounded-lg gap-4">
                    <p className="font-semibold">Categorias</p>
                    <div className="relative">
                      <input placeholder='Pesquisar' className="w-auto h-10 rounded-lg border-0 bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-200 placeholder:text-gray-500 pr-10"/>
                      <Search className="absolute top-3 right-3 w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full max-xl2 flex justify-between">
                <div className="w-[290px] h-auto bg-gray-50 p-4 rounded-lg">
                  <div className="flex flex-col bg-white p-4 rounded-lg gap-4">
                    <p className="font-semibold">Preço</p>
                    <div className="flex w-full gap-4">
                      <input placeholder='Mínimo' className="w-full h-10 rounded-lg border-0 bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-200 placeholder:text-gray-500"/>
                      <input placeholder='Máximo' className="w-full h-10 rounded-lg border-0 bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-200 placeholder:text-gray-500"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex gap-4">

            </div>
          </div>
        </div>;
}