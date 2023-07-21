import { selectFilter } from "../../store/slices/filter/filter";
import { filterList } from "../../utils/app-data";
import s from "./FoodItems.module.scss";
import { useAppSelector } from "../../store/store";
import { Loading } from "../UI/Loading/Loading";
import { FoodItem } from "./FoodItem/FoodItem";
import { useQuery } from "react-query";
import { getData } from "@/store/api/api";

export const FoodItems = () => {
  const selectedFilterId = useAppSelector(selectFilter);
  const { isLoading, data, error } = useQuery("foods list", () => getData(), {
    select: ({ data }) => {
      if (selectedFilterId !== 0) {
        return data.filter((item) => item.category === selectedFilterId);
      }
      return data.map((item) => item);
    },
  });

  return (
    <div className="container">
      <h2 className={s.title}>{filterList[selectedFilterId]}</h2>
      <div className={s.items}>
        <Loading isLoading={isLoading}>
          {error || data?.map((food) => <FoodItem key={food.id} {...food} />)}
        </Loading>
      </div>
    </div>
  );
};
