export type ImageVariants = "brandLogo" | "searchingOnFolders";

export type Images = {
    [key in ImageVariants]: string;
};

export type IconVariants =
    | "whatsappIcon"
    | "spinner"
    | "caretLeft"
    | "caretRight"
    | "mobileMenuIcon"
    | "dotsThreeVertical";

export type Icons = {
    [key in IconVariants]: string;
};
