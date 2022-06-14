import { PartialType } from '@nestjs/swagger';
import { CreateGameActivityDto } from './create-game-activity.dto';

export class UpdateGameActivityDto extends PartialType(CreateGameActivityDto) {}
