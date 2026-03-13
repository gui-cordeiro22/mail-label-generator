// Dependencies
import { ReactNode } from "react";

export type CardElements = {
    valueElement: ReactNode;
    labelElement?: ReactNode;
    iconElement?: ReactNode;
};

export type CardProps = CardElements;
