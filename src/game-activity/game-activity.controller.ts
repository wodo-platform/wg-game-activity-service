import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GameActivityService } from './game-activity.service';
import { CreateGameActivityDto } from './dto/create-game-activity.dto';
import { UpdateGameActivityDto } from './dto/update-game-activity.dto';

@Controller('game-activity')
export class GameActivityController {
  constructor(private readonly gameActivityService: GameActivityService) {}

  @Post()
  create(@Body() createGameActivityDto: CreateGameActivityDto) {
    return this.gameActivityService.create(createGameActivityDto);
  }

  @Get()
  findAll() {
    return this.gameActivityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gameActivityService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGameActivityDto: UpdateGameActivityDto) {
    return this.gameActivityService.update(+id, updateGameActivityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gameActivityService.remove(+id);
  }
}
