import React from "react";
import styled from "styled-components";
import { Props } from "./props";

const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Ul: React.FC<Props> = ({ children, style, className, ...rest }) => (
  <StyledUl style={style} className={className} {...rest}>
    {children}
  </StyledUl>
);
