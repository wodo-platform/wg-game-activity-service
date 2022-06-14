import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameActivityModule } from './game-activity/game-activity.module';
import { UserStatusModule } from './user-status/user-status.module';

@Module({
  imports: [GameActivityModule, UserStatusModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
 