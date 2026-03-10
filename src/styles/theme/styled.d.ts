/* eslint-disable @typescript-eslint/no-empty-object-type */
// Dependencies
import "styled-components";

// Theme
import { Theme } from ".";

declare module "styled-components" {
    export interface DefaultTheme extends Theme {}
}
