import s from "./Inputs.module.scss";
import { Input } from "../../UI/Input/Input";
import InputMask from "react-input-mask";
import { Dispatch, SetStateAction } from "react";

type TProps = {
  nameValue: string;
  telValue: string;
  setNameValue: Dispatch<SetStateAction<string>>;
  setTelValue: Dispatch<SetStateAction<string>>;
};

export const Inputs = ({
  nameValue,
  telValue,
  setNameValue,
  setTelValue,
}: TProps) => {
  const handleNameValue = (e: { target: { value: SetStateAction<string> } }) =>
    setNameValue(e.target.value);

  const handleTelValue = (e: { target: { value: SetStateAction<string> } }) =>
    setTelValue(e.target.value);

  return (
    <div className={s.inputs}>
      <label>
        <span>Как вас зовут</span>
        <Input placeholder="Имя" value={nameValue} onChange={handleNameValue} />
      </label>
      <label>
        <span>Телефон</span>
        <InputMask
          mask="+7 (999) 999-99-99"
          placeholder="+7 (___) ___-__-__"
          type="tel"
          value={telValue}
          onChange={handleTelValue}
        />
      </label>
    </div>
  );
};
