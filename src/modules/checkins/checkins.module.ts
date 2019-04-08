import { Module } from '@nestjs/common';
import { Checkin } from '../../entities';
import { UsersController } from './checkins.controller';
import { CheckinsService } from './checkins.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Checkin])],
  controllers: [UsersController],
  providers: [CheckinsService],
  exports: [CheckinsService],
})
export class CheckinsModule {}
