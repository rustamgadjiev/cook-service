import s from "./FoodItem.module.scss";
import foodImg from "../../assets/images/food.png";
import sharpImg from "../../assets/images/sharp.png";
import { ReactComponent as HeartIcon } from "../../assets/images/icons/heart.svg";
import { useState } from "react";

type Props = {
  className: "orange" | "blue" | "pink";
};

export const FoodItem = ({ className }: Props) => {
  const [foodCount, setFoodCount] = useState<number>(1);

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

  const imgStyle = {
    background:
      className === "orange"
        ? "#FE724B"
        : className === "blue"
        ? "#B3E0EB"
        : "#FCBEC8",
  };

  return (
    <div className={s.item}>
      <button className={s.heart}>
        <HeartIcon />
      </button>
      <img src={foodImg} style={imgStyle} alt="food" />
      <span className={s.sharp}>
        <img src={sharpImg} alt="sharp" />
      </span>
      <div className={s.content}>
        <h3 className={s.title}>Картофель с луком и белыми грибами</h3>
        <div className={s.info}>
          <span>320 г</span>
          <span>1 040 ккал</span>
          <span className={s.price}>430₽</span>
        </div>
        <p className={s.description}>
          Это вкусное и сытное блюдо является любимым блюдом во многих семьях,
          полюбите его и вы.
        </p>
        <div className={s.bottom}>
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
    </div>
  );
};
