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
                    <h2>{titleElement}</h2>

                    <p>{subtitleElement}</p>
                </TextWraper>

                {networkSectionCompositions}
            </ContentWrapper>
        </Container>
    );
};
