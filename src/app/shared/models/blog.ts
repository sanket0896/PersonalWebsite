import { Markdown } from "./markdown";
import { TagBase } from "./tag";

export interface BlogDetail {
  title: string;
  description: string;
  creationDate: Date;
  content: Markdown;
  tags?: TagBase[];
}
