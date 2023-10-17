import { VideoProps } from "../../../common";

export type Props = {
  state: "basic" | "similar" | "search" | "channel";
  className?: string;
  data: VideoProps;
};
