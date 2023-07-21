import s from "./DepositInfo.module.scss";
import { Item } from "./Item/Item";

export const DepositInfo = () => {
  return (
    <div className={s.info}>
      <p>Можно пополнить еще на 1 930₽</p>
      <div className={s.items}>
        <Item />
      </div>
    </div>
  );
};
