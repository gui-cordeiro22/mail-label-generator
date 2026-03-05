// Dependencies
import { useEffect, useState } from "react";

// Types
import { WindowDimensionsProps } from "./window-dimensions.types";

export function useWindowDimensions(): WindowDimensionsProps {
    function getWindowDimensions(): WindowDimensionsProps {
        const { innerWidth: width, innerHeight: height } = window;
        return { width, height };
    }

    const [windowDimensions, setWindowDimensions] =
        useState<WindowDimensionsProps>(() => getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            const newDimensions = getWindowDimensions();

            setWindowDimensions((prevDimensions) => {
                if (
                    prevDimensions.width !== newDimensions.width ||
                    prevDimensions.height !== newDimensions.height
                ) {
                    return newDimensions;
                }

                return prevDimensions;
            });
        }

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
}
