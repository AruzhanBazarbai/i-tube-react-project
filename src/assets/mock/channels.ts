import { ChannelProps } from "../../common";

export const channels: ChannelProps[] = [
  {
    channelId: "1",
    backgroundSrc: require("../images/icons/background.png"),
    profileSrc: require("../images/icons/channel-profile.png"),
    name: "Qazaqstan TV",
    subscribersCount: "2.98M subscribers",
    videosCount: "67K videos",
    description: `Қазақстанның ұлттық телевизиялық каналы / &quot;Qazaqstan&quot; телеарнасы / Қазақстан ТВ /
        Қазақстан TV / Казахстан ТВ ) Qazaqstan TV – қазақстандық Youtube-тың жетекші телеарнасы.
        Әзіл, музыка, ойын-сауық, телехикаялар мен қазақстандық шоу – жазылыңыз, достарыңызбен
        бөлісіңіз! Біздің @qazaqstantv Instagram-аккаунтында байқауларға қатысып, бағалы сыйлықтар
        ұтып алыңыз!`,
    subscribed: false,
  },
  {
    channelId: "2",
    backgroundSrc: require("../images/icons/background.png"),
    profileSrc: require("../images/channels/inv-dreams.jpg"),
    name: "Invisable Dreams",
    subscribersCount: "458 subscribers",
    videosCount: "7 videos",
    description: `I make lofi hiphop and anime music mixes and anime music remixes.`,
    subscribed: true,
  },
  {
    channelId: "3",
    backgroundSrc: require("../images/icons/background.png"),
    profileSrc: require("../images/channels/channel3.jpg"),
    name: "Правое полушарие Интроверта",
    subscribersCount: "1.9M subscribers",
    videosCount: "694 videos",
    description: `Мы – платформа для саморазвития №1. 
Мы создаем видео-саммари за 300 рублей обо всем на свете: от философии и психологии до истории и кино.
Слушайте саммари фоном, пока занимаетесь своими делами, и получите готовое экспертное мнение по любому вопросу. 
`,
    subscribed: false,
  },
];
