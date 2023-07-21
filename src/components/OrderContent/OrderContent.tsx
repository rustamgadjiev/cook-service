import { useAppSelector } from "@/store/store";
import s from "./OrderContent.module.scss";
import { selectOrderList } from "@/store/slices/orders/orders";
import { Condition } from "./Condition/Condition";
import { Items } from "./Items/Items";
import { Buttons } from "./Buttons/Buttons";

type TProps = {
  id: number;
};

export const OrderContent = ({ id }: TProps) => {
  const orderItem = useAppSelector(selectOrderList).find(
    (item) => item.id === id
  );

  return (
    <div className={s.content}>
      <Condition condition={orderItem?.condition} date={orderItem?.date} />
      <Items foods={orderItem?.foods} />
      <div className={s.list}>
        <span>Когда</span>Как можно скорее
      </div>
      <div className={s.list}>
        <span>Куда</span>Пресненская набережная, 10с1, кв./офис 250, подъезд 1,
        этаж 25, домофон 250
      </div>
      <div className={s.list}>
        <span>Оплата</span>Картой курьеру
      </div>
      <Buttons condition={orderItem?.condition} />
    </div>
  );
};
