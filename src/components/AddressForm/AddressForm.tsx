import { useAppDispatch, useAppSelector } from "@/store/store";
import s from "./AddressForm.module.scss";
import {
  addAddress,
  deleteAddress,
  editAddress,
  selectAddressList,
} from "@/store/slices/address/address";
import { Input } from "../UI/Input/Input";
import { SetStateAction, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Button } from "../UI/Button/Button";

type TProps = {
  id: number;
};

export const AddressForm = ({ id }: TProps) => {
  const address = useAppSelector(selectAddressList).find(
    (item) => item.id === id
  );
  const [isEmpty, setIsEmpty] = useState<boolean>(false);

  useEffect(() => {
    if (!address) {
      setIsEmpty(true);
    }
  }, []);

  const dispatch = useAppDispatch();
  const navigate = useRouter();

  const [titleValue, setTitleValue] = useState<string>(address?.title || "");
  const [cityValue, setCityValue] = useState<string>(address?.city || "");
  const [streetValue, setStreetValue] = useState<string>(address?.street || "");
  const [homeValue, setHomeValue] = useState<string>(address?.home || "");
  const [flatValue, setFlatValue] = useState<string>(address?.flatNumber || "");
  const [comentValue, setComentValue] = useState<string>(address?.coment || "");

  const handleDeleteAddress = () => {
    dispatch(deleteAddress(id));
    navigate.back();
  };

  const handleAddAddress = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    dispatch(
      addAddress({
        id,
        title: titleValue,
        city: cityValue,
        street: streetValue,
        home: homeValue,
        flatNumber: flatValue,
        coment: comentValue,
      })
    );
    navigate.back();
  };

  const handleSaveAddress = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    dispatch(
      editAddress({
        id,
        title: titleValue,
        city: cityValue,
        street: streetValue,
        home: homeValue,
        flatNumber: flatValue,
        coment: comentValue,
      })
    );
    navigate.back();
  };

  return (
    <form
      className={s.form}
      onSubmit={isEmpty ? handleAddAddress : handleSaveAddress}
    >
      <div>
        <label>
          <span>Название адреса</span>
          <Input
            placeholder="Название"
            type="text"
            value={titleValue}
            onChange={(e: { target: { value: SetStateAction<string> } }) =>
              setTitleValue(e.target.value)
            }
          />
        </label>
      </div>
      <div>
        <label>
          <span>Город / Село</span>
          <Input
            placeholder="Город"
            type="text"
            value={cityValue}
            onChange={(e: { target: { value: SetStateAction<string> } }) =>
              setCityValue(e.target.value)
            }
          />
        </label>
      </div>
      <div>
        <label>
          <span>Улица</span>
          <Input
            placeholder="Улица"
            type="text"
            value={streetValue}
            onChange={(e: { target: { value: SetStateAction<string> } }) =>
              setStreetValue(e.target.value)
            }
          />
        </label>
        <label>
          <span>Дом</span>
          <Input
            placeholder="Дом"
            type="text"
            value={homeValue}
            onChange={(e: { target: { value: SetStateAction<string> } }) =>
              setHomeValue(e.target.value)
            }
          />
        </label>
        <label>
          <span>Квартира</span>
          <Input
            placeholder="Квартира"
            type="text"
            value={flatValue}
            onChange={(e: { target: { value: SetStateAction<string> } }) =>
              setFlatValue(e.target.value)
            }
          />
        </label>
      </div>
      <div className={s.coment}>
        <label>
          <span>Комментарий (если есть)</span>
          <textarea
            placeholder="Коментарий"
            type="text"
            value={comentValue}
            onChange={(e: { target: { value: SetStateAction<string> } }) =>
              setComentValue(e.target.value)
            }
          />
        </label>
      </div>
      <div>
        <Button className="white-btn" type="submit">
          {isEmpty ? "Добавить" : "Сохранить"}
        </Button>
        {isEmpty ? (
          ""
        ) : (
          <span onClick={handleDeleteAddress}>Удалить адрес</span>
        )}
      </div>
    </form>
  );
};
