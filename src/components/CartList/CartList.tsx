import s from "./CartList.module.scss";
import { Button } from "../UI/Button/Button";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { removeProducts, selectCartList } from "@/store/slices/cart/cart";
import { Items } from "./Items/Items";
import { EmptyCart } from "../EmptyCart/EmptyCart";
import Link from "next/link";

const CartList = () => {
  const cartList = useAppSelector(selectCartList);
  const dispatch = useAppDispatch();

  return (
    <div className={s.list}>
      {cartList.length ? (
        <>
          <Items />
          <div className={s.btns}>
            <Link href="/cart/place-order">
              <Button className={`white-btn ${s.btn}`}>
                Оформить доставку
              </Button>
            </Link>
            <Button
              className={`white-btn ${s.btn}`}
              onClick={() => dispatch(removeProducts())}
            >
              Очистить корзину
            </Button>
          </div>
        </>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default CartList;
