import s from "./rules.module.scss";
import ArrowIcon from "@/assets/images/icons/arrow.svg";
import { rulesInfo } from "@/utils/app-data";
import { TITLE } from "@/utils/constants";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Rules() {
  const navigate = useRouter();

  return (
    <>
      <Head>
        <title>{`${TITLE} | Пользовательское соглашение`}</title>
      </Head>
      <div className={s.rules}>
        <div className="container">
          <h1 onClick={() => navigate.back()}>
            <ArrowIcon />
            Пользовательское соглашение
          </h1>
          {rulesInfo.map((item, i) => (
            <div key={i}>
              <h3>{item.title}</h3>
              <ul>
                {item.descriptions.map((description, i) => (
                  <li key={i}>{description}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
