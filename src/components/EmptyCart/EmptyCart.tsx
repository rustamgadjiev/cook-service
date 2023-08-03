import Image from "next/image";
import s from "./EmptyCart.module.scss";
import emptyCart from "@/assets/images/empty-cart.png";
import { Button } from "../UI/Button/Button";
import { useRouter } from "next/router";

export const EmptyCart = () => {
  const navigate = useRouter();

  return (
    <div className={s.cart}>
      <h2>Корзина пустая</h2>
      <Image src={emptyCart} alt="empty" />
      <Button className={`white-btn ${s.btn}`} onClick={() => navigate.back()}>
        Вернуться назад
      </Button>
    </div>
  );
};
