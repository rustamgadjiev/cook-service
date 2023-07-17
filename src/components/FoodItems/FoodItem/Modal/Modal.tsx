import s from "./Modal.module.scss";
import { Dispatch, SetStateAction } from "react";
import CloseIcon from "@/assets/images/icons/close.svg";
import { selectFoodItem } from "@/store/slices/foods/foods";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/store/store";
import { Content } from "./Content/Content";
import { Bottom } from "./Bottom/Bottom";

type TProps = {
  setIsViewModal: Dispatch<SetStateAction<boolean>>;
};

export const Modal = ({ setIsViewModal }: TProps) => {
  const selectedFoodItem = useSelector(selectFoodItem);

  const dispatch = useAppDispatch();

  return (
    <>
      <div className="overlay" onClick={() => setIsViewModal(false)}></div>
      <div className={s.modal}>
        <CloseIcon className={s.close} onClick={() => setIsViewModal(false)} />
        <div className={`${s.image} ${s.container}`}>
          <img src={selectedFoodItem.imageUrl} alt="" />
        </div>
        <Content />
        <Bottom />
      </div>
    </>
  );
};
