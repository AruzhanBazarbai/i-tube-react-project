import { StyleProps } from "./style-props";
import { TextAttributes } from "./text-attributes";

export type ButtonProps = TextAttributes &
  StyleProps & {
    disabled?: boolean;
    border?: string;
    borderRadius?: string;
    borderColor?: string;
    textAlign?: string;
    backgroundColor?: string;
    size?: string;
    buttonType?: string;
    hoverBackgroundColor?: string;
    boxShadow?: string;
  };
