import s from "./Bottom.module.scss";
import { Button } from "@/components/UI/Button/Button";
import { Count } from "./Count/Count";
import { selectFoodItem } from "@/store/slices/foods/foods";
import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { addProduct } from "@/store/slices/cart/cart";
import { Dispatch, SetStateAction, useState } from "react";
import { selectIsLoggedIn } from "@/store/slices/registration/registration";

type TProps = {
  setIsViewModal: Dispatch<SetStateAction<boolean>>;
  mores: string[];
};

const Bottom = ({ setIsViewModal, mores }: TProps) => {
  const { title, price, imageUrl, id } = useSelector(selectFoodItem);
  const [foodCount, setFoodCount] = useState<number>(1);
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  const dispatch = useAppDispatch();

  const handleAddClick = () => {
    const newCartItem = {
      title,
      price,
      imageUrl,
      id,
      count: foodCount,
      mores,
    };

    dispatch(addProduct({ newCartItem }));
    setIsViewModal(false);
  };

  return (
    isLoggedIn && (
      <div className={`${s.bottom} ${s.container}`}>
        <Count
          foodCount={foodCount}
          setFoodCount={setFoodCount}
          price={price}
        />
        <Button className={s.btn} onClick={handleAddClick}>
          Добавить
        </Button>
      </div>
    )
  );
};

export default Bottom;