import s from "./FoodItemModal.module.scss";
import { MoreItem } from "./MoreItem/MoreItem";
import { Dispatch, SetStateAction, useState } from "react";
import HeartIcon from "@/assets/images/icons/heart.svg";
import CloseIcon from "@/assets/images/icons/close.svg";
import {
  addItemFavouriteData,
  removeItemFavouriteData,
  selectFavouriteData,
  selectFoodItem,
} from "@/store/slices/foods/foods";
import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "@/store/store";
import Image from "next/image";

type TProps = {
  setIsViewModal: Dispatch<SetStateAction<boolean>>;
};

export const FoodItemModal = ({ setIsViewModal }: TProps) => {
  const selectedFoodItem = useSelector(selectFoodItem);
  const [foodCount, setFoodCount] = useState<number>(1);
  const [price, setPrice] = useState<number>(selectedFoodItem.price);
  const favouriteData = useAppSelector(selectFavouriteData);

  const dispatch = useAppDispatch();

  const incrementFoodCount = () => {
    if (foodCount < 99) {
      setFoodCount(foodCount + 1);
    }
  };

  const decrementFoodCount = () => {
    if (foodCount > 1) {
      setFoodCount(foodCount - 1);
    }
  };

  const handleHeartClick = () => {
    if (favouriteData.some((item) => item.id === selectedFoodItem.id)) {
      dispatch(removeItemFavouriteData(selectedFoodItem.id));
    } else {
      dispatch(
        addItemFavouriteData({
          ...selectedFoodItem,
        })
      );
    }
  };

  return (
    <>
      <div className="overlay" onClick={() => setIsViewModal(false)}></div>
      <div className={s.modal}>
        <header className={s.header}>
          <HeartIcon
            className={s.heart}
            style={{
              fill: favouriteData.some(
                (item) => item.id === selectedFoodItem.id
              )
                ? "crimson"
                : "#fff",
            }}
            onClick={handleHeartClick}
          />
          <CloseIcon
            className={s.close}
            onClick={() => setIsViewModal(false)}
          />
        </header>
        <div className={`${s.image} ${s.container}`}>
          <img src={selectedFoodItem.imageUrl} alt="" />
        </div>
        <div className={`${s.content} ${s.container}`}>
          <h3 className={s.title}>{selectedFoodItem.title}</h3>
          <div className={s.info}>
            <span>{selectedFoodItem.weight}</span>
            <span>{selectedFoodItem.calories} ккал</span>
            <span className={s.price}>{price}₽</span>
          </div>
          <p className={s.description}>{selectedFoodItem.description}</p>
          {selectedFoodItem.more.length === 0 || (
            <div className={s.more}>
              <h4>Дополнительно:</h4>
              {selectedFoodItem.more.map((item, i) => (
                <MoreItem
                  title={item.title}
                  addPrice={item.addPrice}
                  id={i}
                  price={price}
                  setPrice={setPrice}
                />
              ))}
            </div>
          )}
        </div>
        <div className={`${s.bottom} ${s.container}`}>
          <div className={s.count}>
            <button
              onClick={decrementFoodCount}
              className={foodCount === 1 ? s.disable : ""}
            >
              <span></span>
            </button>
            <span>{foodCount}</span>
            <button
              onClick={incrementFoodCount}
              className={foodCount === 99 ? s.disable : ""}
            >
              <span></span>
              <span></span>
            </button>
          </div>
          <button className={s.btn}>Добавить</button>
        </div>
      </div>
    </>
  );
};
