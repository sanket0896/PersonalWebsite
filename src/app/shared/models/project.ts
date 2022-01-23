import { TagBase } from "./tag";

export interface ProjectDetail {
  name: string;
  description: string;
  tags?: TagBase[];
}
