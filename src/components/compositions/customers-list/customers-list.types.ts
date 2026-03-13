// Dependencies
import { ReactNode } from "react";

export type CustomersListElement = {
    cardsReportCompositions?: ReactNode;
    customersListItemComposition: ReactNode;
};

export type CustomersListProps = CustomersListElement;

export type CustomersListItemElements = {
    customerNameElement: ReactNode;
    customerAddressElement: ReactNode;
    iconElement?: ReactNode;
};

export type CustomersListItemProps = CustomersListItemElements;
