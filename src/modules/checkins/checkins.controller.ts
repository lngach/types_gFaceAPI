import { Controller, Get, Post, Body, ValidationPipe } from '@nestjs/common';
import { CreateCheckinDto } from './checkin.dto';
import { AuthGuard } from '@nestjs/passport';
import { UseGuards } from '@nestjs/common';
import { CheckinsService } from './checkins.service';

@Controller('users')
@UseGuards(AuthGuard('jwt'))
export class UsersController {
  constructor(private readonly checkinService: CheckinsService) {}

  @Get()
  public async find() {
    return await this.checkinService.findAll();
  }

  @Post()
  public async create(@Body() body: CreateCheckinDto) {
    return await this.checkinService.create(body);
  }
}
