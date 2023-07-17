type TProps = {
  className: string;
  children: React.ReactNode;
  onClick: () => void;
  type: "button" | "submit" | "reset";
};

export const Button = ({ className, onClick, children, type }: TProps) => {
  return (
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  className: "btn",
  onClick: () => {},
  type: "button",
};
