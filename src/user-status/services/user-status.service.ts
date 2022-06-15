import { Injectable, Logger } from '@nestjs/common';
import { EventEmitter2 } from "@nestjs/event-emitter";
import { CreateUserStatusDto } from '../dto/create-user-status.dto';
import { UpdateUserStatusDto } from '../dto/update-user-status.dto';
import { UserStatusRepo } from '../repos/user-status.repo';
import { InjectModel } from '@nestjs/sequelize';


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

  

  create(createUserStatusDto: CreateUserStatusDto) {
    this.userStatusRepo.create(createUserStatusDto);
    
    return 'This action adds a new userStatus';
  }

  findAll() {
    return `This action returns all userStatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userStatus`;
  }

  update(id: number, updateUserStatusDto: UpdateUserStatusDto) {
    return `This action updates a #${id} userStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} userStatus`;
  }
}
