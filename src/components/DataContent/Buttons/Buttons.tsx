import { Button } from "@/components/UI/Button/Button";
import s from "./Buttons.module.scss";
import { useAppDispatch } from "@/store/store";
import { deleteAccount, editData } from "@/store/slices/userData/userData";
import { useRouter } from "next/router";
import { setLoggedIn } from "@/store/slices/registration/registration";
import { deleteCards } from "@/store/slices/cards/cards";
import { deleteOrders } from "@/store/slices/orders/orders";
import { deleteAdresses } from "@/store/slices/address/address";

type TProps = {
  name: string;
  phone: string;
};

export const Buttons = ({ name, phone }: TProps) => {
  const dispatch = useAppDispatch();
  const navigate = useRouter();

  const handleDeleteAccount = () => {
    dispatch(deleteAccount());
    dispatch(deleteCards());
    dispatch(deleteOrders());
    dispatch(deleteAdresses());
    dispatch(setLoggedIn(false));
    navigate.push("/");
  };

  const handleSaveData = () => {
    dispatch(editData({ name, phone }));
  };

  return (
    <div className={s.buttons}>
      <Button className="white-btn" onClick={handleSaveData}>
        Сохранить
      </Button>
      <span onClick={handleDeleteAccount}>Удалить аккаунт</span>
    </div>
  );
};
