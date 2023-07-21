import s from "./OrderItem.module.scss";
import OnGoingIcon from "@/assets/images/icons/ongoing.svg";
import CancelIcon from "@/assets/images/icons/cancel.svg";
import DeliveredIcon from "@/assets/images/icons/delivered.svg";
import Link from "next/link";

type TProps = {
  condition: number;
  id: number;
  date: string;
  price: number;
};

export const OrderItem = ({ condition, date, price, id }: TProps) => {
  const conditionStyle = {
    background:
      condition === 1 ? "#FED149" : condition === 3 ? "#EE7722" : "#96C86E",
  };

  return (
    <Link href={`/orders/${id}`} className={s.item}>
      <div>
        <h4>{date}</h4>
        <p>
          №{id} на {price}₽
        </p>
      </div>
      <div>
        {condition === 1
          ? "Текущий"
          : condition === 3
          ? "Отменен"
          : "Доставлен"}
        {
          <span style={conditionStyle}>
            {condition === 1 ? (
              <OnGoingIcon />
            ) : condition === 3 ? (
              <CancelIcon />
            ) : (
              <DeliveredIcon />
            )}
          </span>
        }
      </div>
    </Link>
  );
};
