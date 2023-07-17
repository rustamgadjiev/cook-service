import s from "./FoodItem.module.scss";
import { useEffect, useState } from "react";
import { Modal } from "./Modal/Modal";
import { TFoods } from "../../../store/slices/foods/types";
import { Content } from "./Content/Content";
import { Portal } from "@/components/Portal";

export const FoodItem = ({
  title,
  description,
  weight,
  calories,
  price,
  imageUrl,
  more,
  category,
  id,
}: TFoods) => {
  const [isViewModal, setIsViewModal] = useState<boolean>(false);
  const item = {
    title,
    description,
    weight,
    calories,
    price,
    imageUrl,
    category,
    more,
    id,
  };

  useEffect(() => {
    document.body.style.overflow = isViewModal ? "hidden" : "auto";
  }, [isViewModal]);

  return (
    <div className={s.item}>
      {isViewModal && (
        <Portal>
          <Modal setIsViewModal={setIsViewModal} />
        </Portal>
      )}
      <div className={s.img}>
        <img width={292} height={292} src={imageUrl} alt="food" />
      </div>
      <Content item={item} setIsViewModal={setIsViewModal} />
    </div>
  );
};
