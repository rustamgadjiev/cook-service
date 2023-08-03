import s from "./Item.module.scss";

export const Item = ({
  title,
  price,
  imageUrl,
  id,
  count,
  mores,
}: {
  title: string;
  price: number;
  imageUrl: string;
  id: string;
  count: number;
  mores: any;
}) => {
  return (
    <div className={s.item}>
      <div>
        <img src={imageUrl} alt={title} />
        <div className={s.title}>
          <h2>{title}</h2>
          {mores.length > 0 && <p>{mores.join(", ")}</p>}
        </div>
      </div>
      <span>{count}шт</span>
      <p>{price}₽</p>
    </div>
  );
};
