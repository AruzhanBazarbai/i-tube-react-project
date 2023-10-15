import React, { HtmlHTMLAttributes } from "react";
import { TextAttributes, ButtonProps } from "../../../common";

export type Props = TextAttributes &
  HtmlHTMLAttributes<HTMLButtonElement> &
  ButtonProps & {
    children?: React.ReactNode;
    type?: "submit" | "reset" | "button";
  };
