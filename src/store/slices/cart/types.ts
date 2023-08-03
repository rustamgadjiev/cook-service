export type TCartItem = {
  imageUrl: string;
  price: number;
  title: string;
  id: string;
  count: number;
  mores: string[]
};

export type TState = {
  cartList: TCartItem[];
  totalPrice: number;
  totalCount: number;
  deliveryPrice: number;
};
