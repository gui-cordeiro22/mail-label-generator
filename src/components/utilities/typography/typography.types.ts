// Types
import { Theme } from "@/styles/theme";

export const typographyElements = [
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "span",
    "p",
] as const;
export type TypographyElements = (typeof typographyElements)[number];

export const typographyVariants = [
    "display",
    "titleLarge",
    "titleMedium",
    "titleSmall",
    "bodyLarge",
    "bodyMedium",
    "bodySmall",
    "labelLarge",
    "labelMedium",
    "labelSmall",
    "linkLarge",
    "linkMedium",
    "linkSmall",
    "microcopy",
] as const;
export type TypographyVariants = (typeof typographyVariants)[number];

export type TypographyData = {
    text: string;
    variant: TypographyVariants;
    element?: TypographyElements;
    color: keyof Theme["palette"]["colors"];
    hasOverflow?: boolean;
};

export type TypographyActions = {
    handleClick?: () => void;
};

export type TypographyProps = TypographyData & TypographyActions;
