// Dependencies
import type { FunctionComponent } from "react";

// Components
import { ConditionallyRender } from "@/components/utilities/conditionally-render";

//Styles
import {
    Container,
    ContentWrapper,
    ErrorMessageWrapper,
    IconElement,
    InputElement,
    InputElementWrapper,
} from "./input.styles";

// Types
import type { InputProps } from "./input.types";

export const Input: FunctionComponent<InputProps> = ({
    placeholder,
    icon,
    errorMessage,
    handleChange,
    ...defaultProps
}) => {
    return (
        <Container>
            <ContentWrapper>
                <InputElementWrapper hasError={!!errorMessage}>
                    <InputElement
                        type="text"
                        placeholder={placeholder}
                        onChange={handleChange}
                        {...defaultProps}
                    />

                    <ConditionallyRender
                        shouldRender={!!icon}
                        content={<IconElement src={icon} />}
                    />
                </InputElementWrapper>

                <ErrorMessageWrapper>{errorMessage}</ErrorMessageWrapper>
            </ContentWrapper>
        </Container>
    );
};
