// Dependencies
import styled, { css } from "styled-components";

// Types
import { IconSpinType, IconType } from "@/assets/index";
import { Theme, theme } from "@/styles/theme";

export type ContainerStyleProps = {
    isActive?: boolean;
    spinType?: IconSpinType;
    size: number;
    color: keyof Theme["palette"]["colors"];
    hasCursorPointer: boolean;
    type: IconType;
};

export const Container = styled.div<ContainerStyleProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 1;
    transform: rotate(0deg);
    transition: all 0.3s;

    ${({ size }) => css`
        width: ${`${size}px`};
        height: ${`${size}px`};
    `}

    > svg {
        width: 100%;
        height: 100%;
        cursor: ${({ hasCursorPointer }) =>
        hasCursorPointer ? "pointer" : "default"};

        ${({ type, color }) =>
        color &&
            css`
                * {
                    ${type}: ${theme.palette.colors[color]};
                }
            `}
    }

    ${({ isActive, spinType }) =>
        !!isActive &&
        spinType === "swivel" &&
        css`
            transform: rotate(180deg);
        `}
`;
