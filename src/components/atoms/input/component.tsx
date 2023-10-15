import React from "react";
import styled from "styled-components";
import { Colors, FontSize, LineHeight, TextAttributes } from "../../../common";
import { Props } from "./props";

const StyledInput = styled.input<Props>`
  ${({ fontSize, lineHeight, color }: TextAttributes) =>
    `
    display: block;
    color: ${color};
    margin: 0;
    padding: 20px 16px;
    border: 1px solid ${Colors.border.primary};
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    font-size: ${fontSize};
    font-family: InterRegular;
    line-height: ${lineHeight};
    transition: all 0.2s linear;
    width: 100%;
    -webkit-appearance: none;
    
    &:hover, &:focus{
        outline: none;
        border: 1px solid ${Colors.border.focused};
        cursor: pointer;
    }
    `}
`;

export const Input: React.FC<Props> = ({
  fontSize = FontSize.Default,
  lineHeight = LineHeight.Default,
  color = Colors.text.primary,
  type = "text",
  registerTemplate,
  ...rest
}) => (
  <StyledInput
    color={color}
    fontSize={fontSize}
    lineHeight={lineHeight}
    type={type}
    {...registerTemplate}
    {...rest}
  />
);
