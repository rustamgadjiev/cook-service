import { selectFilter } from "../../store/slices/filter/filter";
import { filterList } from "../../utils/app-data";
import { FoodItem } from "./FoodItem/FoodItem";
import s from "./FoodItems.module.scss";
import { useEffect } from "react";
import {
  getData,
  selectFavouriteData,
  selectFoodsState,
} from "../../store/slices/foods/foods";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { Preloader } from "./Preloader/Preloader";

export const FoodItems = () => {
  const selectedFilterId = useAppSelector(selectFilter);
  const { data, isLoading, error } = useAppSelector(selectFoodsState);
  const favouriteData = useAppSelector(selectFavouriteData);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getData({ selectedFilterId }));
  }, [dispatch, selectedFilterId]);

  return (
    <div>
      <div className="container">
        <h2 className={s.title}>{filterList[selectedFilterId]}</h2>
        <div className={s.items}>
          <Preloader isLoading={isLoading}>
            {selectedFilterId === 1
              ? favouriteData.map((item) => (
                  <FoodItem key={item.id} {...item} />
                ))
              : error ||
                data.map((item) => <FoodItem key={item.id} {...item} />)}
          </Preloader>
        </div>
      </div>
    </div>
  );
};
