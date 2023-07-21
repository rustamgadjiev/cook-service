export type TAddressList = {
  id: number;
  title: string;
  city: string;
  street: string;
  home: string;
  flatNumber: string;
  coment: string;
};

export type TInitialState = {
  addressList: TAddressList[];
};
