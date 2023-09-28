import { AnchorHTMLAttributes, RefAttributes } from "react";
import { TextAttributes } from "../../../common";

export type Props = AnchorHTMLAttributes<HTMLAnchorElement> &
  TextAttributes &
  RefAttributes<HTMLAnchorElement>;
