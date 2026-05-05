// Dependencies
import { FunctionComponent } from "react";

// Components
import { MailLabelLayout } from "@/components/layout/mail-label";
import { Icon } from "@/components/elements/icon";

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
      customerName="Mariana Souza Almeida"
      customerAddress="Rua Barata Ribeiro nº 245"
      customerNeighborhood="Copacabana"
      customerCep="22041001"
      customerCity="Rio de Janeiro"
      customerUf="rj"
      senderName={mailLabelData.senderInformations.senderName}
      senderAddress={mailLabelData.senderInformations.senderAddress}
      senderNeighborhood={mailLabelData.senderInformations.senderneighborhood}
      senderCep={mailLabelData.senderInformations.senderCep}
      senderCity={mailLabelData.senderInformations.senderCity}
      senderUf={mailLabelData.senderInformations.senderUf}
      customerSectionIcon={<Icon variant="truck" color="gray500" size={40} />}
      senderSectionIcon={
        <Icon variant="closedPackage" color="gray500" size={40} />
      }
      scissorIconElement={
        <Icon variant="scissorsIcon" color="gray300" size={24} />
      }
    />
  );
};
