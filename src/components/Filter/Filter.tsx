import { filterList } from "../../utils/app-data";
import s from "./Filter.module.scss";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/store/store";
import {
  selectFilter,
  setSelectedFilterId,
} from "@/store/slices/filter/filter";
import { selectIsLoggedIn } from "@/store/slices/registration/registration";

export const Filter = () => {
  const selectedFilterId = useAppSelector(selectFilter);
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  const dispatch = useDispatch();

  const handleButtonClick = (i: number) => {
    if (!isLoggedIn && i === 1) {
      alert("С начала зарегистрируйтесь на сайте");
    } else {
      dispatch(setSelectedFilterId(i));
    }
  };

  return (
    <div className={s.filter}>
      <div className="container">
        <div className={s.wrapper}>
          {filterList.map((item, i) => {
            return !isLoggedIn && i === 1 ? (
              ""
            ) : (
              <button
                key={item}
                className={selectedFilterId === i ? s.active : ""}
                onClick={() => handleButtonClick(i)}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
