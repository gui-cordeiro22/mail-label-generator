// Types
import { IconVariants, IconSpinType } from "@/assets";

export type IconData = {
    size?: number;
    variant: IconVariants;
    color: string;
    isActive?: boolean;
    spinType?: IconSpinType;
};

export type IconActions = {
    handleClick?: () => void;
};

export type IconProps = IconData & IconActions;
