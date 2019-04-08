import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  BeforeUpdate,
  QueryFailedError,
  Index,
  OneToMany,
} from 'typeorm';
import { IsNotEmpty, Validator } from 'class-validator';
import * as bcrypt from 'bcrypt';
import { Checkin } from './checkin.entity';
import { Notification } from './notification.entity';
import { Message } from './message.entity';

@Entity('users')
export class User {
  private static DEFAULT_SALT_ROUNDS = 10;

  @PrimaryGeneratedColumn()
  @Index('users_pk_index')
  public id: number;

  @Column({ unique: true })
  @IsNotEmpty()
  @Index('users_unique_email_index', { unique: true })
  public email: string;

  @Column()
  @IsNotEmpty()
  public password: string;

  @Column()
  @IsNotEmpty()
  public name: string;

  @Column()
  public avatar: string;

  @Column()
  public location: string;

  @Column('text')
  public tokens: string;

  @Column({ name: 'reset_password_token' })
  public resetPasswordToken: string;

  @Column('datetime2', { name: 'reset_password_sent_at' })
  public resetPasswordSentAt: Date;

  @Column({ name: 'confirmation_token' })
  public confirmationToken: string;

  @Column('datetime2', { name: 'confirmation_sent_at' })
  public confirmationSentAt: Date;

  @Column('datetime2', { name: 'confirmed_at' })
  public confirmedAt: Date;

  @Column('datetime2', { name: 'current_sign_in_at' })
  public currentSigninAt: Date;

  @Column({ name: 'current_sign_in_ip' })
  public currentSigninIP: string;

  @Column('datetime2', { name: 'last_sign_in_at' })
  public lastSigninAt: Date;

  @Column({ name: 'last_sign_in_ip' })
  public lastSigninIP: string;

  @Column('int', { name: 'sign_in_count' })
  public signinCount: number;

  @Column('datetime2', { name: 'locked_at' })
  public lockedAt: Date;

  @Column()
  public disable: boolean;

  @Column({ name: 'is_admin' })
  public isAdmin: boolean;

  @Column('timestamp', { name: 'created_at' })
  public createdAt: Date;

  @Column('timestamp', { name: 'updated_at' })
  public updatedAt: Date;

  @OneToMany(type => Checkin, checkin => checkin.user)
  public checkins: Checkin[];

  @OneToMany(type => Notification, notification => notification.user)
  public notifications: Notification[];

  @OneToMany(type => Message, message => message.fromID)
  public inboxs: Message[];

  @OneToMany(type => Message, message => message.toID)
  public outboxs: Message[];

  public toJSON() {
    return {
      email: this.email,
      name: this.name,
      avatar: this.avatar,
      location: this.location,
      tokens: this.tokens,
      resetPasswordToken: this.resetPasswordToken,
      resetPasswordSentAt: this.resetPasswordSentAt,
      confirmationToken: this.confirmationToken,
      confirmationSentAt: this.confirmationSentAt,
      confirmedAt: this.confirmedAt,
      currentSigninAt: this.currentSigninAt,
      currentSigninIP: this.currentSigninIP,
      lastSigninAt: this.lastSigninAt,
      lastSigninIP: this.lastSigninIP,
      signinCount: this.signinCount,
      lockedAt: this.lockedAt,
      disable: this.disable,
      isAdmin: this.isAdmin,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      checkins: this.checkins,
      notifications: this.notifications,
    };
  }

  @BeforeInsert()
  private async encryptPassword() {
    this.password = await bcrypt.hash(this.password, User.DEFAULT_SALT_ROUNDS);
  }

  @BeforeInsert()
  @BeforeUpdate()
  private validateEmail() {
    const validator = new Validator();
    if (!validator.isEmail(this.email))
      throw new QueryFailedError('', [], 'email is not a valid email');
  }
}
