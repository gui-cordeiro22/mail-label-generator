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
  | "searchIcon"
  | "scissorsIcon"
  | "truck"
  | "closedPackage";
export type Icon = {
  source: FunctionComponent<SVGProps<SVGSVGElement>>;
};

export type IconSpinType = "none" | "swivel";

export type Icons = {
  [key in IconVariants]: Icon;
};
