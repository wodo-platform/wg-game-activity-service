import { Module } from '@nestjs/common';
import { UserStatusService } from './services/user-status.service';
import { UserStatusController } from './user-status.controller';

@Module({
  controllers: [UserStatusController],
  providers: [UserStatusService]
})
export class UserStatusModule {}
