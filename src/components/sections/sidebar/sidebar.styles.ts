// Dependencies
import styled, { css } from "styled-components";

type ContainerStyleProps = {
    isOpened: boolean;
};

export const Container = styled.div<ContainerStyleProps>`
    width: 0;
    display: ${({ isOpened }) => (!isOpened ? "none" : "flex")};
    flex-shrink: 0;
    position: relative;
    z-index: 4;

    ${({ theme, isOpened }) => css`
        @media (${theme.mediaQueries.tablet}) {
            display: flex;
        }

        @media (${theme.mediaQueries.desktopSmall}) {
            width: ${isOpened ? "236px" : "100px"};
            transition-duration: ${theme.system.durations.instant};
            transition-property: width;
        }
    `}
`;

type InnerContainerStyleProps = {
    isOpened: boolean;
};

export const InnerContainer = styled.div<InnerContainerStyleProps>`
    display: ${({ isOpened }) => (!isOpened ? "none" : "flex")};
    flex-direction: column;
    justify-content: space-between;
    flex-shrink: 0;
    position: fixed;
    left: 0;
    z-index: 4;
    width: 100%;
    height: calc(100% - 56px);
    background-color: ${({ theme }) => theme.palette.colors.white};
    box-shadow: ${({ theme }) => theme.system.shadows.lv1};

    ${({ theme, isOpened }) => css`
        @media (${theme.mediaQueries.tablet}) {
            display: flex;
            width: 236px;
            left: ${!isOpened ? "calc(-236px)" : "0"};
            transition-duration: ${theme.system.durations.fast};
            transition-property: left;
        }

        @media (${theme.mediaQueries.desktopSmall}) {
            top: 0;
            left: 0;
            width: ${isOpened ? "236px" : "100px"};
            height: 100dvh;
            transition-duration: ${theme.system.durations.instant};
            transition-property: width;
        }
    `}
`;

export const TopContent = styled.div`
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.system.space.md};
`;

export const MenusCompostionsWrapper = styled.div`
    width: 100%;
`;
type ImageElementsWrapperStyleProps = {
    isOpened: boolean;
};

export const ImageElementsWrapper = styled.div<ImageElementsWrapperStyleProps>`
    margin-top: ${({ theme }) => theme.system.space.md};

    ${({ isOpened }) =>
        !!isOpened &&
        css`
            .pdg-logo {
                width: 200px;
            }
        `}

    ${({ isOpened }) =>
        !isOpened &&
        css`
            .pdg-logo {
                width: 90px;
            }
        `}
`;

export const StatusIconWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    flex-shrink: 0;
    right: -14px;
    top: 34px;
    width: 28px;
    height: 28px;
    border-radius: ${({ theme }) => theme.system.radii.md};
    background-color: ${({ theme }) => theme.palette.colors["warning100"]};
    box-shadow: ${({ theme }) => theme.system.shadows.lv1};
    cursor: pointer;

    .pdg-status-icon {
        width: 16px;
    }
`;

export const FooterContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 12px 16px 12px 12px;
    border-top: ${({ theme }) =>
        `${theme.system.borders.thin} solid ${theme.palette.colors["gray100"]}`};
`;
