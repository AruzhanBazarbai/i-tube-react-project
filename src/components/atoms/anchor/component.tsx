/* eslint-disable indent */
import React from "react";
import styled from "styled-components";
import { Props } from "./props";
import {
  Colors,
  FontSize,
  FontWeight,
  LineHeight,
  StyledUtils,
  TextAttributes,
} from "../../../common";

const StyledAnchor = styled.a<Props>`
  ${({ fontSize, fontWeight, lineHeight, color, hoverColor, blank }: TextAttributes) => `
    
    ${StyledUtils.createTextTemplate({
      fontSize,
      fontWeight,
      lineHeight,
      color,
      hoverColor,
      blank,
    })}
    cursor: pointer;
    text-decoration: none;
    transition: ${color} 0.2s linear;
    &:hover {
      color: ${hoverColor};
      text-decoration: underline;
      
      & svg path {
        fill: ${hoverColor};
      }
    }
    `}
`;

export const Anchor: React.FC<Props> = ({
  fontSize = FontSize.Default,
  fontWeight = FontWeight.Regular,
  lineHeight = LineHeight.Default,
  color = Colors.text.primary,
  hoverColor = color ?? Colors.text.primary,
  blank = false,
  ...rest
}) => (
  <StyledAnchor
    fontSize={fontSize}
    fontWeight={fontWeight}
    lineHeight={lineHeight}
    color={color}
    hoverColor={hoverColor}
    target={blank ? "_blank" : "_self"}
    {...rest}
  />
);
