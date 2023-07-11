import s from "./FoodItem.module.scss";
import HeartIcon from "../../../assets/images/icons/heart.svg";
import { useEffect, useState } from "react";
import { FoodItemModal } from "./FoodItemModal/FoodItemModal";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import {
  addItemFavouriteData,
  removeItemFavouriteData,
  selectFavouriteData,
  setSelectedItem,
} from "../../../store/slices/foods/foods";
import { TFoods } from "../../../store/slices/foods/types";
import Image from "next/image";

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
  const favouriteData = useAppSelector(selectFavouriteData);

  const dispatch = useAppDispatch();

  const handleClickItem = () => {
    dispatch(
      setSelectedItem({
        title,
        description,
        weight,
        calories,
        price,
        imageUrl,
        more,
        id,
      })
    );
    setIsViewModal(true);
  };

  const handleHeartClick = () => {
    if (favouriteData.some((item) => item.id === id)) {
      dispatch(removeItemFavouriteData(id));
    } else {
      dispatch(
        addItemFavouriteData({
          title,
          description,
          weight,
          calories,
          price,
          imageUrl,
          category,
          more,
          id,
        })
      );
    }
  };

  useEffect(() => {
    document.body.style.overflow = isViewModal ? "hidden" : "auto";
  }, [isViewModal]);

  return (
    <>
      {isViewModal && <FoodItemModal setIsViewModal={setIsViewModal} />}
      <div className={s.item}>
        <button className={s.heart} onClick={handleHeartClick}>
          <HeartIcon
            style={{
              fill: favouriteData.some((item) => item.id === id)
                ? "crimson"
                : "#fff",
            }}
          />
        </button>
        <div className={s.img}>
          <img width={292} height={292} src={imageUrl} alt="food" />
        </div>
        <div className={s.content} onClick={handleClickItem}>
          <h3 className={s.title}>{title}</h3>
          <div className={s.info}>
            <span>{weight}</span>
            <span>{calories} ккал</span>
            <span className={s.price}>{price}₽</span>
          </div>
          <p className={s.description}>{description}</p>
        </div>
      </div>
    </>
  );
};
