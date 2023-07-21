import s from "./DataContent.module.scss";
import { Inputs } from "./Inputs/Inputs";
import { Buttons } from "./Buttons/Buttons";
import { useState } from "react";
import { useAppSelector } from "@/store/store";
import { selectUserData } from "@/store/slices/userData/userData";

export const DataContent = () => {
  const { name, tel } = useAppSelector(selectUserData);

  const [nameValue, setNameValue] = useState<string>(name || "");
  const [telValue, setTelValue] = useState<string>(tel || "");

  return (
    <div className={s.content}>
      <Inputs
        nameValue={nameValue}
        setNameValue={setNameValue}
        telValue={telValue}
        setTelValue={setTelValue}
      />
      <Buttons nameValue={nameValue} telValue={telValue} />
    </div>
  );
};
