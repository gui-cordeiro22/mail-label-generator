// Dependencies
import { FunctionComponent } from "react";

// Utils
import { TypographyProps } from "./typography.types";

// Styles
import { Container } from "./typography.styles";

export const Typography: FunctionComponent<TypographyProps> = ({
    variant,
    element = "p",
    color,
    text,
    hasOverflow,
    handleClick,
}) => {
    return (
        <Container
            className="pdg-typography"
            variant={variant}
            color={color}
            as={element as unknown as undefined}
            hasOverflow={!!hasOverflow}
            {...(!!handleClick && {
                onClick: handleClick,
                hasCursorPointer: true,
            })}
        >
            {text}
        </Container>
    );
};
