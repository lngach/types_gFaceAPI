import { Controller, Get, Post, Body, ValidationPipe } from '@nestjs/common';
import { CreateNotificationDto } from './notification.dto';
import { AuthGuard } from '@nestjs/passport';
import { UseGuards } from '@nestjs/common';
import { NotificationsService } from './notifications.service';

@Controller('users')
@UseGuards(AuthGuard('jwt'))
export class NotificationsController {
  constructor(private readonly notificationService: NotificationsService) {}

  @Get()
  public async find() {
    return await this.notificationService.findAll();
  }

  @Post()
  public async create(@Body() body: CreateNotificationDto) {
    return await this.notificationService.create(body);
  }
}
