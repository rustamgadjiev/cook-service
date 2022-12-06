import s from "./Footer.module.scss";
import { ReactComponent as WhatsAppIcon } from "../../assets/images/icons/whatsapp.svg";
import { ReactComponent as FoodIcon } from "../../assets/images/icons/food.svg";
import { ReactComponent as FileIcon } from "../../assets/images/icons/file.svg";
import { ReactComponent as PhoneIcon } from "../../assets/images/icons/phone.svg";
import { ReactComponent as MailIcon } from "../../assets/images/icons/mail.svg";
import { ReactComponent as ScooterIcon } from "../../assets/images/icons/scooter.svg";
import { ReactComponent as OrderIcon } from "../../assets/images/icons/order.svg";
import { ReactComponent as AgreementIcon } from "../../assets/images/icons/agreement.svg";

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className="container">
        <ul className={s.items}>
          <li className={`${s.item} ${s.whatsapp}`}>
            <a href="#">
              <WhatsAppIcon /> WhatsApp
            </a>
          </li>
          <li className={s.item}>
            <a href="#">
              <FoodIcon /> Меню для частных клиентов
            </a>
          </li>
          <li className={s.item}>
            <a href="#">
              <FileIcon /> Политика конфиденциальности
            </a>
          </li>
          <li className={s.item}>
            <a href="#">
              <PhoneIcon /> +7 (945) 450-46-60
            </a>
          </li>
          <li className={s.item}>
            <a href="#">
              <OrderIcon /> Меню для корпоративных заказов
            </a>
          </li>
          <li className={s.item}>
            <a href="#">
              <AgreementIcon /> Пользовательское соглашение
            </a>
          </li>
          <li className={s.item}>
            <a href="#">
              <MailIcon /> Написать на E-mail
            </a>
          </li>
          <li className={s.item}>
            <a href="#">
              <ScooterIcon /> О доставке
            </a>
          </li>
          <li className={s.item}>© 2022 COOOK service</li>
        </ul>
      </div>
    </footer>
  );
};
