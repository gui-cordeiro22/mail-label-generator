// Dependencies
import { MouseEvent } from "react";

// Types
import { Theme } from "@/styles/theme";
import { IconVariants, IconSpinType } from "@/assets";

export type IconData = {
    size?: number;
    variant: IconVariants;
    color: keyof Theme["palette"]["colors"];
    isActive?: boolean;
    hasCursorPointer?: boolean;
    spinType?: IconSpinType;
};

export type IconActions = {
    handleClick?: (event?: MouseEvent<HTMLDivElement>) => void;
};

export type IconProps = IconData & IconActions;
