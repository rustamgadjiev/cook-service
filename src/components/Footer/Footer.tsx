import s from "./Footer.module.scss";
import WhatsAppIcon from "@/assets/images/icons/whatsapp.svg";
import FoodIcon from "@/assets/images/icons/food.svg";
import FileIcon from "@/assets/images/icons/file.svg";
import PhoneIcon from "@/assets/images/icons/phone.svg";
import MailIcon from "@/assets/images/icons/mail.svg";
import ScooterIcon from "@/assets/images/icons/scooter.svg";
import OrderIcon from "@/assets/images/icons/order.svg";
import AgreementIcon from "@/assets/images/icons/agreement.svg";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className="container">
        <ul className={s.items}>
          <li className={`${s.item} ${s.whatsapp}`}>
            <Link href="#">
              <WhatsAppIcon />
               WhatsApp
            </Link>
          </li>
          <li className={s.item}>
            <Link href="#">
              <FoodIcon />
               Меню для частных клиентов
            </Link>
          </li>
          <li className={s.item}>
            <Link href="/confidential">
              <FileIcon />
               Политика конфиденциальности
            </Link>
          </li>
          <li className={s.item}>
            <Link href="#">
              <PhoneIcon />
               +7 (945) 450-46-60
            </Link>
          </li>
          <li className={s.item}>
            <Link href="#">
              <OrderIcon />
               Меню для корпоративных заказов
            </Link>
          </li>
          <li className={s.item}>
            <Link href="/rules">
              <AgreementIcon />
               Пользовательское соглашение
            </Link>
          </li>
          <li className={s.item}>
            <Link href="#">
              <MailIcon />
               Написать на E-mail
            </Link>
          </li>
          <li className={s.item}>
            <Link href="#">
              <ScooterIcon />
               О доставке
            </Link>
          </li>
          <li className={s.item}>© 2022 COOOK service</li>
        </ul>
      </div>
    </footer>
  );
};
