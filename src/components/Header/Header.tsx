import s from "./Header.module.scss";
import LogoIcon from "@/assets/images/icons/logo.svg";
import WhatsAppIcon from "@/assets/images/icons/whatsapp.svg";
import UserIcon from "@/assets/images/icons/user.svg";
import { useEffect, useState } from "react";
import { RegistrationModal } from "./RegistrationModal/RegistrationModal";
import { UserMenu } from "./UserMenu/UserMenu";
import Link from "next/link";
import { useAppSelector } from "@/store/store";
import { selectIsLoggedIn } from "@/store/slices/registration/registration";

export const Header = () => {
  const [isViewModal, setIsViewModal] = useState<boolean>(false);
  const [isViewUserMenu, setIsViewUserMenu] = useState<boolean>(false);
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  const onClockLogIn = () => {
    if (isLoggedIn) {
      setIsViewUserMenu(!isViewUserMenu);
    } else {
      setIsViewModal(true);
    }
  };

  useEffect(() => {
    document.body.style.overflow = isViewModal ? "hidden" : "auto";
  }, [isViewModal]);

  return (
    <>
      <header className={s.header}>
        <div className="container">
          <div className={s.inner}>
            <Link href="/" className={s.logo}>
              <LogoIcon />
            </Link>
            <div className={s.buttons}>
              <a href="#" className={s.whatsapp}>
                <WhatsAppIcon />
                WhatsApp
              </a>
              <a href="#" className={s.order}>
                Заказать 1 блюдо за 430₽
              </a>
              <button onClick={onClockLogIn} className={s.user}>
                <UserIcon />
              </button>
            </div>
            {isViewUserMenu && (
              <UserMenu setIsViewUserMenu={setIsViewUserMenu} />
            )}
          </div>
        </div>
        {isViewModal && <RegistrationModal setIsViewModal={setIsViewModal} />}
      </header>
    </>
  );
};
