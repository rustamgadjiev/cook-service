type TProps = {
  type: string;
  className: string;
  onChange: () => void;
  value: string;
  checked: boolean;
  disabled: boolean;
  placeholder: string;
  maxLength: number;
};

export const Input = ({
  type,
  className,
  onChange,
  value,
  checked,
  disabled,
  placeholder,
  maxLength
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
};
