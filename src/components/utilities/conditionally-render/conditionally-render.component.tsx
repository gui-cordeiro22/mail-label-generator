// Dependencies
import { Fragment, FunctionComponent, useMemo } from "react";

// Types
import { ConditionallyRenderProps } from "./conditionally-render.types";

// Utils
import { useWindowDimensions } from "@/hooks/window-dimensions/window-dimensions";
import { getShouldRemoveContent } from "./conditionally-render.helpers";

export const ConditionallyRender: FunctionComponent<
    ConditionallyRenderProps
> = ({
    shouldRender = true,
    minimumBreakpoint,
    maximumBreakpoint,
    content,
}) => {
    const { width: windowWidth } = useWindowDimensions();

    const shouldRemoveContent = useMemo(
        () =>
            getShouldRemoveContent(
                windowWidth,
                shouldRender,
                minimumBreakpoint,
                maximumBreakpoint,
            ),
        [windowWidth, shouldRender, minimumBreakpoint, maximumBreakpoint],
    );

    if (shouldRemoveContent) {
        return null;
    }

    return <Fragment>{content}</Fragment>;
};
