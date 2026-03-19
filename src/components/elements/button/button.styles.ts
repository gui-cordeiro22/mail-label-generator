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

  ${({ isComingSoon: isCommingSoon }) =>
    !!isCommingSoon &&
    css`
      background-color: ${theme.palette.colors["gray200"]};
      border-radius: ${theme.system.radii.full};
      color: ${theme.palette.colors["gray500"]};
    `};

  ${({ isComingSoon, variant }) =>
    !isComingSoon &&
    variant === "dark-cta" &&
    css`
      background-color: ${theme.palette.colors["warning300"]};
      color: ${theme.palette.colors["white"]};
      transition: all 0.3s ease-in-out;
      border-radius: ${theme.system.radii.full};

      &:hover {
        background-color: ${theme.palette.colors["warning400"]};
      }
    `};

  ${({ isComingSoon, variant }) =>
    !isComingSoon &&
    variant === "link" &&
    css`
      background-color: transparent;
      transition: all 0.3s ease-in-out;
      padding: ${({ theme }) => theme.system.space["quarck"]};
    `};
`;
