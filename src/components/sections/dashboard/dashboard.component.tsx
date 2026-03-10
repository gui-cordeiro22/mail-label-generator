// Dependencies
import { FunctionComponent } from "react";

// Styles
import { Container, ContentWrapper } from "./dashboard.styles";

// Types
import { DashboardSectionProps } from "./dashboard.types";

export const DashboardSection: FunctionComponent<DashboardSectionProps> = ({
    customersChartCompositions,
}) => {
    return (
        <Container>
            <ContentWrapper>{customersChartCompositions}</ContentWrapper>
        </Container>
    );
};
