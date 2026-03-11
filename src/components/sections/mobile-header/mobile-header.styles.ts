// Dependencies
import styled from "styled-components";

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
    align-items: center;
    justify-content: space-between;

    padding: 24px;
    width: 100%;
    margin: 0 auto;

    @media (min-width: 768px) {
        max-width: 677px;
    }

    @media (min-width: 1024px) {
        max-width: 972px;
    }

    @media (min-width: 1366px) {
        max-width: 1226px;
    }

    @media (min-width: 1920px) {
        max-width: 1440px;
    }

    .pdg-logo {
        width: 90px;
    }
`;
