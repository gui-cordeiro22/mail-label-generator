// Dependencies
import { FunctionComponent } from "react";

// Styles
import { Container, ContentWrapper } from "./form.styles";

// Types
import { FormProps } from "./form.types";

export const Form: FunctionComponent<FormProps> = ({
  inputsElements,
  submitButtonElement,
}) => {
  return (
    <Container>
      <ContentWrapper>{inputsElements}</ContentWrapper>

      {submitButtonElement}
    </Container>
  );
};
