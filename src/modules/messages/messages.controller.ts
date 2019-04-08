import { Controller, Get, Post, Body, ValidationPipe } from '@nestjs/common';
import { CreateMessageDto } from './message.dto';
import { AuthGuard } from '@nestjs/passport';
import { UseGuards } from '@nestjs/common';
import { MessagesService } from './messages.service';

@Controller('users')
@UseGuards(AuthGuard('jwt'))
export class MessagesController {
  constructor(private readonly messageService: MessagesService) {}

  @Get()
  public async find() {
    return await this.messageService.findAll();
  }

  @Post()
  public async create(@Body() body: CreateMessageDto) {
    return await this.messageService.create(body);
  }
}
