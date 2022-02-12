import { TagBase } from "./tag";

export interface BlogDetail {
  title: string;
  description: string;
  creationDate: Date;
  url: string;
  tags?: TagBase[];
}
