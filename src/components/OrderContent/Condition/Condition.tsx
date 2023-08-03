import { conditionList } from "@/utils/app-data";
import s from "./Condition.module.scss";
import { useEffect } from "react";
import { useAppDispatch } from "@/store/store";
import { editCondition } from "@/store/slices/orders/orders";

type TProps = {
  condition?: number;
  date?: string;
};

export const Condition = ({ condition, date }: TProps) => {
  return (
    <div className={s.condition}>
      {condition !== 1 ? (
        <>
          <h2>{condition === 2 ? "доставлен" : "отменен"}</h2>
          <p>{date}</p>
        </>
      ) : (
        <div>
          {conditionList.map((item) => (
            <span key={item.id} className={item.id === 1 ? s.active : ""}>
              <item.icon />
              <p>{item.title}</p>
            </span>
          ))}
          <span></span>
        </div>
      )}
    </div>
  );
};
