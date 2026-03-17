// Dependencies
import type { InputHTMLAttributes, ReactNode } from "react";

export type InputData = Partial<InputHTMLAttributes<HTMLInputElement>> & {
    placeholder: string;
    isDisabled?: boolean;
};

export type InputElements = {
    errorMessageElement?: ReactNode;
    iconElement?: ReactNode;
    labelElement?: ReactNode;
};

/* eslint-disable @typescript-eslint/no-explicit-any */
export type InputAction = {
    handleChange?: (event: any) => void;
};

export type InputProps = InputData & InputElements & InputAction;
