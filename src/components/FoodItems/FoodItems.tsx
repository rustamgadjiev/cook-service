import { filterList } from "../../utils/app-data";
import { FoodItem } from "../FoodItem/FoodItem";
import s from "./FoodItems.module.scss";

type Props = {
  selectedFilterId: number;
};

export const FoodItems = ({ selectedFilterId }: Props) => {
  return (
    <div>
      <div className="container">
        <h2 className={s.title}>{filterList[selectedFilterId]}</h2>
        <div className={s.items}>
          <FoodItem className="orange" />
          <FoodItem className="blue" />
          <FoodItem className="pink" />
          <FoodItem className="blue" />
          <FoodItem className="pink" />
          <FoodItem className="orange" />
        </div>
      </div>
    </div>
  );
};
