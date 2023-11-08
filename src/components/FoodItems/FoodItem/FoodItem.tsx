import s from "./FoodItem.module.scss";
import { useEffect, useState } from "react";
import { Modal } from "./Modal/Modal";
import { TFoods } from "../../../store/slices/foods/types";
import { Content } from "./Content/Content";
import { Portal } from "@/components/Portal";
import { useAppDispatch } from "@/store/store";
import { setSelectedItem } from "@/store/slices/foods/foods";

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

  const dispatch = useAppDispatch();

  const handleClickItem = () => {
    dispatch(setSelectedItem(item));
    setIsViewModal(true);
  };

  useEffect(() => {
    document.body.style.overflow = isViewModal ? "hidden" : "auto";
  }, [isViewModal]);

  return (
    <>
      {isViewModal && (
        <Portal>
          <Modal setIsViewModal={setIsViewModal} />
        </Portal>
      )}
      <div className={s.item}>
        <div className={s.img} onClick={handleClickItem}>
          <img
            width={292}
            height={292}
            src={imageUrl}
            alt="food"
            loading="lazy"
          />
        </div>
        <Content item={item} handleClickItem={handleClickItem} />
      </div>
    </>
  );
};
