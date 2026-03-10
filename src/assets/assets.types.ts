export type ImageVariants = "brandLogo";

export type Images = {
    [key in ImageVariants]: string;
};

export type IconVariants =
    | "whatsappIcon"
    | "spinner"
    | "caretLeft"
    | "caretRight";

export type Icons = {
    [key in IconVariants]: string;
};
