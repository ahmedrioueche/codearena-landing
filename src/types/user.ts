type Rank = "noob" | "not_bad" | "good" | "pro" | "legend";

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: string;
  score: number;
  rank: Rank;
}

export interface UserUpdate {
  name?: string;
  email?: string;
  addedScore?: number;
  rank?: Rank;
}
