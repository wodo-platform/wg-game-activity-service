import { Injectable, Logger } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Sequelize } from "sequelize-typescript";
import { v4 as uuid } from 'uuid';
import { CreateUserStatusDto } from "../dto/create-user-status.dto";
import { UserStatusDto } from "../dto/user-status.dto";
import { UserStatusEntity } from "../entities/user-status.entity";

/**
 *  Repository implementation to handle all db related operations. Class doesn't include any busness logic,
 *  only db operations.
 *  To add busness logic see UserStatusService that injects this repo object as dependancy.
 */
@Injectable()
export class UserStatusRepo {

    private readonly logger = new Logger(UserStatusRepo.name);
    constructor(
        @InjectModel(UserStatusEntity)
        private readonly userEntity: typeof UserStatusEntity,
        private sequelize: Sequelize) {

          this.logger.debug(`instantiated a new instance of ${UserStatusEntity.name}`);
        }
    
      async create(createUserDto: CreateUserStatusDto): Promise<UserStatusEntity> {

        let result: UserStatusEntity = await this.userEntity.create<UserStatusEntity>({...createUserDto});
        return result;
        //return result;
      }

      async findAll(): Promise<UserStatusEntity[]> {
        let result: UserStatusEntity[] = await this.userEntity.findAll<UserStatusEntity>();       
        return result;
      }

      async findOne(userUid: string): Promise<UserStatusEntity> {
        let result: UserStatusEntity = await this.userEntity.findByPk(userUid);
        return result;


      }








}