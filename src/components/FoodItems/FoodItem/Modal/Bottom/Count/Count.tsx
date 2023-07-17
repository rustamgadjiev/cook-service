import React, { useState } from "react";
import s from "./Count.module.scss";
import { Button } from "@/components/UI/Button/Button";

export const Count = () => {
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

  return (
    <div className={s.count}>
      <Button
        onClick={decrementFoodCount}
        className={foodCount === 1 ? s.disable : ""}
      >
        <span></span>
      </Button>
      <span>{foodCount}</span>
      <Button
        onClick={incrementFoodCount}
        className={foodCount === 99 ? s.disable : ""}
      >
        <span></span>
        <span></span>
      </Button>
    </div>
  );
};
