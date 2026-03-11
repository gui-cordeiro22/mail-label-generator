// Dependencies
import { FunctionComponent } from "react";

// Styles
import { Container, ContentWrapper, TextWraper } from "./header.styles";

// Types
import { HeaderProps } from "./header.types";

export const Header: FunctionComponent<HeaderProps> = ({
    titleElement: title,
    subtitleElement: subtitle,
    networkSectionCompositions,
}) => {
    return (
        <Container>
            <ContentWrapper>
                <TextWraper>
                    <h2>{title}</h2>

                    <p>{subtitle}</p>
                </TextWraper>

                {networkSectionCompositions}
            </ContentWrapper>
        </Container>
    );
};
