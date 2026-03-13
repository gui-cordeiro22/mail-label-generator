// Dependencies
import type { FunctionComponent } from "react";

// Components
import { ConditionallyRender } from "@/components/utilities/conditionally-render";

//Styles
import {
    Container,
    ContentWrapper,
    ErrorMessageWrapper,
    InputElement,
    InputElementWrapper,
} from "./input.styles";

// Types
import type { InputProps } from "./input.types";

export const Input: FunctionComponent<InputProps> = ({
    placeholder,
    iconElement,
    errorMessageElement,
    handleChange,
    ...defaultProps
}) => {
    return (
        <Container>
            <ContentWrapper>
                <InputElementWrapper hasError={!!errorMessageElement}>
                    <InputElement
                        type="text"
                        placeholder={placeholder}
                        onChange={handleChange}
                        {...defaultProps}
                    />

                    <ConditionallyRender
                        shouldRender={!!iconElement}
                        content={iconElement}
                    />
                </InputElementWrapper>

                <ErrorMessageWrapper>{errorMessageElement}</ErrorMessageWrapper>
            </ContentWrapper>
        </Container>
    );
};
