import { useState } from "react";
import { filterList, orderTypesList } from "../../utils/app-data";
import s from "./Filter.module.scss";

type Props = {
  selectedFilterId: number;
  setSelectedFilterId: (selectedFilterId: number) => void;
}

export const Filter = ({ selectedFilterId, setSelectedFilterId }: Props) => {
  const [selectedOrderTypeId, setSelectedOrderTypeId] = useState<number>(0);

  return (
    <div>
      <div className="container">
        <div className={s.top}>
          {orderTypesList.map((item, i) => {
            return (
              <button
                key={item}
                className={selectedOrderTypeId === i ? s.active : ""}
                onClick={() => setSelectedOrderTypeId(i)}
              >
                {item}
              </button>
            );
          })}
        </div>
        <div className={s.filter}>
          {filterList.map((item, i) => {
            return (
              <button
                key={item}
                className={selectedFilterId === i ? s.active : ""}
                onClick={() => setSelectedFilterId(i)}
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
