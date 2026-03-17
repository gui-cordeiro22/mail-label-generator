// Dependencies
import { FunctionComponent } from "react";

// Styles
import { Container } from "./chip.styles";

// Types
import { ChipProps } from "./chip.types";

export const Chip: FunctionComponent<ChipProps> = ({ labelElement }) => {
    return <Container>{labelElement}</Container>;
};
