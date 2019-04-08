import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message } from '../../entities';
import { ICreateMessage } from './message.interface';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,
  ) {}

  public async findAll(): Promise<Message[]> {
    return await this.messageRepository.find();
  }

  public async create(messageData: ICreateMessage): Promise<Message> {
    if (!messageData.content) throw new HttpException('Message is empty', 422);
    if (!messageData.fromID)
      throw new HttpException('User send message is required', 422);
    if (!messageData.toID)
      throw new HttpException('User received message is required', 422);
    const newMessage = this.messageRepository.create(messageData);
    return await this.messageRepository.save(newMessage);
  }
}
