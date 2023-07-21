import { Button } from "@/components/UI/Button/Button";
import {
  selectPhone,
  setContentId,
} from "../../../../store/slices/registration/registration";
import s from "./Confirm.module.scss";
import { Input } from "@/components/UI/Input/Input";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { editData } from "@/store/slices/userData/userData";

export const Confirm = () => {
  const phone = useAppSelector(selectPhone);

  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(setContentId(2));
    dispatch(editData({ tel: phone }));
    

    // fetch("https://6481fbdb29fa1c5c50326b3a.mockapi.io/users")
    //   .then((resp) => resp.json())
    //   .then((resp) => {
    //     if (
    //       resp.some(
    //         (item: { phone: string; id: number }) =>
    //           item.phone !== telValue.replace(/\D/g, "")
    //       )
    //     ) {
    //       const newUser = {
    //         phone: telValue.replace(/\D/g, ""),
    //       };

    //       fetch("https://6481fbdb29fa1c5c50326b3a.mockapi.io/users", {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(newUser),
    //       });
    //     }
    //   })
    //   .catch((e) => console.log(e))
    //   .finally(() => {
    //     localStorage.setItem("isLoggedIn", "true");

    //     setModalContentId(2);
    //   });
  };

  return (
    <div className={s.content}>
      <h2>Ваш телефон</h2>
      <form onSubmit={handleSubmit}>
        <Input type="tel" disabled value={phone} />
        <Button className="white-btn" type="submit">
          Подтвердить по СМС
        </Button>
      </form>
    </div>
  );
};
