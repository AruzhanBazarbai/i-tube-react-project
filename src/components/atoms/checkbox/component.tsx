import React from "react";
import styled from "styled-components";
import { Colors } from "../../../common";
import { Props } from "./props";

const CheckboxWrapper = styled.span`
  display: inline-block;
  position: relative;
`;
const StyledLabel = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
`;
const HiddenCheckbox = styled.input`
  clip: rect(0, 0, 0, 0);
  display: none;
  visibility: hidden;
  overflow: hidden;
  height: 1px;
  width: 1px;
  visibility: hidden;
`;

const StyledCheckbox = styled.div<{ checked: boolean }>`
  display: inline-block;
  position: relative;
  margin-right: 4px;
  width: 16px;
  height: 16px;
  border-radius: 2px;
  border: 1px solid ${Colors.border.primary};
  transition: all 150ms;

  &::after {
    content: "";
    position: absolute;
    left: 1.5px;
    top: 1px;
    width: 12px;
    height: 8px;
    border-radius: 1px;
    border-left: 3px solid #000000;
    border-bottom: 3px solid #000000;
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
    ${({ checked }) => `opacity: ${checked ? "1" : "0"};`}
  }
`;

export const Checkbox: React.FC<Props> = ({
  className,
  style,
  checked = false,
  disabled = false,
  onChange,
  children,
  name,
  ...rest
}) => (
  <CheckboxWrapper style={style} className={className} {...rest}>
    <StyledLabel htmlFor={name}>
      <HiddenCheckbox
        id={name}
        name={name}
        checked={checked}
        onClick={onChange}
        disabled={disabled}
      />
      <StyledCheckbox checked={checked} />
      {children}
    </StyledLabel>
  </CheckboxWrapper>
);
