import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Index,
  ManyToOne,
} from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { User } from 'entities';

@Entity('checkins')
export class Checkin {
  @PrimaryGeneratedColumn()
  @Index('checkins_pk_index')
  public id: number;

  @Column()
  public location: string;

  @Column('datetime2', { name: 'checkin_at' })
  public checkinAt: Date;

  @Column('datetime2', { name: 'checkout_at' })
  public checkoutAt: Date;

  @Column('timestamp', { name: 'updated_at' })
  public createdAt: Date;

  @Column('timestamp', { name: 'created_at' })
  public updatedAt: Date;

  @Index('checkins_users_fk_index')
  @ManyToOne(type => User, user => user.checkins, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @IsNotEmpty()
  public user: User;

  public toJSON() {
    return {
      user: this.user,
      location: this.location,
      checkinAt: this.checkinAt,
      checkoutAt: this.checkoutAt,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
