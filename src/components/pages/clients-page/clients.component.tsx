// Dependencies
import { Fragment, FunctionComponent } from "react";

// Types
import { ClientsPageProps } from "./clients.types";

export const ClientsPage: FunctionComponent<ClientsPageProps> = ({
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
