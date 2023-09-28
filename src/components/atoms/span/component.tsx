import React from "react";
import styled from "styled-components";
import { FontSize, FontWeight, LineHeight, StyledUtils, Colors } from "../../../common";
import { Props } from "./props";

const StyledSpan = styled.span<Props>`
  ${({ color, hoverColor, fontSize, fontWeight, lineHeight }) =>
    `
    margin: 0;
    padding: 0; 
    ${StyledUtils.createTextTemplate({ color, hoverColor, fontSize, fontWeight, lineHeight })}`}
`;

export const Span: React.FC<Props> = ({
  color = Colors.text.primary,
  hoverColor = color ?? Colors.text.primary,
  fontSize = FontSize.Default,
  fontWeight = FontWeight.Regular,
  lineHeight = LineHeight.Default,
  ...rest
}) => (
  <StyledSpan
    color={color}
    hoverColor={hoverColor}
    fontSize={fontSize}
    fontWeight={fontWeight}
    lineHeight={lineHeight}
    {...rest}
  />
);
