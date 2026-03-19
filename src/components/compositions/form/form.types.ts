// Dependencies
import { ReactNode } from "react";

export type FormElements = {
  inputsElements: ReactNode;
  submitButtonElement: ReactNode;
};

export type FormActions = {
  handleSubmitForm: () => void;
};

export type FormProps = FormElements & FormActions;
