import { useEffect, useState } from "react";
import InputMask from "react-input-mask";
import {
  setContentId,
  setLoggedIn,
} from "../../../../../store/slices/registration/registration";
import { useAppDispatch } from "@/store/store";

type TProps = {
  setIsViewModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const GetCodeInput = ({ setIsViewModal }: TProps) => {
  const [codeInputValue, setCodeInputValue] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleCodeInputValue = (e: React.FormEvent<HTMLInputElement>) => {
    setCodeInputValue(e.currentTarget.value);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (codeInputValue.split(" ").join("") === "1234") {
        setIsViewModal(false);
        dispatch(setLoggedIn(true));
        dispatch(setContentId(0));
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, [codeInputValue, setIsViewModal, dispatch]);

  return (
    <InputMask
      type="string"
      value={codeInputValue}
      onChange={handleCodeInputValue}
      placeholder="· · · ·"
      mask="9 9 9 9"
    />
  );
};
