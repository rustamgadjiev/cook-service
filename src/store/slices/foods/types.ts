type TMore = { title: string; addPrice: number };

export type TFoods = {
  title: string;
  description: string;
  weight: string;
  calories: number;
  price: number;
  imageUrl: string;
  category: number;
  more: TMore[];
  id: string;
};

export type TInitialState = {
  data: TFoods[];
  favouriteData: TFoods[];
  isLoading: boolean;
  error: string;
  selectedItem: TFoods | {};
};