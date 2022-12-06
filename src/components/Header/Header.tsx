import s from "./Header.module.scss";
import { ReactComponent as LogoIcon } from "../../assets/images/icons/logo.svg";
import { ReactComponent as WhatsAppIcon } from "../../assets/images/icons/whatsapp.svg";
import { ReactComponent as UserIcon } from "../../assets/images/icons/user.svg";

export const Header = () => {
  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.inner}>
          <a href="/" className={s.logo}>
            <LogoIcon />
          </a>
          <div className={s.buttons}>
            <a href="#" className={s.whatsapp}>
              <WhatsAppIcon />
              WhatsApp
            </a>
            <a href="#" className={s.order}>
              Заказать 1 блюдо за 430₽
            </a>
            <a href="#" className={s.user}>
              <UserIcon />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
