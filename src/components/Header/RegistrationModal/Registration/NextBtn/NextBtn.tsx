// import { ReactComponent as ArrowIcon } from "../../../../../assets/images/icons/arrow.svg";
import ArrowIcon from "@/assets/images/icons/arrow.svg";
import { useSelector, useDispatch } from "react-redux";
import { selectPhone, setContentId, setWarningText } from "../../../../../store/slices/registration/registration";

export const NextBtn = () => {
  const phone = useSelector(selectPhone);
  const dispatch = useDispatch();

  const handlePhone = phone.replace(/\D/g, "");

  const nextBtnClick = () => {
    if (handlePhone.length !== 11) {
      dispatch(setWarningText("Введите номер правильно!"));
    } else {
      dispatch(setContentId(1));
    }
  };
  return (
    <button onClick={nextBtnClick}>
      Далее
      <ArrowIcon />
    </button>
  );
};
