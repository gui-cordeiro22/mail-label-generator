// Dependencies
import styled, { css } from "styled-components";

// Types
import { Theme } from "@/styles/theme";

// Data
import { TypographyVariants } from "./typography.types";
import { typographies } from "./typography.data";

type ContainerStyles = {
    variant: TypographyVariants;
    color: keyof Theme["palette"]["colors"];
    hasOverflow?: boolean;
    hasCursorPointer?: boolean;
};

export const Container = styled.div<ContainerStyles>`
    font-family: ${({ variant }) => typographies[variant].font};
    font-size: ${({ variant }) => typographies[variant].fontSize};
    line-height: ${({ variant }) => typographies[variant].lineHeight};
    font-weight: ${({ variant }) => typographies[variant].fontWeight};
    letter-spacing: ${({ variant }) => typographies[variant].letterSpacing};

    ${({ variant }) =>
        variant.includes("link") &&
        css`
            text-decoration: underline;
        `}

    ${({ theme, color }) => css`
        color: ${theme.palette.colors[color]};
    `}

  ${({ hasCursorPointer }) =>
        !!hasCursorPointer &&
        css`
            cursor: pointer;
        `}

  ${({ hasOverflow }) =>
        !!hasOverflow &&
        css`
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        `}
`;
