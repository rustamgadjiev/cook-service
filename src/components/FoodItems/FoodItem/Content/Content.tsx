import { TFoods } from "@/store/slices/foods/types";
import s from "./Content.module.scss";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { selectIsLoggedIn } from "@/store/slices/registration/registration";
import { addProduct } from "@/store/slices/cart/cart";
import { useState } from "react";
import { useRouter } from "next/router";

type TProps = {
  item: TFoods;
  handleClickItem: () => void;
};

export const Content = ({ item, handleClickItem }: TProps) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const [isAdded, setIsAdded] = useState(false);
  const router = useRouter();

  const dispatch = useAppDispatch();

  const handleAddClick = () => {
    const newCartItem = {
      title: item.title,
      price: item.price,
      imageUrl: item.imageUrl,
      id: item.id,
      count: 1,
      mores: [],
    };

    dispatch(addProduct({ newCartItem }));
    setIsAdded(true);
  };

  return (
    <>
      <div className={s.content} onClick={handleClickItem}>
        <h3 className={s.title}>{item.title}</h3>
        <p className={s.description}>{item.description}</p>
      </div>
      <div className={s.bottom}>
        <span className={s.price}>{item.price}₽</span>
        {isLoggedIn && <button onClick={isAdded ? () => router.push('/cart') : handleAddClick}>{isAdded ? 'В корзину' : 'Добавить в корзину'}</button>}
      </div>
    </>
  );
};
