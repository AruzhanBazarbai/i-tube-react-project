import React from "react";
import { Props } from "./props";

export const Footer: React.FC<Props> = ({ showFooter = true }) => (
  <footer className={showFooter ? "" : "d-none"}>Footer</footer>
);
