import { Module } from '@nestjs/common';
import { GameActivityService } from './game-activity.service';
import { GameActivityController } from './game-activity.controller';

@Module({
  controllers: [GameActivityController],
  providers: [GameActivityService]
})
export class GameActivityModule {}
