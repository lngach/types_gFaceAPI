import { User } from 'entities/user.entity';

export interface IMessage {
  readonly id: number;
  readonly fromID: User;
  readonly toID: User;
  readonly content: string;
  readonly status: boolean;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

export interface ICreateMessage {
  fromID: User;
  toID: User;
  content: string;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
}
