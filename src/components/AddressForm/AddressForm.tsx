import { useAppDispatch, useAppSelector } from "@/store/store";
import s from "./AddressForm.module.scss";
import {
  addAddress,
  deleteAddress,
  editAddress,
  selectAddressList,
} from "@/store/slices/address/address";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Button } from "../UI/Button/Button";
import { Label } from "./Label/Label";

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

  const handleAddress = (
    e: { preventDefault: () => void },
    isEmpty: boolean
  ) => {
    e.preventDefault();

    if (isEmpty) {
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
    } else {
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
    }
    navigate.back();
  };

  return (
    <form className={s.form} onSubmit={(e) => handleAddress(e, isEmpty)}>
      <div>
        <Label
          value={titleValue}
          setValue={setTitleValue}
          title="Название адреса"
        />
      </div>
      <div>
        <Label value={cityValue} setValue={setCityValue} title="Город / Село" />
      </div>
      <div>
        <Label value={streetValue} setValue={setStreetValue} title="Улица" />
        <Label value={homeValue} setValue={setHomeValue} title="Дом" />
        <Label value={flatValue} setValue={setFlatValue} title="Квартира" />
      </div>
      <div className={s.coment}>
        <Label
          value={comentValue}
          setValue={setComentValue}
          title="Комментарий (если есть)"
        />
      </div>
      <div>
        <Button className="white-btn" type="submit">
          {isEmpty ? "Добавить" : "Сохранить"}
        </Button>
        {isEmpty || <span onClick={handleDeleteAddress}>Удалить адрес</span>}
      </div>
    </form>
  );
};
