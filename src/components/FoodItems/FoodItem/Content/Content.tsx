import { setSelectedItem } from "@/store/slices/foods/foods";
import { TFoods } from "@/store/slices/foods/types";
import { useAppDispatch } from "@/store/store";
import s from "./Content.module.scss";
import { Dispatch, SetStateAction } from "react";

type TProps = {
  item: TFoods;
  setIsViewModal: Dispatch<SetStateAction<boolean>>;
};

export const Content = ({ item, setIsViewModal }: TProps) => {
  const dispatch = useAppDispatch();

  const handleClickItem = () => {
    dispatch(setSelectedItem(item));
    setIsViewModal(true);
  };

  return (
    <div className={s.content} onClick={handleClickItem}>
      <h3 className={s.title}>{item.title}</h3>
      <div className={s.info}>
        <span>{item.weight}</span>
        <span>{item.calories} ккал</span>
        <span className={s.price}>{item.price}₽</span>
      </div>
      <p className={s.description}>{item.description}</p>
    </div>
  );
};
