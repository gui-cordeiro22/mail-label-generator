// Palette
import { colors } from "./palette/colors";

// System
import { radii } from "./system/radii";
import { shadows } from "./system/shadows";
import { space } from "./system/space";
import { durations } from "./system/durations";
import { opacities } from "./system/opacities";
import { borders } from "./system/borders";

// Typography
import { fontSizes } from "./typography/font-sizes";
import { fontWeights } from "./typography/font-weights";
import { fonts } from "./typography/fonts";
import { letterSpacings } from "./typography/letter-spacings";
import { lineHeights } from "./typography/line-heights";

// Media queries
import { mediaQueries } from "./media-queries";

const theme = {
    palette: {
        colors,
    },
    system: {
        radii,
        shadows,
        space,
        durations,
        opacities,
        borders,
    },
    typography: {
        fontSizes,
        fontWeights,
        fonts,
        letterSpacings,
        lineHeights,
    },
    mediaQueries,
};

type Theme = typeof theme;

export { theme };
export type { Theme };
