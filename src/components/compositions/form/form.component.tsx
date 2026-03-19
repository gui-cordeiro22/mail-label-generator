// Dependencies
import { FunctionComponent } from "react";

// Styles
import { Container, InputsWrapper } from "./form.styles";

// Types
import { FormProps } from "./form.types";

export const Form: FunctionComponent<FormProps> = ({
  inputsElements,
  submitButtonElement,
  handleSubmitForm,
}) => {
  return (
    <Container onSubmit={handleSubmitForm}>
      <InputsWrapper>{inputsElements}</InputsWrapper>

      {submitButtonElement}
    </Container>
  );
};
