// Dependencies
import { FunctionComponent } from "react";

// Styles
import { Container } from "./icon.styles";

// Types
import { IconProps } from "./icon.types";

// Assets
import { iconsSource } from "./icon.data";

export const Icon: FunctionComponent<IconProps> = ({
    size = 16,
    variant,
    color,
    isActive,
    spinType,
    handleClick,
}) => {
    const Svg = iconsSource[variant].source;

    return (
        <Container
            className="sisu-icon"
            size={size}
            color={color}
            hasCursorPointer={!!handleClick}
            isActive={!!isActive}
            spinType={spinType}
            type={iconsSource[variant].type}
            onClick={() => !!handleClick && handleClick()}
        >
            <Svg />
        </Container>
    );
};
