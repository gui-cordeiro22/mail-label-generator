// Dependencies
import { useState, FunctionComponent, useRef } from "react";

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
  ...defaultProps
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputParentRef = useRef(null);

  // eslint-disable-next-line react-hooks/refs, @typescript-eslint/no-explicit-any
  const inputValue = (inputParentRef.current as any)?.querySelector(
    "input",
  )?.value;

  return (
    <Container>
      <ContentWrapper>
        <InputElementWrapper
          hasError={!!errorMessageElement}
          ref={inputParentRef}
        >
          <InputElement
            {...defaultProps}
            type="text"
            placeholder={placeholder}
            disabled={isDisabled}
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
          />

          <ConditionallyRender
            shouldRender={!!labelElement && (isFocused || !!inputValue)}
            content={
              <LabelWrapper isFocused={isFocused} isDisabled={!!isDisabled}>
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
            <ErrorMessageWrapper>{errorMessageElement}</ErrorMessageWrapper>
          }
        />
      </ContentWrapper>
    </Container>
  );
};
