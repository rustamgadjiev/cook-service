import s from "./DepositInfo.module.scss";
import { Item } from "./Item/Item";

export const DepositInfo = () => {
  const addDepositPrice = 1930;
  const percent = 10;

  return (
    <div className={s.info}>
      <p>Можно пополнить еще на {addDepositPrice}₽</p>
      <div className={s.items}>
        <Item bonus={addDepositPrice * (percent / 100)} percent={percent} addDepositPrice={addDepositPrice} />
      </div>
    </div>
  );
};
