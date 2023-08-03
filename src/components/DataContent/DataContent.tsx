import s from "./DataContent.module.scss";
import { Inputs } from "./Inputs/Inputs";
import { Buttons } from "./Buttons/Buttons";
import { useState } from "react";
import { useAppSelector } from "@/store/store";
import { selectUserData } from "@/store/slices/userData/userData";

export const DataContent = () => {
  const { name: currentName, phone: currentPhone } =
    useAppSelector(selectUserData);

  const [name, setName] = useState<string>(currentName || "");
  const [phone, setPhone] = useState<string>(currentPhone || "");

  return (
    <div className={s.content}>
      <Inputs name={name} setName={setName} phone={phone} setPhone={setPhone} />
      <Buttons name={name} phone={phone} />
    </div>
  );
};
