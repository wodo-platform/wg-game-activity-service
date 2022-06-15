import { CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameActivityModule } from './game-activity/game-activity.module';
import { UserStatusModule } from './user-status/user-status.module';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from 'nestjs-pino';
import { ScheduleModule } from '@nestjs/schedule';
import { SequelizeModule } from '@nestjs/sequelize';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { RouterModule, Routes, RouteTree } from '@nestjs/core';
import { APP_INTERCEPTOR } from '@nestjs/core';


@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    LoggerModule.forRoot(),
    CacheModule.register({
      isGlobal: true,
    }),
    ScheduleModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: String(process.env.MYSQLDB_HOST).toString(),
      port: Number(process.env.MYSQLDB_LOCAL_PORT).valueOf(),
      username: String(process.env.MYSQLDB_WODO_USER).toString(),
      password: String(process.env.MYSQLDB_WODO_PASSWORD).toString(),
      database: String(process.env.MYSQLDB_WODO_DATABASE).toString(),
      autoLoadModels: true,
      synchronize: true,
      logging: console.log, 
}),
EventEmitterModule.forRoot({
  wildcard: true,
  delimiter: '.',
  newListener: true,
  removeListener: true,
  maxListeners: 20,
  verboseMemoryLeak: true,
  ignoreErrors: false,
}),
    GameActivityModule, 
    UserStatusModule],
  controllers: [AppController],
  providers: [
    AppService],
})
export class AppModule {}
 