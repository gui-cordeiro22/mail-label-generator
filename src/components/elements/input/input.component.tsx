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
    value,
    ...defaultProps
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [internalValue, setInternalValue] = useState("");

    const isControlled = value !== undefined;
    const formattedInputValue = isControlled ? value : internalValue;

    return (
        <Container>
            <ContentWrapper>
                <InputElementWrapper hasError={!!errorMessageElement}>
                    <InputElement
                        type="text"
                        placeholder={placeholder}
                        value={formattedInputValue}
                        disabled={isDisabled}
                        onChange={(event) => {
                            if (!isControlled) {
                                setInternalValue(event.target.value);
                            }

                            handleChange?.(event);
                        }}
                        {...(!isDisabled && {
                            onFocus: (event) => {
                                setIsFocused(true);
                                defaultProps.onFocus?.(event);
                            },
                            onBlur: (event) => {
                                setIsFocused(false);
                                defaultProps.onBlur?.(event);
                            },
                        })}
                        {...defaultProps}
                    />

                    <ConditionallyRender
                        shouldRender={
                            !!labelElement &&
                            (isFocused || !!formattedInputValue)
                        }
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
