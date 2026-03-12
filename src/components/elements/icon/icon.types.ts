// Types
import { Theme } from "@/styles/theme";
import { IconVariants, IconSpinType } from "@/assets";

export type IconData = {
    size?: number;
    variant: IconVariants;
    color: keyof Theme["palette"]["colors"];
    isActive?: boolean;
    spinType?: IconSpinType;
};

export type IconActions = {
    handleClick?: () => void;
};

export type IconProps = IconData & IconActions;
