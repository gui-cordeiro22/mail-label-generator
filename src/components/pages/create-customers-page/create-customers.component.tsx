// Dependencies
import { Fragment, FunctionComponent } from "react";

// Types
import { CreateCustomersPageProps } from "./create-customers.types";

export const CreateCustomersPage: FunctionComponent<
  CreateCustomersPageProps
> = ({ headlineCompositions, registrationFormSection }) => {
  return (
    <Fragment>
      {headlineCompositions}

      {registrationFormSection}
    </Fragment>
  );
};
