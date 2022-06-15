import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserStatusModel } from './models/user-status.model';
import { UserStatusRepo } from './repos/user-status.repo';
import { UserStatusService } from './services/user-status.service';
import { UserStatusController } from './user-status.controller';

@Module({
  controllers: [UserStatusController],
  providers: [UserStatusService, UserStatusRepo],
  imports: [SequelizeModule.forFeature([UserStatusModel])]
})
export class UserStatusModule {}
