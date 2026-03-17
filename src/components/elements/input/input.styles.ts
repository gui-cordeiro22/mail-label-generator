// Dependencies
import styled, { css } from "styled-components";

// Styles
import { theme } from "@/styles/theme";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    background-color: transparent;
    width: 100%;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    max-width: 1440px;
    gap: ${theme.system.space.nano};
`;

type InputElementWrapperStyleProps = {
    hasError: boolean;
};

export const InputElementWrapper = styled.div<InputElementWrapperStyleProps>`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: space-between;
    position: relative;
    background-color: #fff;
    gap: ${theme.system.space["xxxxs"]};
    border-radius: ${theme.system.radii["md"]};
    padding: 12px;
    width: 100%;
    transition: all 0.2s ease-in;

    ${({ hasError }) =>
        !!hasError &&
        css`
            border: 1px solid ${theme.palette.colors["danger300"]};
        `}

    ${({ hasError }) =>
        !hasError &&
        css`
            border: 1px solid ${theme.palette.colors["gray200"]};
        `}
`;

type LabelWrapperStyleProps = {
    isFocused: boolean;
    isDisabled: boolean;
};

export const LabelWrapper = styled.div<LabelWrapperStyleProps>`
    position: absolute;
    left: 12px;
    top: -12px;
    padding: 0 ${({ theme }) => theme.system.space.nano};
    background-color: ${({ theme }) => theme.palette.colors.white};

    ${({ isFocused, isDisabled }) =>
        !isFocused &&
        !!isDisabled &&
        css`
            display: none;
        `}
`;

export const InputElement = styled.input`
    background-color: transparent;
    width: 100%;
`;

export const ErrorMessageWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    min-height: 18px;
`;
