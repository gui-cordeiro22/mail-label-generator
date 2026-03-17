// Dependencies
import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariants = "light-cta" | "dark-cta" | "link";

export type ButtonData = ButtonHTMLAttributes<HTMLButtonElement> & {
    isActive?: boolean;
    isComingSoon?: boolean;
    variant: ButtonVariants;
    hasHoverEffect?: boolean;
};

export type ButtonElement = {
    labelElement: ReactNode;
};

export type ButtonAction = {
    handleClick?: () => void;
};

export type ButtonProps = ButtonData & ButtonElement & ButtonAction;
