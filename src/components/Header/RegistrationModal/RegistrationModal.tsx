import React from "react";
import { Registration } from "./Registration/Registration";
import s from "./RegistrationModal.module.scss";
import ArrowIcon from "../../../assets/images/icons/arrow.svg";
import CloseIcon from "../../../assets/images/icons/close.svg";
import { Confirm } from "./Confirm/Confirm";
import { GetCode } from "./GetCode/GetCode";
import { useSelector, useDispatch } from "react-redux";
import {
  selectContentId,
  setContentId,
} from "@/store/slices/registration/registration";
import Image from "next/image";

type Props = {
  setIsViewModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const RegistrationModal = ({ setIsViewModal }: Props) => {
  const contentId = useSelector(selectContentId);

  const dispatch = useDispatch();

  return (
    <>
      <div className="overlay" onClick={() => setIsViewModal(false)}></div>
      <div className={s.modal}>
        <header className={s.header}>
          {contentId !== 0 && (
            <button
              className={s.back}
              onClick={() => dispatch(setContentId(contentId - 1))}
            >
              <ArrowIcon />
            </button>
          )}
          <button className={s.close} onClick={() => setIsViewModal(false)}>
            <CloseIcon />
          </button>
        </header>
        {contentId === 0 ? (
          <Registration setIsViewModal={setIsViewModal} />
        ) : contentId === 1 ? (
          <Confirm />
        ) : (
          <GetCode setIsViewModal={setIsViewModal} />
        )}
      </div>
    </>
  );
};
