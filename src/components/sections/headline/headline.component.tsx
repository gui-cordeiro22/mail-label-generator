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

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "6px",
                        }}
                    >
                        {subtitleElement}
                    </div>
                </TextWraper>

                {networkSectionCompositions}
            </ContentWrapper>
        </Container>
    );
};
