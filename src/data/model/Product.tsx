export interface Product {
  id: number;
  category: Category['name'];
  title: string;
  price: number;
  hasDiscount: boolean;
  discount: number;
}

export interface Category {
  name: string;
  category: 'BOOTS' | 'FLIPFLOPS' | 'SANDALS' | 'SNEAKERS' | 'SHOES' | 'SANDALS' | 'RUNNING_SHOES';
}

export type Products = Product[]
