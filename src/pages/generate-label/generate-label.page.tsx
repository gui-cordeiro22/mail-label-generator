// Dependencies
import { FunctionComponent } from "react";

// Components
import { MailLabelLayout } from "@/components/layout/mail-label";

// Utils
import { mailLabelData } from "@/components/layout/mail-label/mail-label.data";

export const GenerateLabel: FunctionComponent = () => {
  return (
    <MailLabelLayout
      nameLabel={mailLabelData.labels.name}
      addressLabel={mailLabelData.labels.address}
      neighborhoodLabel={mailLabelData.labels.neigborhood}
      cepLabel={mailLabelData.labels.cep}
      cityLabel={mailLabelData.labels.city}
      ufLabel={mailLabelData.labels.uf}
      customerName="Mariana Souza Almeida"
      customerAddress="Rua Barata Ribeiro nº 245"
      customerneighborhood="Copacabana"
      customerCep="22041001"
      customerCity="Rio de Janeiro"
      customerUf="RJ"
      senderName={mailLabelData.senderInformations.senderName}
      senderAddress={mailLabelData.senderInformations.senderAddress}
      senderneighborhood={mailLabelData.senderInformations.senderneighborhood}
      senderCep={mailLabelData.senderInformations.senderCep}
      senderCity={mailLabelData.senderInformations.senderCity}
      senderUf={mailLabelData.senderInformations.senderUf}
    />
  );
};
