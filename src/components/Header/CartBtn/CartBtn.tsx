import Link from "next/link";
import DeliveredIcon from "@/assets/images/icons/delivered.svg";
import s from "./CartBtn.module.scss";
import { useAppSelector } from "@/store/store";
import { selectIsLoggedIn } from "@/store/slices/registration/registration";
import {
  selectDeliveryPrice,
  selectTotalCount,
  selectTotalPrice,
} from "@/store/slices/cart/cart";

const CartBtn = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const totalPrice = useAppSelector(selectTotalPrice);
  const totalCount = useAppSelector(selectTotalCount);
  const deliveryPrice = useAppSelector(selectDeliveryPrice);

  return (
    isLoggedIn && (
      <Link href="/cart" className={`${s.cartBtn} white-btn`}>
        {totalPrice + deliveryPrice} ₽<span></span>
        <DeliveredIcon />
        {totalCount}
      </Link>
    )
  );
};

export default CartBtn;
