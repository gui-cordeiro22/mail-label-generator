// Dependencies
import "styled-components";

// Theme
import { Theme } from ".";

declare module "styled-components" {
    type DefaultTheme = Theme;
}
