import { useAppDispatch, useAppSelector } from "@/store/store";
import s from "./CardForm.module.scss";
import InputMask from "react-input-mask";
import {
  addCard,
  deleteCard,
  selectCardList,
} from "@/store/slices/cards/cards";
import { Input } from "../UI/Input/Input";
import { Button } from "../UI/Button/Button";
import { useRouter } from "next/router";
import { SetStateAction, useEffect, useState } from "react";

type TProps = {
  id: number;
};

export const CardForm = ({ id }: TProps) => {
  const card = useAppSelector(selectCardList).find((item) => item.id === id);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [numberValue, setNumberValue] = useState<string>("");
  const [dateValue, setDateValue] = useState<string>("");
  const [nameValue, setNameValue] = useState<string>("");
  const [cvvValue, setCvvValue] = useState<string>("");

  useEffect(() => {
    if (!card) {
      setIsDisabled(false);
    }
  }, []);

  const dispatch = useAppDispatch();
  const navigate = useRouter();

  const handleDeleteCard = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (isDisabled) {
      dispatch(deleteCard(id));
    } else {
      dispatch(
        addCard({
          id,
          number: numberValue,
          date: dateValue,
          name: nameValue,
          cvv: cvvValue,
        })
      );
    }
    navigate.back();
  };

  return (
    <form className={s.form} onSubmit={handleDeleteCard}>
      <div>
        <label>
          <span>Номер карты</span>
          <InputMask
            mask="9999 9999 9999 9999"
            placeholder="---- ---- ---- ----"
            type="text"
            value={isDisabled ? card?.number : numberValue}
            onChange={(e) => setNumberValue(e.target.value)}
            disabled={isDisabled}
          />
        </label>
        <label>
          <span>Действительна до</span>
          <InputMask
            mask="99 / 99"
            placeholder="-- / --"
            type="text"
            value={isDisabled ? card?.date : dateValue}
            onChange={(e) => setDateValue(e.target.value)}
            disabled={isDisabled}
          />
        </label>
      </div>
      <div>
        <label>
          <span>Имя держателя карты</span>
          <Input
            placeholder="Имя"
            value={isDisabled ? card?.name : nameValue}
            onChange={(e: { target: { value: SetStateAction<string> } }) =>
              setNameValue(e.target.value)
            }
            disabled={isDisabled}
          />
        </label>
        <label>
          <span>CVC2/CVV2о</span>
          <Input
            placeholder="CVV"
            type="password"
            value={isDisabled ? card?.cvv : cvvValue}
            onChange={(e: { target: { value: SetStateAction<string> } }) =>
              setCvvValue(e.target.value)
            }
            disabled={isDisabled}
            maxLength={3}
          />
        </label>
      </div>
      <Button className="white-btn" type="submit">
        {isDisabled ? "Удалить карту" : "Добавить карту"}
      </Button>
    </form>
  );
};
