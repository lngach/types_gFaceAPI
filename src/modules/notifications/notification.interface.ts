import { User } from 'entities/user.entity';

export interface INotification {
  readonly id: number;
  readonly user: User;
  readonly content: string;
  readonly status: boolean;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

export interface ICreateNotification {
  user: User;
  content: string;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
}
