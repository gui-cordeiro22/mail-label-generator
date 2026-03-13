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
    overflow: hidden;
`;

type InputElementWrapperStyleProps = {
    hasError: boolean;
};

export const InputElementWrapper = styled.div<InputElementWrapperStyleProps>`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;
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

export const IconElement = styled.img`
    width: 18px;
`;
