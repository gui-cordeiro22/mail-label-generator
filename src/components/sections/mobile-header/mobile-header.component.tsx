// Dependencies
import { FunctionComponent } from "react";

// Styles
import { Container, ContentWrapper } from "./mobile-header.styles";

// Types
import { MobileHeaderProps } from "./mobile-header.types";

export const MobileHeader: FunctionComponent<MobileHeaderProps> = ({
  logoElement,
  navigationLinksCompositions,
}) => {
  return (
    <Container>
      <ContentWrapper>
        {logoElement}

        <div style={{ display: "flex", flexDirection: "row", gap: 16 }}>
          {navigationLinksCompositions}
        </div>
      </ContentWrapper>
    </Container>
  );
};
