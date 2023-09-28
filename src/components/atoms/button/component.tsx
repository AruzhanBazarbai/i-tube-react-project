import React from "react";
import styled from "styled-components";
import { Props } from "./props";
import {
  StyledUtils,
  ButtonUtils,
  Colors,
  FontSize,
  FontWeight,
  LineHeight,
} from "../../../common";

const StyledButton = styled.button<Props>`
  ${({
    size,
    color,
    hoverColor,
    border,
    textAlign,
    backgroundColor,
    borderRadius,
    fontSize,
    fontWeight,
    lineHeight,
    disabled,
    boxShadow,
    hoverBackgroundColor,
  }) => `
  ${StyledUtils.createTextTemplate({ fontWeight, fontSize, hoverColor, lineHeight, color })}
  background-color: ${backgroundColor};
  transition: all 0.2s linear;
  border: ${border};
  text-align: ${textAlign};
  border-radius: ${borderRadius};
  cursor: ${disabled ? "unset" : "pointer"};
  outline: none;
  box-shadow: ${boxShadow};
  padding: ${ButtonUtils.getButtonSize(size || "md")};

  &:hover {
    background-color: ${hoverBackgroundColor};
  }
  &:disabled {
    opacity: 0.6;
  }
  `}
`;

export const Button: React.FC<Props> = ({
  children,
  size = "lg",
  color = Colors.text.white,
  hoverColor = Colors.text.white,
  backgroundColor = Colors.background.black,
  disabled = false,
  border = "transparent",
  textAlign = "center",
  borderRadius = "0px",
  fontSize = FontSize.Default,
  fontWeight = FontWeight.Regular,
  lineHeight = LineHeight.Default,
  hoverBackgroundColor = Colors.background.black,
  ...rest
}) => (
  <StyledButton
    size={size}
    color={color}
    hoverColor={hoverColor}
    backgroundColor={backgroundColor}
    disabled={disabled}
    border={border}
    textAlign={textAlign}
    borderRadius={borderRadius}
    fontSize={fontSize}
    fontWeight={fontWeight}
    lineHeight={lineHeight}
    hoverBackgroundColor={hoverBackgroundColor}
    {...rest}
  >
    {children}
  </StyledButton>
);
