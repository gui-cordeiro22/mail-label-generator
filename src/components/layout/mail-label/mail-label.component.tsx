// Dependencies
import { FunctionComponent } from "react";

// Styles
import {
  Container,
  ContentWrapper,
  Divider,
  DividerWrapper,
  InformationLabel,
  InformationsWrapper,
  InformationValue,
} from "./mail-label.styles";

// Types
import { MailLabelProps } from "./mail-label.types";

// Helpers
import { formattedCepBuilder } from "@/utils/helpers/format-cep";
import { formatAddressBuilder } from "@/utils/helpers/format-address";

export const MailLabelLayout: FunctionComponent<MailLabelProps> = ({
  nameLabel,
  addressLabel,
  cepLabel,
  neighborhoodLabel,
  cityLabel,
  customerName,
  customerAddress,
  customerCep,
  customerCity,
  customerUf,
  customerNeighborhood,
  senderName,
  senderAddress,
  senderCep,
  senderNeighborhood,
  senderCity,
  senderUf,
  customerSectionIcon,
  senderSectionIcon,
  scissorIconElement,
}) => {
  return (
    <Container>
      <ContentWrapper>
        {customerSectionIcon}

        <InformationsWrapper>
          <InformationLabel>{nameLabel}</InformationLabel>

          <InformationValue>{customerName}</InformationValue>
        </InformationsWrapper>

        <InformationsWrapper>
          <InformationLabel>{addressLabel}</InformationLabel>

          <InformationValue>{customerAddress}</InformationValue>
        </InformationsWrapper>

        <InformationsWrapper>
          <InformationLabel>{cepLabel}</InformationLabel>

          <InformationValue>
            {formattedCepBuilder(customerCep)}
          </InformationValue>
        </InformationsWrapper>

        <InformationsWrapper>
          <InformationLabel>{neighborhoodLabel}</InformationLabel>

          <InformationValue>{customerNeighborhood}</InformationValue>
        </InformationsWrapper>

        <InformationsWrapper>
          <InformationLabel>{cityLabel}</InformationLabel>

          <InformationValue>
            {formatAddressBuilder(customerCity, customerUf)}
          </InformationValue>
        </InformationsWrapper>
      </ContentWrapper>

      <DividerWrapper>
        {scissorIconElement}

        <Divider />
      </DividerWrapper>

      <ContentWrapper>
        {senderSectionIcon}

        <InformationsWrapper>
          <InformationLabel>{nameLabel}</InformationLabel>

          <InformationValue>{senderName}</InformationValue>
        </InformationsWrapper>

        <InformationsWrapper>
          <InformationLabel>{addressLabel}</InformationLabel>

          <InformationValue>{senderAddress}</InformationValue>
        </InformationsWrapper>

        <InformationsWrapper>
          <InformationLabel>{cepLabel}</InformationLabel>

          <InformationValue>{formattedCepBuilder(senderCep)}</InformationValue>
        </InformationsWrapper>

        <InformationsWrapper>
          <InformationLabel>{neighborhoodLabel}</InformationLabel>

          <InformationValue>{senderNeighborhood}</InformationValue>
        </InformationsWrapper>

        <InformationsWrapper>
          <InformationLabel>{cityLabel}</InformationLabel>

          <InformationValue>
            {formatAddressBuilder(senderCity, senderUf)}
          </InformationValue>
        </InformationsWrapper>
      </ContentWrapper>
    </Container>
  );
};
