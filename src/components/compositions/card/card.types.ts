// Dependencies
import { ReactNode } from "react";

export type CardVariants = "report" | "input";

export type CardElements = {
    content: ReactNode;
    labelElement?: ReactNode;
    iconElement?: ReactNode;
    variant: CardVariants;
};

export type CardProps = CardElements;
