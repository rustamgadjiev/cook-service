import {
  selectPhone,
  setContentId,
} from "../../../../store/slices/registration/registration";
import s from "./Confirm.module.scss";
import { useSelector, useDispatch } from "react-redux";

export const Confirm = () => {
  const phone = useSelector(selectPhone);

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    localStorage.setItem("isLoggedIn", "true");
    dispatch(setContentId(2));

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
        <input type="tel" disabled value={phone} />
        <button type="submit">Подтвердить по СМС</button>
      </form>
    </div>
  );
};
