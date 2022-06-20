import { Test, TestingModule } from '@nestjs/testing';
import { UserStatusController } from './user-status.controller';
import { UserStatusService } from './services/user-status.service';

describe('UserStatusController', () => {
  let controller: UserStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserStatusController],
      providers: [UserStatusService],
    }).compile();

    controller = module.get<UserStatusController>(UserStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
