export type TInitialState = {
  orderList: TOrderList[];
  filterOrderList: TOrderList[];
  selectedOrderFilterId: number;
  totalPrice: number;
};

export type TOrderList = {
  condition: number;
  id: number;
  date: string;
  price: number;
  foods: {
    title: string;
    price: number;
    imageUrl: string;
    id: string;
    count: number;
  }[];
};
