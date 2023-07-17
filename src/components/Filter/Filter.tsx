import { filterList } from "../../utils/app-data";
import s from "./Filter.module.scss";
import { FilterButton } from "./FilterButton/FilterButton";

export const Filter = () => {
  return (
    <div className={s.filter}>
      <div className="container">
        <div className={s.wrapper}>
          {filterList.map((item, i) => (
            <FilterButton key={item} item={item} i={i} active="active" />
          ))}
        </div>
      </div>
    </div>
  );
};
