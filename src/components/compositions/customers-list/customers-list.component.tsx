// Dependencies
import { FunctionComponent } from "react";

// Components
import { ConditionallyRender } from "@/components/utilities/conditionally-render";

// Styles
import {
    CustomerListContainer,
    ContentWrapper,
    CustomerListItemContainer,
    CustomerListItemContentWrapper,
    AddressWrapper,
    CardsReportCompositionsWrapper,
    CustomerInformationWrapper,
} from "./customers-list.styles";

// Types
import {
    CustomersListItemProps,
    CustomersListProps,
} from "./customers-list.types";

export const CustomersList: FunctionComponent<CustomersListProps> = ({
    cardsReportCompositions,
    customersListItemComposition,
}) => {
    return (
        <CustomerListContainer>
            <ContentWrapper>
                <CardsReportCompositionsWrapper>
                    {cardsReportCompositions}
                </CardsReportCompositionsWrapper>

                {customersListItemComposition}
            </ContentWrapper>
        </CustomerListContainer>
    );
};

export const CustomersListItem: FunctionComponent<CustomersListItemProps> = ({
    customerNameElement,
    customerAddressElement,
    iconElement,
    contextMenuIconElement,
    handleClick,
}) => {
    return (
        <CustomerListItemContainer onClick={handleClick}>
            <CustomerListItemContentWrapper>
                <CustomerInformationWrapper>
                    {customerNameElement}

                    <AddressWrapper>
                        <ConditionallyRender
                            shouldRender={!!iconElement}
                            content={iconElement}
                        />

                        {customerAddressElement}
                    </AddressWrapper>
                </CustomerInformationWrapper>

                {contextMenuIconElement}
            </CustomerListItemContentWrapper>
        </CustomerListItemContainer>
    );
};
