import { ordersFilterList } from "@/utils/app-data";
import s from "./OrdersFilter.module.scss";
import { useAppDispatch, useAppSelector } from "@/store/store";
import {
  selectOrderFilterId,
  setSelectedOrderFilterId,
} from "@/store/slices/orders/orders";
import { Button } from "../UI/Button/Button";

export const OrdersFilter = () => {
  const selectedOrderFilterId = useAppSelector(selectOrderFilterId);

  const dispatch = useAppDispatch();

  return (
    <div className={s.filter}>
      <div className="container">
        <div className={s.wrapper}>
          {ordersFilterList.map((item, i) => {
            return (
              <Button
                key={item}
                className={
                  selectedOrderFilterId === i ? "active white-btn" : "white-btn"
                }
                onClick={() => dispatch(setSelectedOrderFilterId(i))}
              >
                {item}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
