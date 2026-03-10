// Dependencies
import { Fragment, FunctionComponent } from "react";

// Types
import { ScreenWidthRenderProps } from "./screen-width-render.types";

// Utils
import { useWindowDimensions } from "@/hooks/window-dimensions";

export const ScreenWidthRender: FunctionComponent<ScreenWidthRenderProps> = ({
    actionAfterRenderingWidth,
    renderingWidth,
    content,
}) => {
    const { width: windowWidth } = useWindowDimensions();

    if (
        (actionAfterRenderingWidth === "hide" &&
            windowWidth >= renderingWidth) ||
        (actionAfterRenderingWidth === "show" && windowWidth < renderingWidth)
    ) {
        return null;
    }

    return <Fragment>{content}</Fragment>;
};
