// Dependencies
import { FunctionComponent } from "react";

// Styles
import {
    Container,
    Illustration,
    TextWrapper,
} from "./customer-chart-empty-state.styles";

// Types
import { CustomerChartEmptyStateProps } from "./customer-chart-empty-state.types";

export const CustomerChartEmptyState: FunctionComponent<
    CustomerChartEmptyStateProps
> = ({ illustrationSource, titleElement, descriptionElement }) => {
    return (
        <Container>
            <Illustration src={illustrationSource} alt="" />

            <TextWrapper>
                {titleElement}

                {descriptionElement}
            </TextWrapper>
        </Container>
    );
};
