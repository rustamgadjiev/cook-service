import s from "./Content.module.scss";
import { selectFoodItem } from "@/store/slices/foods/foods";
import { useSelector } from "react-redux";
import { Dispatch, SetStateAction } from "react";
import dynamic from "next/dynamic";

const More = dynamic(() => import("./More/More"), {
  ssr: false,
});

type TProps = {
  setMores: Dispatch<SetStateAction<any>>;
};

export const Content = ({ setMores }: TProps) => {
  const selectedFoodItem = useSelector(selectFoodItem);

  return (
    <div className={`${s.content} ${s.container}`}>
      <h3 className={s.title}>{selectedFoodItem.title}</h3>
      <div className={s.info}>
        <span>{selectedFoodItem.weight}</span>
        <span>{selectedFoodItem.calories} ккал</span>
        <span className={s.price}>{selectedFoodItem.price}₽</span>
      </div>
      <p className={s.description}>{selectedFoodItem.description}</p>
      <More setMores={setMores} />
    </div>
  );
};
