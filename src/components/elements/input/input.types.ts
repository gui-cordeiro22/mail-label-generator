// Dependencies
import type { InputHTMLAttributes, ReactNode } from "react";

export type InputData = Partial<InputHTMLAttributes<HTMLInputElement>> & {
    placeholder: string;
    icon?: string;
    errorMessage?: ReactNode;
};

/* eslint-disable @typescript-eslint/no-explicit-any */
export type InputAction = {
    handleChange?: (event: any) => void;
};

export type InputProps = InputData & InputAction;
