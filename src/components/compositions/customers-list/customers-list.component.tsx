// Dependencies
import { FunctionComponent } from "react";

// Styles
import {
    CustomerListContainer,
    ContentWrapper,
    CustomerListItemContainer,
    CustomerListItemContentWrapper,
} from "./customers-list.styles";

// Types
import {
    CustomersListItemProps,
    CustomersListProps,
} from "./customers-list.types";

export const CustomersList: FunctionComponent<CustomersListProps> = ({
    customersListItemComposition,
}) => {
    return (
        <CustomerListContainer>
            <ContentWrapper>{customersListItemComposition}</ContentWrapper>
        </CustomerListContainer>
    );
};

export const CustomersListItem: FunctionComponent<CustomersListItemProps> = ({
    customerNameElement,
    customerAddressElement,
    handleClick,
}) => {
    return (
        <CustomerListItemContainer onClick={handleClick}>
            <CustomerListItemContentWrapper>
                {customerNameElement}

                {customerAddressElement}
            </CustomerListItemContentWrapper>
        </CustomerListItemContainer>
    );
};
