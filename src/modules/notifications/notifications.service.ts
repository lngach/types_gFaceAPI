import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notification } from '../../entities';
import { ICreateNotification } from './notification.interface';

@Injectable()
export class NotificationsService {
  constructor(
    @InjectRepository(Notification)
    private readonly notificationRepository: Repository<Notification>,
  ) {}

  public async findAll(): Promise<Notification[]> {
    return await this.notificationRepository.find();
  }

  public async create(
    notificationData: ICreateNotification,
  ): Promise<Notification> {
    if (!notificationData.content)
      throw new HttpException('Message is empty', 422);
    if (!notificationData.user)
      throw new HttpException('User received notification is required', 422);
    const newNotification = this.notificationRepository.create(
      notificationData,
    );
    return await this.notificationRepository.save(newNotification);
  }
}
