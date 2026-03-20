// Dependencies
import { ButtonHTMLAttributes, ReactNode, MouseEvent } from "react";

export type ButtonVariants = "light-cta" | "dark-cta" | "link";

export type ButtonSizeVariants =
  | "small"
  | "medium"
  | "large"
  | "immense"
  | "fullyAdaptative";

export type ButtonData = ButtonHTMLAttributes<HTMLButtonElement> & {
  isActive?: boolean;
  isComingSoon?: boolean;
  variant: ButtonVariants;
  sizeVariant?: ButtonSizeVariants;
  hasHoverEffect?: boolean;
};

export type ButtonElement = {
  labelElement: ReactNode;
};

export type ButtonAction = {
  handleClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
};

export type ButtonProps = ButtonData & ButtonElement & ButtonAction;
