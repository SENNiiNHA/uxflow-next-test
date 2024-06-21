import Image from "next/image";

import { Product } from "@/data/model/Product";

import { Shoes01 } from "@/assets";

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({product}) => {

  return (<div className="w-full max-w-[290px] flex flex-col items-center justify-center gap-6">
            <Image src={Shoes01} alt="Shoes" className="w-full h-[330px] rounded-lg"/>
            <div className="w-full flex flex-col justify-items-start gap-2">
              <p className="text-sm leading-6 text-gray-500">{product.category}</p>
              <p className="text-xl leading-7 font-medium line-clamp-2">{product.title}</p>
            </div>
            <div className="w-full flex flex-col justify-items-start">
              {product.hasDiscount ? (<p className="text-sm leading-6 text-gray-400 line-through">De R$8.999,00</p>) : null}
              <p className="text-[28px] leading-[42px] font-semibold flex items-center gap-3">R$ 270,00{product.hasDiscount ? (<span className="text-primary-500 text-sm leading-6 font-normal">&nbsp;10% OFF</span>) : null}</p>
            </div>
            <button className="w-full h-12 bg-white rounded-[4px] text-primary-500 text-sm leading-6 border-[1px] border-primary-500">Adicionar ao carrinho</button>
          </div>)
}

export default ProductCard;
