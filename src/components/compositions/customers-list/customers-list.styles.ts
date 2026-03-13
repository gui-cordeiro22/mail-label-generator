// Dependencies
import styled from "styled-components";

export const CustomerListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;

    padding: 0px 24px 24px 24px;
    width: 100%;
    margin: 0 auto;

    @media (min-width: 768px) {
        max-width: 677px;
        padding: 0px 40px 40px 40px;
    }

    @media (min-width: 1024px) {
        max-width: 972px;
        padding: 0px 40px 80px 40px;
    }

    @media (min-width: 1366px) {
        max-width: 1226px;
        padding: 0px 76px 80px 76px;
    }

    @media (min-width: 1920px) {
        max-width: 1440px;
    }
`;

export const CardsReportCompositionsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
    gap: ${({ theme }) => theme.system.space["xxxs"]};

    @media (min-width: 1024px) {
        grid-template-columns: 0.5fr 1fr;
        gap: ${({ theme }) => theme.system.space["sm"]};
    }
`;

export const CustomerListItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

export const CustomerListItemContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    padding: ${({ theme }) => theme.system.space["sm"]};
    background-color: ${({ theme }) => theme.palette.colors["white"]};
    gap: ${({ theme }) => theme.system.space["micro"]};
    border-radius: ${({ theme }) => theme.system.radii["md"]};
    user-select: none;
`;

export const AddressWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
    width: 100%;
    gap: ${({ theme }) => theme.system.space["nano"]};
`;
