// Dependencies
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: ${({ theme }) => theme.palette.colors["white"]};
    padding: ${({ theme }) => theme.system.space["md"]};
    gap: ${({ theme }) => theme.system.space["xxxxs"]};
    border-radius: ${({ theme }) => theme.system.radii["md"]};
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: ${({ theme }) => theme.system.space["xxxxs"]};
`;
