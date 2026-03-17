// Dependencies
import { useState, FunctionComponent } from "react";

// Components
import { ConditionallyRender } from "@/components/utilities/conditionally-render";

//Styles
import {
    Container,
    ContentWrapper,
    ErrorMessageWrapper,
    InputElement,
    InputElementWrapper,
    LabelWrapper,
} from "./input.styles";

// Types
import type { InputProps } from "./input.types";

export const Input: FunctionComponent<InputProps> = ({
    placeholder,
    isDisabled,
    iconElement,
    errorMessageElement,
    labelElement,
    handleChange,
    ...defaultProps
}) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <Container>
            <ContentWrapper>
                <InputElementWrapper hasError={!!errorMessageElement}>
                    <InputElement
                        type="text"
                        placeholder={placeholder}
                        onChange={handleChange}
                        {...(!isDisabled && {
                            onFocus: (event) => {
                                setIsFocused(true);

                                if (defaultProps.onFocus) {
                                    defaultProps.onFocus(event);
                                }
                            },
                            onBlur: (event) => {
                                setIsFocused(false);

                                if (defaultProps.onBlur) {
                                    defaultProps.onBlur(event);
                                }
                            },
                        })}
                        {...defaultProps}
                    />

                    <ConditionallyRender
                        shouldRender={!!labelElement}
                        content={
                            <LabelWrapper
                                isFocused={isFocused}
                                isDisabled={!!isDisabled}
                            >
                                {labelElement}
                            </LabelWrapper>
                        }
                    />

                    <ConditionallyRender
                        shouldRender={!!iconElement}
                        content={iconElement}
                    />
                </InputElementWrapper>

                <ConditionallyRender
                    shouldRender={!!errorMessageElement}
                    content={
                        <ErrorMessageWrapper>
                            {errorMessageElement}
                        </ErrorMessageWrapper>
                    }
                />
            </ContentWrapper>
        </Container>
    );
};
