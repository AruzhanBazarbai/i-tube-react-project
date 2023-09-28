/* eslint-disable indent */
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Props } from "./props";
import { Colors, FontSize, FontWeight, LineHeight, StyledUtils } from "../../../common";

const StyledLinkAnchor = styled.a<Props>`
  ${({ fontSize, fontWeight, lineHeight, color, hoverColor, blank, showUnderline }: Props) => `
    
    ${StyledUtils.createTextTemplate({
      fontSize,
      fontWeight,
      lineHeight,
      color,
      hoverColor,
      blank,
    })}
  
    cursor: pointer;
    text-decoration: none;
    transition: ${color} 0.2s linear;

    &:hover {
      text-decoration: ${showUnderline ? "underline" : "none"};
      color: ${hoverColor};
    }
    `}
`;

export const NavLink: React.FC<Props> = ({
  fontSize = FontSize.Default,
  fontWeight = FontWeight.Regular,
  lineHeight = LineHeight.Default,
  children,
  color = Colors.text.primary,
  hoverColor = color ?? Colors.text.primary,
  blank,
  onClick,
  className,
  style,
  href,
  showUnderline,
  ...rest
}) => (
  <Link to={href} className="text-decoration-none">
    <StyledLinkAnchor
      showUnderline={showUnderline}
      fontSize={fontSize}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      color={color}
      hoverColor={hoverColor}
      target={blank ? "_blank" : "_self"}
      onClick={onClick}
      className={className}
      style={style}
      href={href}
      {...rest}
    >
      {children}
    </StyledLinkAnchor>
  </Link>
);
