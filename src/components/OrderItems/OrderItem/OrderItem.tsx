import s from "./OrderItem.module.scss";

type TProps = {
  condition: number;
};

export const OrderItem = ({ condition }: TProps) => {
  const conditionStyle = {
    background:
      condition === 2 ? "#FED149" : condition === 0 ? "#EE7722" : "#96C86E",
  };

  return (
    <div className={s.item}>
      <div>
        <h4>8 апреля 2054</h4>
        <p>№298456548 на 4 250₽</p>
      </div>
      <div>
        {condition === 2
          ? "Текущий"
          : condition === 0
          ? "Отменен"
          : "Доставлен"}
        <span style={conditionStyle}></span>
      </div>
    </div>
  );
};
