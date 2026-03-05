// Types
import { TypographyVariants } from "./typography.types";

// Utils
import { theme } from "@/styles/theme";

export type Typographies = {
    [typography in TypographyVariants]: {
        fontSize: string;
        fontWeight: string;
        font: string;
        letterSpacing: string;
        lineHeight: string;
    };
};

export const typographies: Typographies = {
    display: {
        font: theme.typography.fonts.heading,
        fontSize: theme.typography.fontSizes.xxl,
        fontWeight: theme.typography.fontWeights.bold,
        letterSpacing: theme.typography.letterSpacings.sm,
        lineHeight: theme.typography.lineHeights.lg,
    },
    titleLarge: {
        font: theme.typography.fonts.heading,
        fontSize: theme.typography.fontSizes.xl,
        fontWeight: theme.typography.fontWeights.medium,
        letterSpacing: theme.typography.letterSpacings.sm,
        lineHeight: theme.typography.lineHeights.md,
    },
    titleMedium: {
        font: theme.typography.fonts.heading,
        fontSize: theme.typography.fontSizes.lg,
        fontWeight: theme.typography.fontWeights.medium,
        letterSpacing: theme.typography.letterSpacings.sm,
        lineHeight: theme.typography.lineHeights.xs,
    },
    titleSmall: {
        font: theme.typography.fonts.heading,
        fontSize: theme.typography.fontSizes.md,
        fontWeight: theme.typography.fontWeights.bold,
        letterSpacing: theme.typography.letterSpacings.sm,
        lineHeight: theme.typography.lineHeights.xxl,
    },
    bodyLarge: {
        font: theme.typography.fonts.default,
        fontSize: theme.typography.fontSizes.md,
        fontWeight: theme.typography.fontWeights.regular,
        letterSpacing: theme.typography.letterSpacings.md,
        lineHeight: theme.typography.lineHeights.xxl,
    },
    bodyMedium: {
        font: theme.typography.fonts.default,
        fontSize: theme.typography.fontSizes.sm,
        fontWeight: theme.typography.fontWeights.regular,
        letterSpacing: theme.typography.letterSpacings.md,
        lineHeight: theme.typography.lineHeights.xl,
    },
    bodySmall: {
        font: theme.typography.fonts.default,
        fontSize: theme.typography.fontSizes.xs,
        fontWeight: theme.typography.fontWeights.medium,
        letterSpacing: theme.typography.letterSpacings.lg,
        lineHeight: theme.typography.lineHeights.sm,
    },
    labelLarge: {
        font: theme.typography.fonts.default,
        fontSize: theme.typography.fontSizes.md,
        fontWeight: theme.typography.fontWeights.medium,
        letterSpacing: theme.typography.letterSpacings.md,
        lineHeight: theme.typography.lineHeights.xxl,
    },
    labelMedium: {
        font: theme.typography.fonts.default,
        fontSize: theme.typography.fontSizes.sm,
        fontWeight: theme.typography.fontWeights.bold,
        letterSpacing: theme.typography.letterSpacings.md,
        lineHeight: theme.typography.lineHeights.xl,
    },
    labelSmall: {
        font: theme.typography.fonts.default,
        fontSize: theme.typography.fontSizes.xs,
        fontWeight: theme.typography.fontWeights.bold,
        letterSpacing: theme.typography.letterSpacings.lg,
        lineHeight: theme.typography.lineHeights.sm,
    },
    linkLarge: {
        font: theme.typography.fonts.default,
        fontSize: theme.typography.fontSizes.md,
        fontWeight: theme.typography.fontWeights.bold,
        letterSpacing: theme.typography.letterSpacings.md,
        lineHeight: theme.typography.lineHeights.xxl,
    },
    linkMedium: {
        font: theme.typography.fonts.default,
        fontSize: theme.typography.fontSizes.sm,
        fontWeight: theme.typography.fontWeights.bold,
        letterSpacing: theme.typography.letterSpacings.md,
        lineHeight: theme.typography.lineHeights.xl,
    },
    linkSmall: {
        font: theme.typography.fonts.default,
        fontSize: theme.typography.fontSizes.xs,
        fontWeight: theme.typography.fontWeights.bold,
        letterSpacing: theme.typography.letterSpacings.lg,
        lineHeight: theme.typography.lineHeights.sm,
    },
    microcopy: {
        font: theme.typography.fonts.default,
        fontSize: theme.typography.fontSizes.xxs,
        fontWeight: theme.typography.fontWeights.medium,
        letterSpacing: theme.typography.letterSpacings.xl,
        lineHeight: theme.typography.lineHeights.xl,
    },
};
