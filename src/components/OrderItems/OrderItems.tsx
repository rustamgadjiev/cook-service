import { OrderItem } from "./OrderItem/OrderItem";
import s from "./OrderItems.module.scss";

export const OrderItems = () => {
  return (
    <div className={s.items}>
      <OrderItem condition={2} />
      <OrderItem condition={0} />
      <OrderItem condition={1} />
    </div>
  );
};
