import { TFoods } from "@/store/slices/foods/types";
import { FOODS_URL_API } from "@/utils/constants";
import axios from "axios";

axios.defaults.baseURL = FOODS_URL_API;

export const getData = async () => {
  return axios.get<TFoods[]>(``);
};
