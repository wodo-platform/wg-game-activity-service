import { Injectable, Logger } from '@nestjs/common';
import { EventEmitter2 } from "@nestjs/event-emitter";
import { CreateUserStatusDto } from '../dto/create-user-status.dto';
import { UpdateUserStatusDto } from '../dto/update-user-status.dto';
import { UserStatusRepo } from '../repos/user-status.repo';
import { UserStatusEntity } from '../entities/user-status.entity';
import { USDtoMapper } from '../utils/user-status-dto.mapper';
import { UserStatusDto } from '../dto/user-status.dto';

/**
 *  Service class to implement busness logic
 */
@Injectable()
export class UserStatusService {

  private readonly logger = new Logger(UserStatusService.name);

  constructor
    (
      private readonly userStatusRepo: UserStatusRepo,
      private eventEmmitter:EventEmitter2
    ) {

    this.logger.debug(`instantiated a new instance of ${UserStatusService.name}`);
  }

  

  async create(createUserStatusDto: CreateUserStatusDto): Promise<UserStatusDto> {
    let result: UserStatusEntity = await this.userStatusRepo.create(createUserStatusDto);
    let dto:UserStatusDto = USDtoMapper.toUserStatusDto(result);
    return dto;
  }

  async findAll():  Promise<UserStatusDto[]> {
    let result: UserStatusEntity[] = await this.userStatusRepo.findAll();
    let dtos:UserStatusDto[] = USDtoMapper.toUserStatusDtos(result);
    return dtos;
  }

  async findOne(userUid: string):  Promise<UserStatusDto> {
    let result: UserStatusEntity = await this.userStatusRepo.findOne(userUid);
    let dto:UserStatusDto = USDtoMapper.toUserStatusDto(result);
    return dto;
  }

  async update(id: number, updateUserStatusDto: UpdateUserStatusDto) {
    return `This action updates a #${id} userStatus`;
  }

  async remove(id: number) {
    return `This action removes a #${id} userStatus`;
  }
}
