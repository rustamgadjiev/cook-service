type TProps = {
  type: string;
  className: string;
  onChange: () => void;
  value: string;
  checked: boolean;
  disabled: boolean;
};

export const Input = ({
  type,
  className,
  onChange,
  value,
  checked,
  disabled
}: TProps) => {
  return (
    <input
      type={type}
      className={className}
      onChange={onChange}
      value={value}
      checked={checked}
      disabled={disabled}
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
};
