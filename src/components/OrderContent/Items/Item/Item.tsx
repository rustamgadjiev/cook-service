import s from "./Item.module.scss";

export const Item = ({
  title,
  price,
  imageUrl,
  id,
  count,
}: {
  title: string;
  price: number;
  imageUrl: string;
  id: string;
  count: number;
}) => {
  return (
    <div className={s.item}>
      <div>
        <img src={imageUrl} alt={title} />
        <h2>{title}</h2>
      </div>
      <span>{count}шт</span>
      <p>{price}₽</p>
    </div>
  );
};
