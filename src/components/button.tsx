import { ButtonTypes } from "./button.css";
import { WithChildren } from "./ui";

interface ButtonProps {
  color: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  type: "button" | "submit";
  radius?: "sm" | "md" | "lg" | "full";
  outline?: boolean;
  plain?: boolean;
}

export function Button({
  color,
  size,
  type,
  radius,
  outline,
  plain,
  children,
}: WithChildren<ButtonProps>) {
  return (
    <ButtonTypes
      type={type}
      color={color}
      size={size}
      radius={radius}
      outlined={outline}
      plain={plain}
    >
      {children}
    </ButtonTypes>
  );
}
