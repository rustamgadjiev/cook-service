export type TCardList = {
  id: number;
  number: string;
  name: string;
  cvv: string;
  date: string;
};

export type TInitialState = {
  cardList: TCardList[];
};
