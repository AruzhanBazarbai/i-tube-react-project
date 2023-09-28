import React from "react";
import styled from "styled-components";
import { TextAttributes, StyledUtils, FontSize, LineHeight, Colors } from "../../../common";
import { Props } from "./props";

const StyledP = styled.p<Props>`
  ${({ color, fontSize, fontWeight, lineHeight }: TextAttributes) => `
  ${StyledUtils.createTextTemplate({
    color,
    fontSize,
    fontWeight,
    lineHeight,
  })}
`}
`;

export const P: React.FC<Props> = ({
  color,
  fontWeight = 400,
  fontSize = FontSize.Default,
  lineHeight = LineHeight.Default,
  ...rest
}: Props) => (
  <StyledP
    lineHeight={lineHeight}
    fontWeight={fontWeight}
    fontSize={fontSize}
    color={color || Colors.text.primary}
    {...rest}
  />
);
