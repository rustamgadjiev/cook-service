import ArrowIcon from "@/assets/images/icons/arrow.svg";
import { useRouter } from "next/router";
import s from "./confidential.module.scss";
import { confidentialInfo } from "@/utils/app-data";

export default function Confidential() {
  const navigate = useRouter();

  return (
    <div className={s.confidential}>
      <div className="container">
        <h1 onClick={() => navigate.back()}>
          <ArrowIcon />
          Политика конфиденциальности
        </h1>
        {confidentialInfo.map((item) => (
          <>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </>
        ))}
      </div>
    </div>
  );
}
