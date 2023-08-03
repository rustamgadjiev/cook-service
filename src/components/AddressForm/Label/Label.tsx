import { Input } from "@/components/UI/Input/Input";
import React, { Dispatch, SetStateAction } from "react";

type TProps = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  title: string;
};

export const Label = ({ value, setValue, title }: TProps) => {
  return (
    <label>
      <span>{title}</span>
      <Input
        placeholder={title.split(" ")[0]}
        type="text"
        value={value}
        onChange={(e: { target: { value: SetStateAction<string> } }) =>
          setValue(e.target.value)
        }
        required={title === "Квартира" || title.split(" ")[0] === "Комментарий" ? false : true}
      />
    </label>
  );
};
