import { CommentProps } from "./comment-props";

export type VideoProps = {
  videoLink?: string;
  channelLink?: string;
  thumbnailSrc?: string | any;
  title: string;
  channelName?: string;
  channelProfileSrc?: string | any;
  viewsCount?: string;
  createdAt?: string;
  description?: string;
  duration?: string;
  likeCount?: string;
  dislikeCount?: string;
  channelSubsCnt?: string;
  comments?: CommentProps[];
};
