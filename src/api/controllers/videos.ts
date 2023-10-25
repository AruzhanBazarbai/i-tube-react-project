// import { DataResponse } from "../../common";
import { channels, comments, videos } from "../../assets/mock";
// import { VideoProps } from "../../common";
// import { postAsync } from "../functions";
// import { config } from "../../config";
// import { getAsync } from "../functions";

// const ALL_VIDEOS_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=120&regionCode=KZ&key=${config.ytApiKey}`;
// const ALL_VIDEOS_URL = `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&part=id%2C%20player%2C%20localizations&channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw&maxResults=125&key=${config.ytApiKey}`;

const allVideos = videos;
const allComments = comments;
const allChannels = channels;

// export const getAllVideos = async (): Promise<DataResponseProps> => getAsync(ALL_VIDEOS_URL);
export const getAllVideos = () => allVideos;

export const getVideo = (id: string) => allVideos.filter((el) => el.id === id)[0];

export const getComments = (videoId: string) => allComments.filter((el) => el.videoId === videoId);

export const getVideosByChannel = (channelId: string) =>
  allVideos.filter((el) => el.channelId === channelId);

export const getChannelById = (channelId: string) =>
  allChannels.filter((el) => el.channelId === channelId)[0];

export const searchVideo = (param: string) =>
  allVideos.filter(
    (el) =>
      el.title.toLowerCase().includes(param.toLowerCase()) ||
      el.channelName?.toLowerCase().includes(param.toLowerCase()) ||
      el.description?.toLowerCase().includes(param.toLowerCase()),
  );
