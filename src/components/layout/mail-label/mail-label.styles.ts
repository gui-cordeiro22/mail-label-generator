// Dependencies
import styled from "styled-components";

export const Container = styled.div`
  @page {
    size: A4;
    margin: 12mm;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 170mm;
  margin: 12mm auto;
  gap: ${({ theme }) => theme.system.space.immense};
`;

export const CustomerInformationsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
`;

export const Divider = styled.div`
  width: 100%;
  border-top: 1px dashed #000;
`;
