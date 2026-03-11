// Dependencies
import { FunctionComponent } from "react";

// Styles
import { Container, ContentWrapper, TextWraper } from "./headline.styles";

// Types
import { HeadlineProps } from "./headline.types";

export const Headline: FunctionComponent<HeadlineProps> = ({
    titleElement,
    subtitleElement,
    networkSectionCompositions,
}) => {
    return (
        <Container>
            <ContentWrapper>
                <TextWraper>
                    {titleElement}

                    {subtitleElement}
                </TextWraper>

                {networkSectionCompositions}
            </ContentWrapper>
        </Container>
    );
};
