/* eslint-disable indent */
import React from "react";
import styled from "styled-components";
import { Props } from "./props";
import { Colors } from "../../../common";

const RadioWrapper = styled.div`
  display: inline-block;
`;

const Mark = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  position: relative;
  border: 1px solid ${Colors.border.primary};
  border-radius: 50%;
  vertical-align: middle;
  left: 0;
  margin-right: 4px;
  
  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    border-radius: 50%;
    background-color: ${Colors.background.black};
    top: 50%;
    left: 50%;
    opacity 0;
    transition: all 110ms;
  }
`;

const Label = styled.label<Props>`
  ${({ disabled }: Props) =>
    `
    position: relative;
    cursor: pointer;
    display: flex;
    align-items:center;

    ${
      disabled &&
      `
        cursor: not-allowed;
        opacity: 0.4;
    `
    }
    `}
`;

const Input = styled.input`
  position: absolute;
  visibility: hidden;
  display: none;

  &:checked + ${Mark} {
    &::after {
      width: 8px;
      height: 8px;
      left: 50%;
      top: 50%;
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }
`;

export const RadioButton: React.FC<Props> = ({
  checked = false,
  disabled = false,
  name,
  value,
  className,
  style,
  children,
  onChange,
}: Props) => (
  <RadioWrapper style={style} className={className}>
    <Label disabled={disabled} htmlFor={name}>
      <Input
        id={name}
        name={name}
        value={value}
        type="radio"
        onClick={onChange}
        checked={checked}
        disabled={disabled}
      />
      <Mark />
      {children}
    </Label>
  </RadioWrapper>
);
