import { selectTotalPrice } from "@/store/slices/cart/cart";
import s from "./Item.module.scss";
import { Item } from "./Item/Item";
import { useAppSelector } from "@/store/store";

type TProps = {
  foods:
    | {
        title: string;
        price: number;
        imageUrl: string;
        id: string;
        count: number;
      }[]
    | undefined;
  totalPrice?: number;
  deliveryPrice?: number;
};

export const Items = ({ foods, totalPrice, deliveryPrice }: TProps) => {
  return (
    <div className={s.items}>
      {foods?.map((food) => (
        <Item key={food.id} {...food} />
      ))}
      <div className={s.delivery}>
        <span>Доставка</span>
        <span>{deliveryPrice}₽</span>
      </div>
      <div className={s.totalPrice}>
        <span>Итого</span>
        <span>{totalPrice}₽</span>
      </div>
    </div>
  );
};
