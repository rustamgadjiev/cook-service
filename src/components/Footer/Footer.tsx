import s from "./Footer.module.scss";
import Link from "next/link";
import { footerList } from "@/utils/app-data";

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className="container">
        <ul className={s.items}>
          {footerList.map((item) => (
            <li
              key={item.title}
              className={`${s.item} ${s[item.title.toLowerCase()]}`}
            >
              <Link href={item.link}>
                <item.icon />
                {item.title}
              </Link>
            </li>
          ))}
          <li className={s.item}>© 2022 COOOK service</li>
        </ul>
      </div>
    </footer>
  );
};
