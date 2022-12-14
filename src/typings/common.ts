export type Callback = () => void;

export interface User {
  accessToken: string;
  idToken: string;
}

export interface BookCardProps {
  id: string;
}
