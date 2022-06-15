import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserStatus } from './models/user.model';
import { UserStatusService } from './services/user-status.service';
import { UserStatusController } from './user-status.controller';

@Module({
  controllers: [UserStatusController],
  providers: [UserStatusService],
  imports: [SequelizeModule.forFeature([UserStatus])]
})
export class UserStatusModule {}
