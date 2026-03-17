// Dependencies
import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: ${({ theme }) => theme.system.space["sm"]};
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  gap: ${({ theme }) => theme.system.space["sm"]};

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;
