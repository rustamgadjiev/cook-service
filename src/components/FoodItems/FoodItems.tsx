import { selectFilter } from "../../store/slices/filter/filter";
import { filterList } from "../../utils/app-data";
import s from "./FoodItems.module.scss";
import { useAppSelector } from "../../store/store";
import { FoodItem } from "./FoodItem/FoodItem";
import { TFoods } from "@/store/slices/foods/types";
import { useEffect, useState } from "react";

export const FoodItems = ({data}: {data: TFoods[]}) => {
  const selectedFilterId = useAppSelector(selectFilter);

  const [filterData, setFilterData] = useState(data);

  useEffect(() => {
    if (selectedFilterId !== 0) {
      setFilterData(data.filter((item) => item.category === selectedFilterId));
    } else {
      setFilterData(data.map((item) => item))
    }
  }, [selectedFilterId])

  return (
    <div className="container">
      <h2 className={s.title}>{filterList[selectedFilterId]}</h2>
      <div className={s.items}>
        {filterData?.map((food) => <FoodItem key={food.id} {...food} />)}
      </div>
    </div>
  );
};
