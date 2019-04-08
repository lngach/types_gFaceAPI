import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Index,
  ManyToOne,
} from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { User } from 'entities';

@Entity('messages')
export class Message {
  @PrimaryGeneratedColumn()
  @Index('messages_pk_index')
  public id: number;

  @Column()
  public content: string;

  @Column()
  public status: boolean;

  @Column('timestamp', { name: 'updated_at' })
  public createdAt: Date;

  @Column('timestamp', { name: 'created_at' })
  public updatedAt: Date;

  @Index('messages_from_users_fk_index')
  @ManyToOne(type => User, user => user.inboxs, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @IsNotEmpty()
  public fromID: User;

  @Index('messages_to_users_fk_index')
  @ManyToOne(type => User, user => user.outboxs, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @IsNotEmpty()
  public toID: User;

  public toJSON() {
    return {
      from: this.fromID,
      to: this.toID,
      content: this.content,
      status: this.status,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
