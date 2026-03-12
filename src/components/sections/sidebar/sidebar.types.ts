// Types
import { ReactNode } from "react";

export type SidebarData = {
    isOpened: boolean;
};

export type SidebarElements = {
    statusIconElement: ReactNode;
    logoImageElement: ReactNode;
    menusCompositions: ReactNode;
    footerMenusCompositions: ReactNode;
};

export type SidebarActions = {
    handleClick?: () => void;
};

export type SidebarProps = SidebarData & SidebarElements & SidebarActions;
