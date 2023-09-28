import React from "react";
import { StyleProps } from "../../../common";

export type Props = StyleProps & {
  children?: React.ReactNode;
  disabled?: boolean;
  name?: string;
  value?: string;
  checked?: boolean;
  onChange?: () => void;
};
