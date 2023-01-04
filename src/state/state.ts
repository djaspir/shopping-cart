export interface CartStateStatus {
  isOpen: boolean;
}

export interface ProductItems {
  id: string;
  title: string;
  price: string;
  image: string;
}

export interface CartItems {
  id: string;
  title: string;
  price: string;
  image: string;
  quantity: number;
}

export type CartState = Array<CartItems>;

export type ProductState = Array<ProductItems>;
