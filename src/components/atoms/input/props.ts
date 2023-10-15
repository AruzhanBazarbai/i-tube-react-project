import { HTMLInputTypeAttribute, HtmlHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { TextAttributes } from "../../../common";

export type Props = HtmlHTMLAttributes<HTMLInputElement> &
  TextAttributes & {
    registerTemplate?: UseFormRegisterReturn<string>;
    className?: string;
    type?: HTMLInputTypeAttribute;
  };
