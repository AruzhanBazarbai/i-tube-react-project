import React from "react";
import { StyleProps, TextAttributes } from "../../../common";

export type Props = TextAttributes &
  StyleProps & {
    href: string;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
    showUnderline?: boolean;
    children?: React.ReactNode;
  };
