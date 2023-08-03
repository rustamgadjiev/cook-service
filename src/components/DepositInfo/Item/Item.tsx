import { Button } from "@/components/UI/Button/Button";
import s from "./Item.module.scss";
import DepositIcon from "@/assets/images/icons/deposit.svg";
import { useAppDispatch } from "@/store/store";
import { addDeposit } from "@/store/slices/deposit/deposit";

type TProps = {
  bonus: number;
  percent: number;
  addDepositPrice: number;
};

export const Item = ({ bonus, percent, addDepositPrice }: TProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className={s.item}>
      <div className={s.content}>
        <div>
          <p>Мы добавим</p>
          <h3>{bonus}₽</h3>
          <p>Помните, к каждому поплнению мы добавляем от себя {percent}%</p>
        </div>
        <DepositIcon />
      </div>
      <Button
        className="black-btn"
        onClick={() => dispatch(addDeposit(addDepositPrice))}
      >
        Пополнить депозит
      </Button>
    </div>
  );
};
