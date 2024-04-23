import s from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      className={s.buttonAll}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
