import { Dispatch, SetStateAction, useEffect, useState } from "react";
import s from "./Item.module.scss";
import CheckedIcon from "@/assets/images/icons/completed.svg";
import { useAppDispatch } from "@/store/store";
import { setSelectedItem } from "@/store/slices/foods/foods";

type TProps = {
  title: string;
  addPrice: number;
  id: number;
  price: number;
  setMores: Dispatch<SetStateAction<any>>;
};

export const Item = ({ title, addPrice, id, price, setMores }: TProps) => {
  const [checked, setChecked] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const handleInputCheck = () => {
    setChecked(!checked);

    dispatch(
      setSelectedItem({ price: checked ? price - addPrice : price + addPrice })
    );
  };

  useEffect(() => {
    if (checked) {
      setMores((mores: string[]) => [...mores, title]);
    } else {
      setMores((mores: string[]) =>
        mores.filter((more: string) => more !== title)
      );
    }
  }, [checked]);

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
          {addPrice}₽{checked && <CheckedIcon />}
        </label>
      </div>
    </label>
  );
};
