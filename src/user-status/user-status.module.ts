import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserStatusEntity } from './entities/user-status.entity';
import { UserStatusRepo } from './repos/user-status.repo';
import { UserStatusService } from './services/user-status.service';
import { UserStatusController } from './user-status.controller';

@Module({
  controllers: [UserStatusController],
  providers: [UserStatusService, UserStatusRepo],
  imports: [SequelizeModule.forFeature([UserStatusEntity])]
})
export class UserStatusModule {}
