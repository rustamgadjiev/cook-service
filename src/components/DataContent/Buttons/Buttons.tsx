import { Button } from "@/components/UI/Button/Button";
import s from "./Buttons.module.scss";
import { useAppDispatch } from "@/store/store";
import { deleteAccount, editData } from "@/store/slices/userData/userData";
import { useRouter } from "next/router";
import { setLoggedIn } from "@/store/slices/registration/registration";

type TProps = {
  nameValue: string;
  telValue: string;
};

export const Buttons = ({ nameValue, telValue }: TProps) => {
  const dispatch = useAppDispatch();
  const navigate = useRouter();

  const handleDeleteAccount = () => {
    dispatch(deleteAccount());
    dispatch(setLoggedIn(false));
    navigate.push("/");
  };

  const handleSaveData = () => {
    dispatch(editData({ name: nameValue, tel: telValue }));
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
