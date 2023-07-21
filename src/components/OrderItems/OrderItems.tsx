import { useAppSelector } from "@/store/store";
import { OrderItem } from "./OrderItem/OrderItem";
import s from "./OrderItems.module.scss";
import { selectFilterOrderList } from "@/store/slices/orders/orders";

export const OrderItems = () => {
  const orderList = useAppSelector(selectFilterOrderList);

  return (
    <div className={s.items}>
      {orderList.map((orderItem) => (
        <OrderItem key={orderItem.id} {...orderItem} />
      ))}
    </div>
  );
};
