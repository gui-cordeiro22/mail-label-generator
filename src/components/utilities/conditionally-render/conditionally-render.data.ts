// Types
import { ConditionallyRenderScreen } from "./conditionally-render.types";

export const screenWidths: { [key in ConditionallyRenderScreen]: number } = {
    mobile: 360,
    mobileAuxiliary: 560,
    tablet: 768,
    tabletAuxiliary: 1024,
    desktopSmall: 1280,
    desktopSmallAuxiliary: 1366,
    desktopLarge: 1920,
    desktopLargeAuxiliary: 1536,
};
