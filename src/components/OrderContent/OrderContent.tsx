import { useAppSelector } from "@/store/store";
import s from "./OrderContent.module.scss";
import { selectOrderList } from "@/store/slices/orders/orders";
import { Condition } from "./Condition/Condition";
import { Items } from "./Items/Items";
import { Buttons } from "./Buttons/Buttons";

type TProps = {
  id: number;
};

const OrderContent = ({ id }: TProps) => {
  const orderItem = useAppSelector(selectOrderList).find(
    (item) => item.id === id
  );

  return (
    <div className={s.content}>
      <Condition condition={orderItem?.condition} date={orderItem?.date} />
      <Items foods={orderItem?.foods} totalPrice={orderItem?.price} deliveryPrice={orderItem?.deliveryPrice} />
      <div className={s.list}>
        <span>Когда</span>{orderItem?.time}
      </div>
      <div className={s.list}>
        <span>Куда</span>{orderItem?.address}
      </div>
      <div className={s.list}>
        <span>Оплата</span>{orderItem?.payment}
      </div>
      <Buttons condition={orderItem?.condition} id={id} />
    </div>
  );
};

export default OrderContent;