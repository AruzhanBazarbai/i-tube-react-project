import React from "react";
import { StyleProps } from "../../../common";

export type Props = StyleProps & {
  checked?: boolean;
  onChange?: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
  name?: string;
};
