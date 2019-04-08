import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Checkin } from '../../entities';
import { ICreateCheckin } from './checkin.interface';

@Injectable()
export class CheckinsService {
  constructor(
    @InjectRepository(Checkin)
    private readonly checkinRepository: Repository<Checkin>,
  ) {}

  public async findAll(): Promise<Checkin[]> {
    return await this.checkinRepository.find();
  }

  public async create(checkinData: ICreateCheckin): Promise<Checkin> {
    if (!checkinData.checkinAt)
      throw new HttpException('Time checkin is required', 422);
    if (!checkinData.user)
      throw new HttpException('User checkin is required', 422);
    const newCheckin = this.checkinRepository.create(checkinData);
    return await this.checkinRepository.save(newCheckin);
  }
}
