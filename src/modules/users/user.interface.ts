export interface AuthToken {
  accessToken: string;
}

export interface IUser {
  readonly id: number;
  readonly email: string;
  readonly tokens: AuthToken[];
  readonly name: string;
  readonly avatar: string;
  readonly location: string;
  readonly phone: string;
  readonly resetPasswordToken: string;
  readonly resetPasswordSentAt: Date;
  readonly confirmationToken: string;
  readonly confirmationSentAt: Date;
  readonly confirmedAt: Date;
  readonly currentSigninAt: Date;
  readonly currentSigninIP: string;
  readonly lastSigninAt: Date;
  readonly lastSigninIP: string;
  readonly signinCount: number;
  readonly lockedAt: Date;
  readonly disable: boolean;
  readonly isAdmin: boolean;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

export interface ICreateUser {
  email: string;
  name: string;
  avatar: string;
  location: string;
  phone: string;
  confirmationToken: string;
  confirmationSentAt: Date;
  confirmedAt: Date;
  isAdmin: boolean;
  createdAt: Date;
  updatedAt: Date;
}
