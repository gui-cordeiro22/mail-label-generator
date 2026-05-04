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
  ActionButtonsWrapper,
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
  actionMenuElement,
  handleClick,
}) => {
  return (
    <CustomerListItemContainer onClick={handleClick}>
      <CustomerListItemContentWrapper>
        <CustomerInformationWrapper>
          {customerNameElement}

          <AddressWrapper>
            {customerAddressElement}

            <ActionButtonsWrapper>
              <ConditionallyRender
                shouldRender={!!actionMenuElement}
                content={actionMenuElement}
              />
            </ActionButtonsWrapper>

            <ConditionallyRender
              shouldRender={!!iconElement}
              content={iconElement}
            />
          </AddressWrapper>
        </CustomerInformationWrapper>

        {contextMenuIconElement}
      </CustomerListItemContentWrapper>
    </CustomerListItemContainer>
  );
};
