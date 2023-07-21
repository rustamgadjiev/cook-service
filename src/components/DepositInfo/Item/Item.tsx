import { Button } from "@/components/UI/Button/Button";
import s from "./Item.module.scss";
import DepositIcon from "@/assets/images/icons/deposit.svg";

export const Item = () => {
  return (
    <div className={s.item}>
      <div className={s.content}>
        <div>
          <p>Мы добавим</p>
          <h3>193₽</h3>
          <p>Помните, к каждому поплнению мы добавляем от себя 10%</p>
        </div>
        <DepositIcon />
      </div>
      <Button className="black-btn">Пополнить депозит</Button>
    </div>
  );
};
