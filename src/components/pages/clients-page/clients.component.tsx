// Dependencies
import { Fragment, FunctionComponent } from "react";

// Types
import { ClientsPageProps } from "./clients.types";

export const ClientsPage: FunctionComponent<ClientsPageProps> = ({
    titleElement,
    descriptionElement,
    clientsListSection,
}) => {
    return (
        <Fragment>
            {titleElement}

            {descriptionElement}

            {clientsListSection}
        </Fragment>
    );
};
