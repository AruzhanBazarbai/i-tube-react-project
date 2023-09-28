import React, { HtmlHTMLAttributes } from "react";
import { TextAttributes } from "../../../common";

export type Props = HtmlHTMLAttributes<HTMLInputElement> &
  TextAttributes & {
    ref?: React.RefObject<HTMLInputElement>;
  };
