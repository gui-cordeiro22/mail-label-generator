// Dependencies
import { Fragment, FunctionComponent } from "react";

// Components
import { ConditionallyRender } from "@/components/utilities/conditionally-render";

// Styles
import { Container, ContentWrapper } from "./card.styles";

// Types
import { CardProps } from "./card.types";

export const Card: FunctionComponent<CardProps> = ({
    content,
    labelElement,
    iconElement,
    variant,
}) => {
    return (
        <Fragment>
            <ConditionallyRender
                shouldRender={variant === "report"}
                content={
                    <Container>
                        <ContentWrapper>
                            {content}

                            {labelElement}
                        </ContentWrapper>

                        <ConditionallyRender
                            shouldRender={!!iconElement}
                            content={iconElement}
                        />
                    </Container>
                }
            />

            <ConditionallyRender
                shouldRender={variant === "input"}
                content={
                    <Container>
                        <ContentWrapper>
                            {labelElement}

                            {content}
                        </ContentWrapper>

                        <ConditionallyRender
                            shouldRender={!!iconElement}
                            content={iconElement}
                        />
                    </Container>
                }
            />
        </Fragment>
    );
};
