import InputMask from "react-input-mask";
import { useSelector, useDispatch } from "react-redux";
import {
  selectPhone,
  selectWarningText,
  setPhone,
  setWarningText,
} from "../../../../../store/slices/registration/registration";
import { useEffect } from "react";

export const RegistrationInput = () => {
  const phone = useSelector(selectPhone);
  const warningText = useSelector(selectWarningText);

  const dispatch = useDispatch();

  const handlephone = (e: React.FormEvent<HTMLInputElement>) => {
    dispatch(setPhone(e.currentTarget.value));
  };

  const handlePhone = phone.replace(/\D/g, "");

  useEffect(() => {
    if (handlePhone.length === 11) {
      dispatch(setWarningText(""));
    }
  }, [handlePhone, dispatch]);
  return (
    <label>
      <InputMask
        mask="+7 (999) 999-99-99"
        placeholder="+7 (___) ___-__-__"
        type="tel"
        value={phone}
        onChange={handlephone}
        style={{
          borderColor: warningText.length
            ? "red"
            : handlePhone.length === 11
            ? "#25D366"
            : "#fff",
        }}
      />
      <span>{warningText}</span>
    </label>
  );
};
