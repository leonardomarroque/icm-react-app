import { ButtonTypes } from "./button.css";
import { WithChildren } from "./ui";

interface ButtonProps {
  color: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  outline?: boolean;
  plain?: boolean;
}

export function Button({
  color,
  size,
  outline,
  plain,
  children,
}: WithChildren<ButtonProps>) {
  return (
    <ButtonTypes color={color} size={size} outlined={outline} plain={plain}>
      {children}
    </ButtonTypes>
  );
}
