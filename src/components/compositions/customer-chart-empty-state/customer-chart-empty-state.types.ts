// Dependencies
import { ReactNode } from "react";

export type CustomerChartEmptyStateData = {
    illustrationSource: string;
};

export type CustomerChartEmptyStateElements = {
    titleElement: ReactNode;
    descriptionElement?: ReactNode;
};

export type CustomerChartEmptyStateProps = CustomerChartEmptyStateData &
    CustomerChartEmptyStateElements;
