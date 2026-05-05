// Dependencies
import { ReactNode } from "react";

export type MailLabelData = {
  nameLabel: string;
  addressLabel: string;
  cepLabel: string;
  neighborhoodLabel: string;
  cityLabel: string;

  customerName: string;
  customerAddress: string;
  customerCep: string;
  customerNeighborhood: string;
  customerCity: string;
  customerUf: string;

  senderName: string;
  senderAddress: string;
  senderCep: string;
  senderNeighborhood: string;
  senderCity: string;
  senderUf: string;
};

export type MailLabelElements = {
  customerSectionIcon: ReactNode;
  senderSectionIcon: ReactNode;
  scissorIconElement: ReactNode;
};

export type MailLabelProps = MailLabelData & MailLabelElements;
