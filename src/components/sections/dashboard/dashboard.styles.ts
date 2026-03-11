// Dependencies
import styled from "styled-components";

// Styles
import { pageGutter } from "@/styles/gutter";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;

    ${pageGutter}
`;
