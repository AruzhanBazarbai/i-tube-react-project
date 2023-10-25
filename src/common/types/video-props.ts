import { CommentProps } from "./comment-props";

export type ThumbnailProps = {
  url: string;
  width: number;
  height: number;
};
export type StatisticsProps = {
  commentCount: string;
  favoriteCount: string;
  likeCount: string;
  viewCount: string;
};
export type VideoProps = {
  id: string;
  videoLink?: string;
  channelLink?: string;
  thumbnailSrc?: string | any;
  title: string;
  channelName?: string;
  channelId?: string;
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

export type DataResponseProps = {
  items: VideoDataProps[];
};
export type VideoDataProps = {
  id: string;
  snippet: {
    title: string;
    categoryId: string;
    channelId: string;
    channelTitle: string;
    defaultAudioLanguage: string;
    defaultLanguage: string;
    description: string;
    thumbnails: {
      default: ThumbnailProps;
      high: ThumbnailProps;
      maxres: ThumbnailProps;
      medium: ThumbnailProps;
      standard: ThumbnailProps;
    };
    publishedAt: string;
  };
  statistics: StatisticsProps;
};
