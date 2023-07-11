import React from "react";
import s from "./Registration.module.scss";
import { RegistrationInput } from "./RegistrationInput/RegistrationInput";
import { NextBtn } from "./NextBtn/NextBtn";
import Link from "next/link";

type TProps = {
  setIsViewModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Registration = ({ setIsViewModal }: TProps) => {
  return (
    <div className={s.content}>
      <h2>Ваш телефон</h2>
      <div>
        <RegistrationInput />
        <p>Мы сохраним ваш номер телефона в тайне</p>
        <NextBtn />
      </div>
      <footer className={s.footer}>
        Вводя номер телефона, вы автоматически принимаете условия{" "}
        <Link onClick={() => setIsViewModal(false)} href="/rules">
          Пользовательского соглашения
        </Link>{" "}
        и соглашаетесь с нашей{" "}
        <Link onClick={() => setIsViewModal(false)} href="/confidential">
          Политикой конфиденциальности
        </Link>
      </footer>
    </div>
  );
};
