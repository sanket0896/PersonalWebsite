import { BlogDetail } from "../models/blog";

export const BLOG_LIST: BlogDetail[] = [
  {
    title: "React Chat App Blog",
    description: `It is a real time chat application with features like private chats,
    typing indicator and read receipts`,
    creationDate: new Date("2021-11-08"),
    content: "Hello World!",
    tags: [
      { name: "React" },
      { name: "ExpressJs", color: "#00A5CF" },
      { name: "SocketIO" },
    ],
  },
  {
    title: "React Chat App Blog",
    description: `It is a real time chat application with features like private chats,
    typing indicator and read receipts`,
    creationDate: new Date("2021-12-18"),
    content: "Hello World!",
    tags: [{ name: "React" }, { name: "SocketIO" }],
  },
  {
    title: "React Chat App Blog",
    description: `It is a real time chat application with features like private chats,
    typing indicator and read receipts`,
    creationDate: new Date("2022-01-03"),
    content: "Hello World!",
    tags: [{ name: "SocketIO" }],
  },
  {
    title: "React Chat App Blog",
    description: `It is a real time chat application with features like private chats,
    typing indicator and read receipts`,
    creationDate: new Date("2022-03-15"),
    content: "Hello World!",
    tags: [
      { name: "React" },
      { name: "Redux" },
      { name: "ExpressJs", color: "#00A5CF" },
      { name: "SocketIO" },
    ],
  },
];
