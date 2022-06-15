import { Injectable, Logger } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Sequelize } from "sequelize-typescript";
import { v4 as uuid } from 'uuid';
import { CreateUserStatusDto } from "../dto/create-user-status.dto";
import { UserStatusEntity } from "../entities/user-status.entity";
import { UserStatusModel } from "../models/user-status.model";


@Injectable()
export class UserStatusRepo {

    private readonly logger = new Logger(UserStatusRepo.name);
    constructor(
        @InjectModel(UserStatusModel)
        private readonly userModel: typeof UserStatusModel,
        private sequelize: Sequelize) {

          this.logger.debug(`instantiated a new instance of ${UserStatusRepo.name}`);
        }
    
      async create(createUserDto: CreateUserStatusDto): Promise<UserStatusEntity> {

        console.log(createUserDto);
        let result = await this.userModel.create({...createUserDto});
        console.log(result.toJSON())
        return;
      }






}