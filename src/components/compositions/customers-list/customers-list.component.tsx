// Dependencies
import { FunctionComponent } from "react";

// Styles
import {
    CustomerListContainer,
    ContentWrapper,
    CustomerListItemContainer,
    CustomerListItemContentWrapper,
    AddressWrapper,
} from "./customers-list.styles";

// Types
import {
    CustomersListItemProps,
    CustomersListProps,
} from "./customers-list.types";
import { ConditionallyRender } from "@/components/utilities/conditionally-render";

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
    iconElement,
}) => {
    return (
        <CustomerListItemContainer>
            <CustomerListItemContentWrapper>
                {customerNameElement}

                <AddressWrapper>
                    <ConditionallyRender
                        shouldRender={!!iconElement}
                        content={iconElement}
                    />

                    {customerAddressElement}
                </AddressWrapper>
            </CustomerListItemContentWrapper>
        </CustomerListItemContainer>
    );
};
