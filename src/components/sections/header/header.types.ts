// Dependencies
import { ReactNode } from "react";

export type HeaderElement = {
    titleElement: ReactNode;
    subtitleElement: ReactNode;
    networkSectionCompositions?: ReactNode;
};

export type HeaderProps = HeaderElement;
