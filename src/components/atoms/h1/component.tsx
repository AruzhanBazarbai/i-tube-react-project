import React from "react";
import styled from "styled-components";
import { Props } from "./props";
import {
  TextAttributes,
  FontSize,
  FontWeight,
  LineHeight,
  StyledUtils,
  Colors,
} from "../../../common";

const StyledH1 = styled.h1<Props>`
  ${({ lineHeight, fontSize, fontWeight, color }: TextAttributes) =>
    `${StyledUtils.createTextTemplate({ lineHeight, color, fontWeight, fontSize })}`}
`;

export const H1: React.FC<Props> = ({
  fontSize = FontSize.H1,
  fontWeight = FontWeight.Regular,
  lineHeight = LineHeight.H1,
  color = Colors.text.primary,
  ...rest
}) => (
  <StyledH1
    color={color}
    fontSize={fontSize}
    fontWeight={fontWeight}
    lineHeight={lineHeight}
    {...rest}
  />
);
