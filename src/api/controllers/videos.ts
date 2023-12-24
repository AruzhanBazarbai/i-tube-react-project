// import { DataResponse } from "../../common";
// import { videos } from "../../assets/mock";
// import React from "react";
import { CommentProps, VideoProps } from "../../common";
// import { VideoProps } from "../../common";
// import { postAsync } from "../functions";
// import { config } from "../../config";
// import { getAsync } from "../functions";

// const ALL_VIDEOS_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=120&regionCode=KZ&key=${config.ytApiKey}`;
// const ALL_VIDEOS_URL = `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&part=id%2C%20player%2C%20localizations&channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw&maxResults=125&key=${config.ytApiKey}`;

// const allVideos = videos;
// const allComments = comments;
// const allChannels = await getAllChannels();

// export const getAllVideos = async (): Promise<DataResponseProps> => getAsync(ALL_VIDEOS_URL);

export const getAllVideos = () => async () => fetch("http://localhost:3000/videos");

export const getVideo = async (id: string) =>
  (await fetch(`http://localhost:3000/videos/${id}`)).json();

export const getAllComments = async () => (await fetch("http://localhost:3000/comments")).json();

export const getCommentsByVideoId = async (comments: CommentProps[], videoId: string) =>
  comments.filter((el) => el.videoId === videoId);

export const getVideosByChannel = (videos: VideoProps[], channelId: string) =>
  videos.filter((el) => el.channelId === channelId);

export const getAllChannels = async () => (await fetch("http://localhost:3000/channels")).json();

export const getChannelById = async (channelId: string) =>
  (await fetch(`http://localhost:3000/channels/${channelId}`)).json();

export const searchVideo = (videos: VideoProps[], param: string) =>
  videos.filter(
    (el) =>
      el.title.toLowerCase().includes(param.toLowerCase()) ||
      el.channelName?.toLowerCase().includes(param.toLowerCase()) ||
      el.description?.toLowerCase().includes(param.toLowerCase()),
  );
