// Ddependencies
import { FunctionComponent } from "react";

// Styles
import {
  Container,
  CustomerInformationsWrapper,
  Divider,
} from "./mail-label.styles";

// Types
import { MailLabelProps } from "./mail-label.types";

export const MailLabelLayout: FunctionComponent<MailLabelProps> = ({
  nameLabel,
  addressLabel,
  cepLabel,
  neighborhoodLabel,
  cityLabel,
  ufLabel,
  customerName,
  customerAddress,
  customerCep,
  customerCity,
  customerUf,
  customerneighborhood,
  senderName,
  senderAddress,
  senderCep,
  senderneighborhood,
  senderCity,
  senderUf,
}) => {
  return (
    <Container>
      <CustomerInformationsWrapper>
        <p>
          {nameLabel} {customerName}
        </p>

        <p>
          {addressLabel} {customerAddress}
        </p>

        <p>
          {cepLabel} {customerCep}
        </p>

        <p>
          {neighborhoodLabel} {customerneighborhood}
        </p>

        <p>
          {cityLabel} {customerCity}
        </p>

        <p>
          {ufLabel} {customerUf}
        </p>
      </CustomerInformationsWrapper>

      <Divider />

      <CustomerInformationsWrapper>
        <p>Nome: {senderName}</p>

        <p>Endereço: {senderAddress}</p>

        <p>CEP: {senderCep}</p>

        <p>Bairro: {senderneighborhood}</p>

        <p>Cidade: {senderCity}</p>

        <p>Estado: {senderUf}</p>
      </CustomerInformationsWrapper>
    </Container>
  );
};
