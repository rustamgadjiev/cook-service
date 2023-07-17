import { Dispatch, SetStateAction, useState } from "react";
import s from "./MoreItem.module.scss";
import CheckedIcon from "@/assets/images/icons/completed.svg";

type TProps = {
  title: string;
  addPrice: number;
  id: number;
  price: number;
  setPrice: Dispatch<SetStateAction<number>>;
};

export const MoreItem = ({ title, addPrice, id, price, setPrice }: TProps) => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleInputCheck = () => {
    setChecked(!checked);

    setPrice(checked ? price - addPrice : price + addPrice);
  };

  return (
    <label className={s.item}>
      <p>{title}</p>
      <div className={s.radio}>
        <input
          id={`checkbox-${id}`}
          type="checkbox"
          checked={checked}
          onChange={handleInputCheck}
        />
        <label htmlFor={`checkbox-${id}`}>
          {addPrice}₽
          {checked && <CheckedIcon />}
        </label>
      </div>
    </label>
  );
};
