// Types
import { ReactNode } from "react";

export type DefaultData = {
    isSidebarOpened: boolean;
};

export type DefaultElements = {
    sidebarSection: ReactNode;
    headerSection?: ReactNode;
    pageContent: ReactNode;
};

export type DefaultActions = {
    handleSidebarOutsideClick: () => void;
};

export type DefaultLayoutProps = DefaultData & DefaultElements & DefaultActions;

export type DefaultLayoutState = {
    sidebarIsOpened: boolean;
    sidebarIsExpanded: boolean;
};

export type DefaultLayoutActions = {
    clearState: () => void;
    setSidebarIsOpened: (isOpened: boolean) => void;
    setSidebarIsExpanded: (isExpanded: boolean) => void;
};

export type DefaultLayoutStore = {
    state: DefaultLayoutState;
    actions: DefaultLayoutActions;
};
