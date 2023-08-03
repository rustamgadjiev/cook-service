import { useAppSelector } from "@/store/store";
import { OrderItem } from "./OrderItem/OrderItem";
import s from "./OrderItems.module.scss";
import { selectFilterOrderList } from "@/store/slices/orders/orders";

const OrderItems = () => {
  const orderList = useAppSelector(selectFilterOrderList);
  const sortList = [...orderList].sort((a, b) => b.id - a.id);

  return (
    <div className={s.items}>
      {sortList.map((orderItem) => (
        <OrderItem key={orderItem.id} {...orderItem} />
      ))}
    </div>
  );
};

export default OrderItems;
