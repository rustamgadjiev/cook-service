import React from "react";
import s from "./GetCode.module.scss";
import { GetCodeInput } from "./GetCodeInput/GetCodeInput";
import { Timer } from "./Timer/Timer";

type TProps = {
  setIsViewModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const GetCode = ({ setIsViewModal }: TProps) => {
  return (
    <div className={s.content}>
      <h2>Введите код из SMS</h2>
      <GetCodeInput setIsViewModal={setIsViewModal} />
      <Timer />
    </div>
  );
};
