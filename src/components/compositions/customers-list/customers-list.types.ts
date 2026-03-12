// Dependencies
import { ReactNode } from "react";

export type CustomersListElement = {
    customersListItemComposition: ReactNode;
};

export type CustomersListProps = CustomersListElement;

export type CustomersListItemElements = {
    customerNameElement: ReactNode;
    customerAddressElement: ReactNode;
};

export type CustomersListItemProps = CustomersListItemElements;
