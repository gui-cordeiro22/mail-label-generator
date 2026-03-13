// Dependencies
import { Fragment, FunctionComponent, useState } from "react";

// Components
import { Typography } from "../../utilities/typography";
import { ConditionallyRender } from "../../utilities/conditionally-render";
import { ScreenWidthRender } from "../../utilities/screen-width-render";

// Styles
import {
    MenuContainerTypographyWrapper,
    MenuItemContainer,
    Content,
    IndicatorIconWrapper,
    TypographyWrapper,
    ActionIconWrapper,
    ExpandableMenuItemContainer,
    ExpandableMenuItemEllipseIndicator,
    ExpandableMenuItemTypographyWrapper,
} from "./menu.styles";

// Types
import {
    MenuProps,
    MenuItemProps,
    ExpandableMenuItemProps,
} from "./menu.types";

export const Menu: FunctionComponent<MenuProps> = ({
    label,
    isSidebarOpened,
    menuItemCompositions,
}) => {
    return (
        <Fragment>
            <MenuContainerTypographyWrapper isSidebarOpened={!!isSidebarOpened}>
                <ScreenWidthRender
                    actionAfterRenderingWidth="hide"
                    renderingWidth={1280}
                    content={
                        <Typography
                            variant="labelLarge"
                            color="info200"
                            text={label}
                        />
                    }
                />

                <ScreenWidthRender
                    actionAfterRenderingWidth="show"
                    renderingWidth={1280}
                    content={
                        <Typography
                            variant="labelMedium"
                            color="warning100"
                            text={label}
                        />
                    }
                />
            </MenuContainerTypographyWrapper>

            {menuItemCompositions}
        </Fragment>
    );
};

export const MenuItem: FunctionComponent<MenuItemProps> = ({
    label,
    navigationSource,
    isSidebarOpened,
    isSelected,
    isComingSoon,
    isExpandable = false,
    hasClampLines = false,
    indicatorIconElement,
    actionIconElement,
    chipElement,
    menuExpandableItemCompositions,
    handleClick,
}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleMenuItemClick = () => {
        if (isExpandable) {
            setIsExpanded(!isExpanded);
            return;
        }

        if (handleClick) {
            handleClick();
        }
    };

    return (
        <Fragment>
            <MenuItemContainer
                isComingSoon={!!isComingSoon}
                isSelected={!!isSelected}
                isSidebarOpened={isSidebarOpened}
                isExpandable={isExpandable}
                {...(!!handleClick && { onClick: handleMenuItemClick })}
                {...(!!navigationSource && {
                    href: navigationSource,
                })}
            >
                <Content isSidebarOpened={!!isSidebarOpened}>
                    <ConditionallyRender
                        shouldRender={!!indicatorIconElement}
                        content={
                            <IndicatorIconWrapper isSelected={!!isSelected}>
                                {indicatorIconElement}
                            </IndicatorIconWrapper>
                        }
                    />

                    <TypographyWrapper
                        isSidebarOpened={!!isSidebarOpened}
                        hasClampLines={hasClampLines}
                        isExpandable={isExpandable}
                    >
                        <ScreenWidthRender
                            actionAfterRenderingWidth="hide"
                            renderingWidth={1280}
                            content={
                                <Typography
                                    variant={
                                        isSelected ? "labelLarge" : "bodyLarge"
                                    }
                                    color="gray400"
                                    text={label}
                                />
                            }
                        />

                        <ScreenWidthRender
                            actionAfterRenderingWidth="show"
                            renderingWidth={1280}
                            content={
                                <Fragment>
                                    <Typography
                                        variant={
                                            isSelected
                                                ? "labelMedium"
                                                : "bodyMedium"
                                        }
                                        color={
                                            isComingSoon
                                                ? "gray200"
                                                : "gray400"
                                        }
                                        text={label}
                                    />

                                    <ConditionallyRender
                                        shouldRender={!!isComingSoon}
                                        content={chipElement}
                                    />
                                </Fragment>
                            }
                        />

                        <ConditionallyRender
                            shouldRender={!!actionIconElement}
                            content={
                                <ActionIconWrapper isExpanded={isExpanded}>
                                    {actionIconElement}
                                </ActionIconWrapper>
                            }
                        />
                    </TypographyWrapper>
                </Content>
            </MenuItemContainer>

            <ConditionallyRender
                shouldRender={!!isExpanded}
                content={menuExpandableItemCompositions}
            />
        </Fragment>
    );
};

export const ExpandableMenuItem: FunctionComponent<ExpandableMenuItemProps> = ({
    label,
    isSelected,
    hasIndicator = true,
    hasOverflow = true,
    handleClick,
}) => {
    return (
        <ExpandableMenuItemContainer
            isSelected={!!isSelected}
            onClick={handleClick}
        >
            <ConditionallyRender
                content={
                    <ExpandableMenuItemEllipseIndicator
                        isSelected={!!isSelected}
                    />
                }
                shouldRender={hasIndicator}
            />

            <ExpandableMenuItemTypographyWrapper hasIndicator={!!hasIndicator}>
                <ScreenWidthRender
                    actionAfterRenderingWidth="hide"
                    renderingWidth={1280}
                    content={
                        <Typography
                            variant={isSelected ? "labelLarge" : "bodyLarge"}
                            color="gray400"
                            text={label}
                            hasOverflow={hasOverflow}
                        />
                    }
                />

                <ScreenWidthRender
                    actionAfterRenderingWidth="show"
                    renderingWidth={1280}
                    content={
                        <Typography
                            variant={isSelected ? "labelMedium" : "bodyMedium"}
                            color="gray400"
                            text={label}
                        />
                    }
                />
            </ExpandableMenuItemTypographyWrapper>
        </ExpandableMenuItemContainer>
    );
};
