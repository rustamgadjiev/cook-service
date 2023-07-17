import { ordersFilterList } from "@/utils/app-data";
import s from "./OrdersFilter.module.scss";
import { useState } from "react";

export const OrdersFilter = () => {
  const [selectedOrderFilterId, setSelectedOrderFilterId] = useState<number>(0);

  return (
    <div className={s.filter}>
      <div className="container">
        <div className={s.wrapper}>
          {ordersFilterList.map((item, i) => {
            return (
              <button
                key={item}
                className={selectedOrderFilterId === i ? s.active : ""}
                onClick={() => setSelectedOrderFilterId(i)}
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
