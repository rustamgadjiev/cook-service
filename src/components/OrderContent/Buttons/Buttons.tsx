import { Button } from "@/components/UI/Button/Button";
import s from "./Buttons.module.scss";
import { useAppDispatch, useAppSelector } from "@/store/store";
import {
  addOrder,
  editCondition,
  selectOrderList,
} from "@/store/slices/orders/orders";
import { useRouter } from "next/router";
import { months } from "@/utils/app-data";

type TProps = {
  condition?: number;
  id: number;
};

export const Buttons = ({ condition, id }: TProps) => {
  const dispatch = useAppDispatch();
  const orderList = useAppSelector(selectOrderList);

  const findItem = orderList.find((item) => item.id === id);
  const navigate = useRouter();

  const date = new Date();
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const currentDate = `${day} ${month} ${year}`;

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const currentTime = `${hours}:${minutes}:${seconds}`;

  const handleClick = () => {
    if (condition === 1) {
      dispatch(editCondition({ id, condition: 3 }));
    } else {
      dispatch(
        addOrder({
          ...findItem,
          id: orderList.length,
          condition: 1,
          date: `${currentDate} ${currentTime}`,
        })
      );
      navigate.push(`/orders/${orderList.length}`);
    }
  };

  return (
    <div className={s.buttons}>
      <Button className="whatsapp-btn">Управлять в WhatsApp</Button>
      <Button className="white-btn" onClick={handleClick}>
        {condition === 1 ? "Отменить заказ" : "Повторить заказ"}
      </Button>
    </div>
  );
};
