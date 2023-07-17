import { userMenuList } from "../../../utils/app-data";
import OrderIcon from "@/assets/images/icons/my-orders.svg";
import DepositIcon from "@/assets/images/icons/deposit.svg";
import CardsIcon from "@/assets/images/icons/my-cards.svg";
import AddressIcon from "@/assets/images/icons/address.svg";
import DataIcon from "@/assets/images/icons/my-data.svg";
import ExitIcon from "@/assets/images/icons/exit.svg";
import CloseIcon from "@/assets/images/icons/close.svg";
import s from "./UserMenu.module.scss";
import { Dispatch, SetStateAction } from "react";
import { useAppDispatch } from "../../../store/store";
import { removeFavouriteData } from "../../../store/slices/foods/foods";
import Link from "next/link";
import { setLoggedIn } from "@/store/slices/registration/registration";

type TProps = {
  setIsViewUserMenu: Dispatch<SetStateAction<boolean>>;
};

export const UserMenu = ({ setIsViewUserMenu }: TProps) => {
  const dispatch = useAppDispatch();

  const handleMenuClick = (i: number) => {
    if (i === 5) {
      dispatch(setLoggedIn(false));
      dispatch(removeFavouriteData());
    }

    setIsViewUserMenu(false);
  };

  return (
    <div className={s.menu}>
      <CloseIcon className={s.close} onClick={() => setIsViewUserMenu(false)} />
      <ul>
        {userMenuList.map((item, i) => (
          <li key={item.title}>
            <Link href={item.link} onClick={() => handleMenuClick(i)}>
              {i === 0 ? (
                <OrderIcon />
              ) : i === 1 ? (
                <DepositIcon />
              ) : i === 2 ? (
                <CardsIcon />
              ) : i === 3 ? (
                <AddressIcon />
              ) : i === 4 ? (
                <DataIcon />
              ) : (
                <ExitIcon />
              )}
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <Link href="#" className={s.btn}>
        Обратиться в WhatsApp
      </Link>
    </div>
  );
};
