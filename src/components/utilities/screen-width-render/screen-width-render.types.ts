// Dependencies
import { ReactNode } from "react";

export type ScreenWidthRenderActionAfterRenderingWidth = "hide" | "show";

export type ScreenWidthRenderData = {
    renderingWidth: number;
    actionAfterRenderingWidth: ScreenWidthRenderActionAfterRenderingWidth;
};

export type ScreenWidthRenderElements = {
    content: ReactNode;
};

export type ScreenWidthRenderProps = ScreenWidthRenderData &
    ScreenWidthRenderElements;
