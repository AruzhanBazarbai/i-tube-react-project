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

const StyledH6 = styled.h6<Props>`
  ${({ lineHeight, fontSize, fontWeight, color }: TextAttributes) =>
    `${StyledUtils.createTextTemplate({ lineHeight, color, fontWeight, fontSize })}`}
`;

export const H6: React.FC<Props> = ({
  fontSize = FontSize.H6,
  fontWeight = FontWeight.Regular,
  lineHeight = LineHeight.H6,
  color = Colors.text.primary,
  ...rest
}) => (
  <StyledH6
    color={color}
    fontSize={fontSize}
    fontWeight={fontWeight}
    lineHeight={lineHeight}
    {...rest}
  />
);
