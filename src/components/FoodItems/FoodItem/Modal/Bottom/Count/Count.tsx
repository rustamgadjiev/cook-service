import React, { Dispatch, SetStateAction, useState } from "react";
import s from "./Count.module.scss";
import { Button } from "@/components/UI/Button/Button";
import { useAppDispatch } from "@/store/store";
import { setSelectedItem } from "@/store/slices/foods/foods";

type TProps = {
  foodCount: number;
  setFoodCount: Dispatch<SetStateAction<number>>;
  price: number;
};

export const Count = ({ foodCount, setFoodCount, price }: TProps) => {
  const initialPrice = price / foodCount;

  const dispatch = useAppDispatch();

  const incrementFoodCount = () => {
    if (foodCount < 99) {
      setFoodCount(foodCount + 1);
      dispatch(setSelectedItem({ price: price + initialPrice }));
    }
  };

  const decrementFoodCount = () => {
    if (foodCount > 1) {
      setFoodCount(foodCount - 1);
      dispatch(setSelectedItem({ price: price - initialPrice }));
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
