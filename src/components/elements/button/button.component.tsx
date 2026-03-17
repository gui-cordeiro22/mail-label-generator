// Dependencies
import { FunctionComponent } from "react";

// Styles
import { Container } from "./button.styles";

// Types
import { ButtonProps } from "./button.types";

export const Button: FunctionComponent<ButtonProps> = ({
  labelElement,
  handleClick,
  variant,
  isActive,
  isComingSoon,
  hasHoverEffect,
  ...defaultProps
}) => {
  return (
    <Container
      {...(!isComingSoon && { onClick: handleClick })}
      {...defaultProps}
      variant={variant}
      isActive={!!isActive}
      isComingSoon={!!isComingSoon}
      hasHoverEffect={!!hasHoverEffect}
    >
      {labelElement}
    </Container>
  );
};
