// Types
import { ReactNode } from "react";

export type MenuData = {
    label: string;
    isSidebarOpened: boolean;
};

export type MenuElements = {
    menuItemCompositions: ReactNode;
};

export type MenuProps = MenuData & MenuElements;

export type MenuItemData = {
    label: string;
    navigationSource?: string;
    isSidebarOpened: boolean;
    isSelected?: boolean;
    isComingSoon?: boolean;
    isExpandable?: boolean;
    hasClampLines?: boolean;
};

export type MenuItemElements = {
    indicatorIconElement?: ReactNode;
    actionIconElement?: ReactNode;
    menuExpandableItemCompositions?: ReactNode;
};

export type MenuItemActions = {
    handleClick?: () => void;
};

export type MenuItemProps = MenuItemData & MenuItemElements & MenuItemActions;

export type ExpandableMenuItemData = {
    label: string;
    isSelected?: boolean;
    hasIndicator?: boolean;
    hasOverflow?: boolean;
};
export type ExpandableMenuItemActions = {
    handleClick: () => void;
};

export type ExpandableMenuItemProps = ExpandableMenuItemData &
    ExpandableMenuItemActions;
