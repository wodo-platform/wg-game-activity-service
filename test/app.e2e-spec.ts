import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { UserStatusService } from 'src/user-status/services/user-status.service';
import { UserStatusRepo } from 'src/user-status/repos/user-status.repo';
import { mockDeep } from 'jest-mock-extended'
import { UserStatusController } from 'src/user-status/user-status.controller';


describe('AppController (e2e)', () => {
  let app: INestApplication;
  let userStatusRepoInstance;

  beforeEach(async () => {
    userStatusRepoInstance = mockDeep<UserStatusRepo>();

    let userStatusRepoProvider = {
      provide: UserStatusRepo,
      useValue: userStatusRepoInstance
    };

    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule, EventEmitterModule],
      providers: [UserStatusService, userStatusRepoProvider],
      controllers: [UserStatusController],
      
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('/user-status/findAll (GET)', () => {
    
  })

});
