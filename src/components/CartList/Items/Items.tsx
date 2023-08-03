import {
  selectCartList,
  selectDeliveryPrice,
  selectTotalPrice,
} from "@/store/slices/cart/cart";
import { useAppSelector } from "@/store/store";
import React from "react";
import { Item } from "./Item/Item";

export const Items = () => {
  const cartList = useAppSelector(selectCartList);
  const deliveryPrice = useAppSelector(selectDeliveryPrice);
  const totalPrice = useAppSelector(selectTotalPrice) + deliveryPrice;

  return (
    <>
      {cartList.map((cart: any) => (
        <Item key={cart.id} {...cart} />
      ))}
      <Item title="Доставка" price={deliveryPrice} />
      <Item title="Итого" price={totalPrice} />
    </>
  );
};
