import { Button } from "@/components/UI/Button/Button";
import {
  selectAddressId,
  selectAddressList,
} from "@/store/slices/address/address";
import { selectCardList } from "@/store/slices/cards/cards";
import {
  removeProducts,
  selectCartList,
  selectDeliveryPrice,
  selectTotalPrice,
} from "@/store/slices/cart/cart";
import {
  addOrder,
  selectOrderList,
  selectPaymentId,
  selectTimeId,
} from "@/store/slices/orders/orders";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { months, paymentList } from "@/utils/app-data";
import { useRouter } from "next/router";
import React from "react";

export const FormButton = () => {
  const orderList = useAppSelector(selectOrderList);
  const cartList = useAppSelector(selectCartList);
  const deliveryPrice = useAppSelector(selectDeliveryPrice);
  const totalPrice = useAppSelector(selectTotalPrice) + deliveryPrice;

  const addressId = useAppSelector(selectAddressId);
  const addressItem = useAppSelector(selectAddressList).find(
    (address) => address.id === addressId
  );

  const cardList = useAppSelector(selectCardList);
  const paymentId = useAppSelector(selectPaymentId);

  const payment = cardList.some((card) => card.number === paymentId)
    ? `Картой - **** ${cardList
        .find((card) => card.number === paymentId)
        ?.number.slice(-4)}`
    : paymentList.find((payment) => payment.title === paymentId)?.title;

  const timeId = useAppSelector(selectTimeId);

  const date = new Date();
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const currentDate = `${day} ${month} ${year}`;

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const currentTime = `${hours}:${minutes}:${seconds}`;

  const dispatch = useAppDispatch();
  const navigate = useRouter();

  const handleClick = () => {
    navigate.push(`/orders/${orderList.length}`);
    dispatch(
      addOrder({
        id: orderList.length,
        date: `${currentDate} ${currentTime}`,
        price: totalPrice,
        deliveryPrice,
        condition: 1,
        address: `${addressItem?.city} улица ${addressItem?.street} дом ${
          addressItem?.home
        } ${addressItem?.flatNumber ? `кв ${addressItem?.flatNumber}` : ""}`,
        payment: payment,
        time: timeId,
        foods: [...cartList],
      })
    );
    dispatch(removeProducts());
  };

  return (
    <Button className="white-btn" onClick={handleClick}>
      Заказать
    </Button>
  );
};
