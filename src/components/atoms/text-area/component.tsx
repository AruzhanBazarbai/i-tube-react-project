import React from "react";
import styled from "styled-components";
import { Props } from "./props";
import { Colors } from "../../../common";

const StyledTextArea = styled.textarea`
  ${() =>
    `
    display: block;
    height: 160px;
    margin: 0;
    padding: 20px 16px;
    border: 1px solid ${Colors.border.primary};
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    font-size: 16px;
    font-family: InterRegular;
    line-height: 19px;
    transition: all 0.2s linear;
    width: 100%;
    resize: none;
    
    &:hover, &:focus{
        outline: none;
        border: 1px solid ${Colors.border.focused};
        cursor: pointer;
    }
    `}
`;

export const TextArea: React.FC<Props> = ({ ...rest }: Props) => <StyledTextArea {...rest} />;
