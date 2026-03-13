// Dependencies
import { FunctionComponent, SVGProps } from "react";

export type ImageVariants = "brandLogo" | "searchingOnFolders";

export type Images = {
    [key in ImageVariants]: string;
};

export type IconVariants =
    | "whatsappIcon"
    | "spinner"
    | "caretLeft"
    | "caretRight"
    | "mobileMenu"
    | "dotsThreeVertical"
    | "mapPin"
    | "customersList"
    | "searchIcon";
export type Icon = {
    type: IconType;
    source: FunctionComponent<SVGProps<SVGSVGElement>>;
};

export type IconType = "stroke" | "fill";

export type IconSpinType = "none" | "swivel";

export type Icons = {
    [key in IconVariants]: Icon;
};
