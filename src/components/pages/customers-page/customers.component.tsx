// Dependencies
import { Fragment, FunctionComponent } from "react";

// Types
import { CustomersPageProps } from "./customers.types";

export const CustomersPage: FunctionComponent<CustomersPageProps> = ({
  headlineCompositions,
  clientsListSection,
}) => {
  return (
    <Fragment>
      {headlineCompositions}

      {clientsListSection}
    </Fragment>
  );
};
