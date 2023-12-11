export type UserData = {
  src: string;
  name: string;
};
export type UserProps = {
  id: string;
  profileSrc: string;
  subscriptions: {
    channelId: string;
  }[]
  email: string;
  name: string;
  password: string;
};
