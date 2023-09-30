import React from "react";
import { Props } from "./props";

export const Header: React.FC<Props> = ({ showHeader = true }) => (
  <header className={showHeader ? "" : "d-none"}>Header</header>
);
