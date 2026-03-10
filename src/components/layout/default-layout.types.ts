// Types
import { ReactNode } from "react";

export type DefaultData = {
    isSidebarOpened: boolean;
};

export type DefaultElements = {
    sidebarSection: ReactNode;
    headerSection: ReactNode;
    pageContent: ReactNode;
};

export type DefaultActions = {
    handleSidebarOutsideClick: () => void;
};

export type DefaultLayoutProps = DefaultData & DefaultElements & DefaultActions;
