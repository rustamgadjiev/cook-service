import { ChangeEventHandler } from "react";

type TProps = {
  type: string;
  className: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
  checked: boolean;
  disabled: boolean;
  placeholder: string;
  maxLength: number;
  required: boolean
};

export const Input = ({
  type,
  className,
  onChange,
  value,
  checked,
  disabled,
  placeholder,
  maxLength,
  required
}: TProps) => {
  return (
    <input
      type={type}
      className={className}
      onChange={onChange}
      value={value}
      checked={checked}
      disabled={disabled}
      placeholder={placeholder}
      maxLength={maxLength}
      required={required}
    />
  );
};

Input.defaultProps = {
  type: "text",
  className: "input",
  checked: false,
  value: "",
  onChange: () => {},
  disabled: false,
  placeholder: "",
  maxLength: 50,
  required: false,
};
