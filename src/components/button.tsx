import { ButtonTypes } from "./button.css";
import { WithChildren } from "./ui";

interface ButtonProps {
  color: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  type: "button" | "submit";
  outline?: boolean;
  plain?: boolean;
}

export function Button({
  color,
  size,
  type,
  outline,
  plain,
  children,
}: WithChildren<ButtonProps>) {
  return (
    <ButtonTypes
      type={type}
      color={color}
      size={size}
      outlined={outline}
      plain={plain}
    >
      {children}
    </ButtonTypes>
  );
}
