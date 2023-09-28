import React from "react";
import { StyleProps, TextAttributes } from "../../../common";

export type Props = StyleProps &
  TextAttributes & {
    children?: React.ReactNode;
  };
