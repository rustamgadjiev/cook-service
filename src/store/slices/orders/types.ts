export type TInitialState = {
  orderList: TOrderList[];
  filterOrderList: TOrderList[];
  selectedOrderFilterId: number;
  totalPrice: number;
  selectedTimeId: string;
  selectedPaymentId: string;
};

export type TOrderList = {
  condition: number;
  id: number;
  date: string;
  price: number;
  address: string;
  payment: string;
  time: string;
  deliveryPrice: number;
  foods: {
    title: string;
    price: number;
    imageUrl: string;
    id: string;
    count: number;
    mores: any,
  }[];
};
