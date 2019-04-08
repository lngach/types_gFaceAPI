import { User } from 'entities/user.entity';

export interface ICheckin {
  readonly id: number;
  readonly user: User;
  readonly location: string;
  readonly checkinAt: Date;
  readonly checkoutAt: Date;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

export interface ICreateCheckin {
  user: User;
  location: string;
  checkinAt: Date;
  checkoutAt: Date;
  createdAt: Date;
  updatedAt: Date;
}
