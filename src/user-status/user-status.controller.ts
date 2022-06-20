import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags, ApiParam, ApiBody } from '@nestjs/swagger';
import { UserStatusService } from './services/user-status.service';
import { CreateUserStatusDto } from './dto/create-user-status.dto';
import { UpdateUserStatusDto } from './dto/update-user-status.dto';
import { UserStatusDto } from './dto/user-status.dto';

@ApiTags('user-status')
@Controller('user-status')
export class UserStatusController {
  constructor(private readonly userStatusService: UserStatusService) {}

  @ApiOperation({ summary: 'Creates a user status' })
  @ApiResponse({ status: 201, description: 'User status has been successfully created.'})
  @Post()
  async create(@Body() createUserStatusDto: CreateUserStatusDto) {
    
    return this.userStatusService.create(createUserStatusDto);
  }

  @ApiResponse({ status: 200, description: 'Returns all user status.'})
  @ApiOperation({ summary: 'Finds all user status' })
  @Get()
  async findAll(): Promise<UserStatusDto[]> {
    return this.userStatusService.findAll();
  }

  @ApiResponse({ status: 200, description: 'Returns all user status.'})
  @ApiOperation({ summary: 'Finds  user status by given userUid' })
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<UserStatusDto> {
    return this.userStatusService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserStatusDto: UpdateUserStatusDto) {
    return this.userStatusService.update(+id, updateUserStatusDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.userStatusService.remove(+id);
  }
}
