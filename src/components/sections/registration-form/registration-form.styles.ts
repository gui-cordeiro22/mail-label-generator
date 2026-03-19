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
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0 24px 24px;
  width: 100%;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 677px;
    padding: 0 40px 40px;
  }

  @media (min-width: 1024px) {
    max-width: 972px;
    padding: 0 40px 80px;
  }

  @media (min-width: 1366px) {
    max-width: 1226px;
    padding: 0 76px 80px;
  }

  @media (min-width: 1920px) {
    max-width: 1440px;
  }
`;

export const FormCompositionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.colors["white"]};
  border-radius: ${({ theme }) => theme.system.radii["md"]};
  padding: ${({ theme }) => theme.system.space["xxl"]};
`;
