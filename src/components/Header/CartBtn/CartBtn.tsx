import Link from "next/link";
import DeliveredIcon from "@/assets/images/icons/delivered.svg";
import s from "./CartBtn.module.scss";
import { useAppSelector } from "@/store/store";
import { selectIsLoggedIn } from "@/store/slices/registration/registration";

const CartBtn = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  return (
    isLoggedIn && (
      <Link href="/cart" className={`${s.cartBtn} white-btn`}>
        0 ₽<span></span>
        <DeliveredIcon />0
      </Link>
    )
  );
};

export default CartBtn;
