// Dependencies
import { FunctionComponent } from "react";

// Styles
import { Container, ContentWrapper } from "./customers-list.styles";

// Types
import { CustomersListProps } from "./customers-list.types";

export const CustomersList: FunctionComponent<CustomersListProps> = ({
    customersListItemComposition,
}) => {
    return (
        <Container>
            <ContentWrapper>{customersListItemComposition}</ContentWrapper>
        </Container>
    );
};
