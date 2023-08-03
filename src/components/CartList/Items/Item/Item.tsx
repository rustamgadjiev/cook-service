import { useAppSelector } from "@/store/store";
import { Count } from "./Count/Count";
import s from "./Item.module.scss";

type TProps = {
  imageUrl: string;
  title: string;
  price: number;
  count: number;
  id: string;
  mores: string[];
};

export const Item = ({ imageUrl, title, price, count, id, mores }: TProps) => {
  return (
    <div className={s.item}>
      <div>
        {imageUrl && <img src={imageUrl} alt={title} />}
        <div className={s.title}>
          <h3>{title}</h3>
          <p>{mores.length > 0 && mores.join(", ")}</p>
        </div>
      </div>
      <div>
        {!isNaN(count) && <Count count={count} id={id} mores={mores} />}
        <p>{price ? `${price}₽` : "Бесплатно"}</p>
      </div>
    </div>
  );
};

Item.defaultProps = {
  imageUrl: "",
  count: NaN,
  id: NaN,
  mores: [],
};
