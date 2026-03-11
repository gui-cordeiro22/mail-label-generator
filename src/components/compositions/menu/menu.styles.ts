// Dependencies
import styled, { css } from "styled-components";

type MenuContainerTypographyWrapperStyleProps = {
    isSidebarOpened: boolean;
};

export const MenuContainerTypographyWrapper = styled.div<MenuContainerTypographyWrapperStyleProps>`
    width: 100%;
    padding: ${({ isSidebarOpened, theme }) =>
        isSidebarOpened
            ? `${theme.system.space.xxxxs} ${theme.system.space.xs}`
            : theme.system.space.xxxxs};
`;

type MenuItemContainerStyleProps = {
    isSelected: boolean;
    isSidebarOpened: boolean;
    isExpandable: boolean;
};

export const MenuItemContainer = styled.a<MenuItemContainerStyleProps>`
    width: 100%;

    display: flex;
    gap: ${({ theme }) => theme.system.space.nano};

    cursor: pointer;

    transition: all 200ms ease;

    ${({ isSidebarOpened, theme }) =>
        isSidebarOpened &&
        css`
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            gap: ${theme.system.space.xxxxs};
            padding: ${theme.system.space.xs} ${theme.system.space.xl}
                ${theme.system.space.xs} ${theme.system.space.md};
        `}

    ${({ isSelected, theme, isExpandable }) => {
        if (isSelected && isExpandable) {
            return css`
                background-color: unset;
            `;
        }

        if (isSelected) {
            return css`
                border-left: ${theme.system.space.xxxxs} solid;
                background-color: ${theme.palette.colors.gray100};

                border-left-color: ${theme.palette.colors.info300};
            `;
        }

        return css`
            border-left: ${theme.system.space.xxxxs} solid
                ${theme.palette.colors.white};

            :hover {
                ${isExpandable &&
                css`
                    border-left-color: ${theme.palette.colors.gray100};
                    background-color: ${theme.palette.colors.gray100};
                `}

                ${!isExpandable &&
                css`
                    border-left-color: ${theme.palette.colors.info300};
                `}
            }
        `;
    }}

  ${({ theme, isSidebarOpened }) => css`
        @media (${theme.mediaQueries.tablet}) {
            border-left-width: ${theme.system.space.nano};

            ${() => {
        if (isSidebarOpened) {
            return css`
                        padding: ${theme.system.space.xxs}
                            ${theme.system.space.xs} ${theme.system.space.xxs}
                            ${theme.system.space.xxs};
                    `;
        }

        return css`
                    padding: ${theme.system.space.xxs}
                        ${theme.system.space.micro} ${theme.system.space.xxs}
                        ${theme.system.space.quarck};
                    flex-direction: column;
                    align-items: center;
                    overflow-wrap: anywhere;
                `;
    }}
        }
    `}
`;

type ContentStyleProps = {
    isSidebarOpened: boolean;
};

export const Content = styled.div<ContentStyleProps>`
    display: flex;
    align-items: center;
    flex-direction: ${({ isSidebarOpened }) =>
        isSidebarOpened ? "row" : "column"};
    gap: ${({ isSidebarOpened, theme }) =>
        isSidebarOpened ? theme.system.space.xxxxs : theme.system.space.nano};
    width: 100%;
`;

type IndicatorIconWrapperStyleProps = {
    isSelected: boolean;
};

export const IndicatorIconWrapper = styled.div<IndicatorIconWrapperStyleProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    border-radius: ${({ theme }) => theme.system.radii.full};
    background-color: ${({ isSelected, theme }) =>
        isSelected
            ? theme.palette.colors.info200
            : theme.palette.colors.gray100};

    ${({ theme }) => css`
        @media (${theme.mediaQueries.tablet}) {
            width: 24px;
            height: 24px;
        }
    `}
`;

type TypographyWrapperStyleProps = {
    isSidebarOpened: boolean;
    hasClampLines: boolean;
    isExpandable: boolean;
};

export const TypographyWrapper = styled.div<TypographyWrapperStyleProps>`
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: ${({ theme }) => theme.system.space.xxxxs};

    ${({ isSidebarOpened }) =>
        !isSidebarOpened &&
        css`
            > .pdg-typography {
                flex: 1;
                text-align: center;
            }
        `}

    ${({ hasClampLines }) =>
        !!hasClampLines &&
        css`
            > .pdg-typography {
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        `}

  ${({ isSidebarOpened, theme, isExpandable }) =>
        !isSidebarOpened &&
        isExpandable &&
        css`
            @media (${theme.mediaQueries.desktopSmall}) {
                gap: ${theme.system.space.nano};
            }
        `}
`;

type ActionIconWrapperStyleProps = {
    isExpanded?: boolean;
};

export const ActionIconWrapper = styled.div<ActionIconWrapperStyleProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    transition: transform ${({ theme }) => theme.system.durations.faster} ease;

    ${({ isExpanded }) =>
        !isExpanded &&
        css`
            transform: rotate(0deg);
        `}

    ${({ isExpanded }) =>
        !!isExpanded &&
        css`
            transform: rotate(180deg);
        `}
`;

type ExpandableMenuItemEllipseIndicatorStyleProps = {
    isSelected: boolean;
};

export const ExpandableMenuItemEllipseIndicator = styled.div<ExpandableMenuItemEllipseIndicatorStyleProps>`
    width: 8px;
    height: 8px;
    flex-shrink: 0;
    border: ${({ theme }) => theme.system.borders.hairline} solid transparent;
    border-radius: ${({ theme }) => theme.system.radii.full};

    ${({ isSelected, theme }) =>
        !!isSelected &&
        css`
            border-color: ${theme.palette.colors.info200};
            background-color: ${theme.palette.colors.info200};
        `}

    ${({ isSelected, theme }) =>
        !isSelected &&
        css`
            border-color: ${theme.palette.colors.gray400};
        `}
`;

type ExpandableMenuItemContainerStyleProps = {
    isSelected: boolean;
};

export const ExpandableMenuItemContainer = styled.div<ExpandableMenuItemContainerStyleProps>`
    width: 100%;
    padding: ${({ theme }) =>
        `${theme.system.space.xxxxs} ${theme.system.space.xs}`};

    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.system.space.micro};

    transition: all 200ms ease;
    cursor: pointer;

    :hover {
        background: linear-gradient(
            90deg,
            ${({ theme }) => theme.palette.colors.gray100} 0%,
            transparent 100%
        );
    }

    ${({ isSelected, theme }) =>
        !!isSelected &&
        css`
            background: linear-gradient(
                90deg,
                ${theme.palette.colors.gray100} 0%,
                transparent 100%
            );
        `}

    ${({ isSelected, theme }) =>
        !isSelected &&
        css`
            :hover {
                ${ExpandableMenuItemEllipseIndicator} {
                    border-color: ${theme.palette.colors.info200};
                    background-color: ${theme.palette.colors.info200};
                }
            }
        `}

  ${({ theme }) => css`
        @media (${theme.mediaQueries.desktopSmall}) {
            padding: ${`${theme.system.space.xxs} ${theme.system.space.xs}`};
        }
    `}
`;

type ExpandableMenuItemTypographyWrapperStyleProps = {
    hasIndicator: boolean;
};

export const ExpandableMenuItemTypographyWrapper = styled.div<ExpandableMenuItemTypographyWrapperStyleProps>`
    overflow: hidden;

    ${({ hasIndicator, theme }) =>
        !hasIndicator &&
        css`
            padding-left: ${theme.system.space.xxxxl};

            @media (${theme.mediaQueries.tablet}) {
                padding-left: ${theme.system.space.lg};
            }
        `}
`;
