import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Index,
  ManyToOne,
} from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { User } from 'entities';

@Entity('notifications')
export class Notification {
  @PrimaryGeneratedColumn()
  @Index('notifications_pk_index')
  public id: number;

  @Column()
  public content: string;

  @Column()
  public status: boolean;

  @Column('timestamp', { name: 'updated_at' })
  public createdAt: Date;

  @Column('timestamp', { name: 'created_at' })
  public updatedAt: Date;

  @Index('notifications_users_fk_index')
  @ManyToOne(type => User, user => user.notifications, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @IsNotEmpty()
  public user: User;

  public toJSON() {
    return {
      user: this.user,
      content: this.content,
      status: this.status,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
