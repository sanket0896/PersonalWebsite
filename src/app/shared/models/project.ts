export interface ProjectDetail {
  name: string;
  description: string;
  tags?: TagBase[];
}

export interface TagBase {
  name: string;
}
