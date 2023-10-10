import React, { HTMLInputTypeAttribute, HtmlHTMLAttributes } from "react";
import { TextAttributes } from "../../../common";

export type Props = HtmlHTMLAttributes<HTMLInputElement> &
  TextAttributes & {
    ref?: React.RefCallback<HTMLInputElement>;
    className?: string;
    type?: HTMLInputTypeAttribute;
  };
