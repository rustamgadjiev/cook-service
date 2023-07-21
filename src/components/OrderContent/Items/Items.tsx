import { useAppSelector } from "@/store/store";
import s from "./Item.module.scss";
import { Item } from "./Item/Item";
import { selectTotalPrice } from "@/store/slices/orders/orders";

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
};

export const Items = ({ foods }: TProps) => {
  // const totalPrice = useAppSelector(selectTotalPrice);
  const totalPrice = foods?.reduce((a, b) => a + b.price, 0);

  return (
    <div className={s.items}>
      {foods?.map((food) => (
        <Item key={food.id} {...food} />
      ))}
      <div className={s.delivery}>
        <span>Доставка</span>
        <span>{Math.round(totalPrice / 5)}₽</span>
      </div>
      <div className={s.totalPrice}>
        <span>Итого</span>
        <span>{totalPrice}₽</span>
      </div>
    </div>
  );
};
