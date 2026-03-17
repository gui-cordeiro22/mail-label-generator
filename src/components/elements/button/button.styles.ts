// Dependencies
import styled, { css } from "styled-components";

// Types
import { ButtonVariants } from "./button.types";

// Styles
import { theme } from "@/styles/theme";

type ContainerStyleProps = {
  variant: ButtonVariants;
  isActive: boolean;
  isComingSoon: boolean;
  hasHoverEffect?: boolean;
};

export const Container = styled.button<ContainerStyleProps>`
  background-color: inherit;
  padding: ${theme.system.space.xxxxs};
  border-radius: ${theme.system.radii.full};

  ${({ isComingSoon: isCommingSoon }) =>
    !!isCommingSoon &&
    css`
      background-color: ${theme.palette.colors["gray200"]};
      color: ${theme.palette.colors["gray500"]};
    `};

  ${({ isComingSoon: isCommingSoon, variant }) =>
    !isCommingSoon &&
    variant === "dark-cta" &&
    css`
      background-color: ${theme.palette.colors["warning500"]};
      color: ${theme.palette.colors["white"]};
    `};
`;
