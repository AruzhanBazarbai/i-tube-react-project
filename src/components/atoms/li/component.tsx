import React from "react";
import styled from "styled-components";
import {
  Colors,
  FontSize,
  FontWeight,
  LineHeight,
  StyledUtils,
  TextAttributes,
} from "../../../common";
import { Props } from "./props";

const StyledLi = styled.li<Props>`
  ${({ fontSize, fontWeight, color, lineHeight }: TextAttributes) => `
        ${StyledUtils.createTextTemplate({ fontSize, fontWeight, color, lineHeight })};
    `}
`;

export const Li: React.FC<Props> = ({
  fontSize = FontSize.Default,
  fontWeight = FontWeight.Regular,
  color = Colors.text.primary,
  lineHeight = LineHeight.Default,
  style,
  className,
  children,
  ...rest
}) => (
  <StyledLi
    fontSize={fontSize}
    lineHeight={lineHeight}
    fontWeight={fontWeight}
    color={color}
    style={style}
    className={className}
    {...rest}
  >
    {children}
  </StyledLi>
);
