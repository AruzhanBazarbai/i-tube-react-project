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

const StyledH4 = styled.h4<Props>`
  ${({ lineHeight, fontSize, fontWeight, color }: TextAttributes) =>
    `${StyledUtils.createTextTemplate({ lineHeight, color, fontWeight, fontSize })}`}
`;

export const H4: React.FC<Props> = ({
  fontSize = FontSize.H4,
  fontWeight = FontWeight.Regular,
  lineHeight = LineHeight.H4,
  color = Colors.text.primary,
  ...rest
}) => (
  <StyledH4
    color={color}
    fontSize={fontSize}
    fontWeight={fontWeight}
    lineHeight={lineHeight}
    {...rest}
  />
);
