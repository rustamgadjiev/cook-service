import ArrowIcon from "@/assets/images/icons/arrow.svg";
import { useRouter } from "next/router";
import s from "./confidential.module.scss";
import { confidentialInfo } from "@/utils/app-data";
import { TITLE } from "@/utils/constants";
import Head from "next/head";

export default function Confidential() {
  const navigate = useRouter();

  return (
    <>
      <Head>
        <title>{`${TITLE} | Политика конфиденциальности`}</title>
      </Head>
      <div className={s.confidential}>
        <div className="container">
          <h1 onClick={() => navigate.back()}>
            <ArrowIcon />
            Политика конфиденциальности
          </h1>
          {confidentialInfo.map((item) => (
            <div key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
