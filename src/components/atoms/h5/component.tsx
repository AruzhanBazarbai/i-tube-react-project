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

const StyledH5 = styled.h5<Props>`
  ${({ lineHeight, fontSize, fontWeight, color }: TextAttributes) =>
    `${StyledUtils.createTextTemplate({ lineHeight, color, fontWeight, fontSize })}`}
`;

export const H5: React.FC<Props> = ({
  fontSize = FontSize.H5,
  fontWeight = FontWeight.Regular,
  lineHeight = LineHeight.H5,
  color = Colors.text.primary,
  ...rest
}) => (
  <StyledH5
    color={color}
    fontSize={fontSize}
    fontWeight={fontWeight}
    lineHeight={lineHeight}
    {...rest}
  />
);
