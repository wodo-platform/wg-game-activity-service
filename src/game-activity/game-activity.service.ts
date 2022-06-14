import { Injectable } from '@nestjs/common';
import { CreateGameActivityDto } from './dto/create-game-activity.dto';
import { UpdateGameActivityDto } from './dto/update-game-activity.dto';

@Injectable()
export class GameActivityService {
  create(createGameActivityDto: CreateGameActivityDto) {
    return 'This action adds a new gameActivity';
  }

  findAll() {
    return `This action returns all gameActivity`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gameActivity`;
  }

  update(id: number, updateGameActivityDto: UpdateGameActivityDto) {
    return `This action updates a #${id} gameActivity`;
  }

  remove(id: number) {
    return `This action removes a #${id} gameActivity`;
  }
}
