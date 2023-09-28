import React from "react";
import styled from "styled-components";
import { Props } from "./props";

const StyledImage = styled.img<Props>`
  ${({ width, height }: Props) => `
    width: ${width};
    height: ${height};

    `}
`;

export const Img: React.FC<Props> = ({ width, height, style, className, alt, src }) => (
  <StyledImage
    decoding="async"
    loading="lazy"
    src={src}
    alt={alt}
    width={width ?? "100%"}
    height={height ?? "auto"}
    style={style}
    className={className}
  />
);
