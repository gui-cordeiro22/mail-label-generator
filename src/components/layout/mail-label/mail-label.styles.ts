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
  gap: ${({ theme }) => theme.system.space["xxxxl"]};
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  gap: ${({ theme }) => theme.system.space["micro"]};

  .pdg-logo {
    width: 100px;
  }
`;

export const InformationsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: ${({ theme }) => theme.system.space["micro"]};
`;

export const InformationLabel = styled.p`
  font-family: ${({ theme }) => theme.typography.fonts["default"]};
  font-size: ${({ theme }) => theme.typography.fontSizes["lg"]};
  font-weight: ${({ theme }) => theme.typography.fontWeights["bold"]};
`;

export const InformationValue = styled.p`
  font-family: ${({ theme }) => theme.typography.fonts["default"]};
  font-size: ${({ theme }) => theme.typography.fontSizes["lg"]};
  font-weight: ${({ theme }) => theme.typography.fontWeights["regular"]};
`;

export const DividerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: ${({ theme }) => theme.system.space["micro"]};
`;

export const Divider = styled.div`
  width: 100%;
  border-top: 2px dashed ${({ theme }) => theme.palette.colors["gray300"]};
`;
