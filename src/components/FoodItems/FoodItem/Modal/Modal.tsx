import s from "./Modal.module.scss";
import { Dispatch, SetStateAction, useState } from "react";
import CloseIcon from "@/assets/images/icons/close.svg";
import { selectFoodItem } from "@/store/slices/foods/foods";
import { useSelector } from "react-redux";
import { Content } from "./Content/Content";
import dynamic from "next/dynamic";

const Bottom = dynamic(() => import("./Bottom/Bottom"), {
  ssr: false,
});

type TProps = {
  setIsViewModal: Dispatch<SetStateAction<boolean>>;
};

export const Modal = ({ setIsViewModal }: TProps) => {
  const selectedFoodItem = useSelector(selectFoodItem);
  const [mores, setMores] = useState<string[]>([]);

  return (
    <>
      <div className="overlay" onClick={() => setIsViewModal(false)}></div>
      <div className={s.modal}>
        <CloseIcon className={s.close} onClick={() => setIsViewModal(false)} />
        <div className={`${s.image} ${s.container}`}>
          <img src={selectedFoodItem.imageUrl} alt="" />
        </div>
        <Content setMores={setMores} />
        <Bottom setIsViewModal={setIsViewModal} mores={mores} />
      </div>
    </>
  );
};
