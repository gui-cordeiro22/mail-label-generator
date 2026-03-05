// Dependencies
import { ReactNode } from "react";

export type ConditionallyRenderScreen =
    | "mobile"
    | "mobileAuxiliary"
    | "tablet"
    | "tabletAuxiliary"
    | "desktopSmall"
    | "desktopSmallAuxiliary"
    | "desktopLarge"
    | "desktopLargeAuxiliary";

export type ConditionallyRenderData = {
    shouldRender?: boolean;
    minimumBreakpoint?: ConditionallyRenderScreen;
    maximumBreakpoint?: ConditionallyRenderScreen;
};

export type ConditionallyRenderElements = {
    content: ReactNode;
};

export type ConditionallyRenderProps = ConditionallyRenderData &
    ConditionallyRenderElements;
