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

const StyledH3 = styled.h3<Props>`
  ${({ lineHeight, fontSize, fontWeight, color }: TextAttributes) =>
    `${StyledUtils.createTextTemplate({ lineHeight, color, fontWeight, fontSize })}`}
`;

export const H3: React.FC<Props> = ({
  fontSize = FontSize.H3,
  fontWeight = FontWeight.Regular,
  lineHeight = LineHeight.H3,
  color = Colors.text.primary,
  ...rest
}) => (
  <StyledH3
    color={color}
    fontSize={fontSize}
    fontWeight={fontWeight}
    lineHeight={lineHeight}
    {...rest}
  />
);
