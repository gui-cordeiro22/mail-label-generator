// Utils
import { ternary } from "@/utils/ternary";

// Data
import { screenWidths } from "./conditionally-render.data";

// Types
import { ConditionallyRenderScreen } from "./conditionally-render.types";

export const getShouldRemoveContent = (
    windowWidth: number,
    shouldRender?: boolean,
    minimumBreakpoint?: ConditionallyRenderScreen,
    maximumBreakpoint?: ConditionallyRenderScreen,
) => {
    const shouldRemoveContentBasedOnBreakpoints =
        ternary([
            [
                !!minimumBreakpoint &&
                    !!maximumBreakpoint &&
                    (windowWidth < screenWidths[minimumBreakpoint] ||
                        windowWidth >= screenWidths[maximumBreakpoint]),
                true,
            ],
            [
                !!minimumBreakpoint &&
                    !maximumBreakpoint &&
                    windowWidth < screenWidths[minimumBreakpoint],
                true,
            ],
            [
                !minimumBreakpoint &&
                    !!maximumBreakpoint &&
                    windowWidth >= screenWidths[maximumBreakpoint],
                true,
            ],
        ]) ?? false;

    return (
        ((!!minimumBreakpoint || !!maximumBreakpoint) &&
            shouldRemoveContentBasedOnBreakpoints) ||
        !shouldRender
    );
};
