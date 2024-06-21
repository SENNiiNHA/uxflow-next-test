import {Logo, ShoppingBag, User} from '@/assets/index';

export default function Header() {
  return <div className="w-full bg-white flex items-center justify-center h-16 px-[104px] py-5 border-b-2 border-gray-100">
          <div className="w-full max-w-xl2 flex justify-between">
              <Logo className="w-[147px] h-[24px]"/>
              <div className='flex gap-4 items-center'>
                <div className='flex gap-3 items-center'>
                  <ShoppingBag className="w-4 h-4"/>
                  <p className='text-gray-500 text-sm leading-6'>
                  Carrinho
                  </p>
                </div>
                <div className='bg-gray-100 w-1 h-1 rounded'/>
                <div className='flex gap-3 items-center '>
                  <User className="w-4 h-4"/>
                  <p className='text-gray-500 text-sm leading-6'>
                  Carrinho
                  </p>
                </div>
              </div>
            </div>
          </div>;
}
