import s from "./Inputs.module.scss";
import { Input } from "../../UI/Input/Input";
import InputMask from "react-input-mask";
import { Dispatch, SetStateAction } from "react";

type TProps = {
  name: string;
  phone: string;
  setName: Dispatch<SetStateAction<string>>;
  setPhone: Dispatch<SetStateAction<string>>;
};

export const Inputs = ({ name, phone, setName, setPhone }: TProps) => {
  const handleNameValue = (e: { target: { value: SetStateAction<string> } }) =>
    setName(e.target.value);

  const handleTelValue = (e: { target: { value: SetStateAction<string> } }) =>
    setPhone(e.target.value);

  return (
    <div className={s.inputs}>
      <label>
        <span>Как вас зовут</span>
        <Input placeholder="Имя" value={name} onChange={handleNameValue} />
      </label>
      <label>
        <span>Телефон</span>
        <InputMask
          mask="+7 (999) 999-99-99"
          placeholder="+7 (___) ___-__-__"
          type="tel"
          value={phone}
          onChange={handleTelValue}
        />
      </label>
    </div>
  );
};
