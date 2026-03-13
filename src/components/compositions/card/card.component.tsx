// Dependencies
import { FunctionComponent } from "react";

// Styles
import { Container, ContentWrapper } from "./card.styles";

// Types
import { CardProps } from "./card.types";
import { ConditionallyRender } from "@/components/utilities/conditionally-render";

export const Card: FunctionComponent<CardProps> = ({
    valueElement,
    labelElement,
    iconElement,
}) => {
    return (
        <Container>
            <ContentWrapper>
                {valueElement}

                {labelElement}
            </ContentWrapper>

            <ConditionallyRender
                shouldRender={!!iconElement}
                content={iconElement}
            />
        </Container>
    );
};
