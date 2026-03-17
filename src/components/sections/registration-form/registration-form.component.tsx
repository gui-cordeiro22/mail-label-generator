// Dependencies
import { FunctionComponent } from "react";

// Styles
import { Container, ContentWrapper } from "./registration-form.styles";

// Types
import { RegistrationFormProps } from "./registration-form.types";

export const RegistrationForm: FunctionComponent<RegistrationFormProps> = ({
    formCompositions,
}) => {
    return (
        <Container>
            <ContentWrapper>{formCompositions}</ContentWrapper>
        </Container>
    );
};
