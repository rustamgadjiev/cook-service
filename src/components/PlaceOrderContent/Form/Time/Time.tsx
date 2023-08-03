import { Button } from "@/components/UI/Button/Button";
import React, { Dispatch, SetStateAction, useState } from "react";
import s from "./Time.module.scss";
import TimeIcon from "@/assets/images/icons/time.svg";
import { timeList } from "@/utils/app-data";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { selectTimeId, setSelectedTimeId } from "@/store/slices/orders/orders";

type TProps = {
  isVisible: boolean;
  setVisibleId: Dispatch<SetStateAction<number>>;
};

export const Time = ({ isVisible, setVisibleId }: TProps) => {
  const timeId = useAppSelector(selectTimeId);
  const dispatch = useAppDispatch();

  return (
    <Button
      className={`${s.time} white-btn ${isVisible ? "active" : ""}`}
      onClick={() => setVisibleId(isVisible ? -1 : 1)}
    >
      <span>
        <TimeIcon />
        Когда
      </span>
      <span>{timeId}</span>
      <div className={`${s.menu} ${isVisible ? s.active : ""}`}>
        <ul>
          {timeList.map((time) => (
            <li
              onClick={() => dispatch(setSelectedTimeId(time))}
              key={time}
              style={{ borderColor: timeId === time ? "#fff" : "" }}
            >
              {time}
            </li>
          ))}
        </ul>
      </div>
    </Button>
  );
};
