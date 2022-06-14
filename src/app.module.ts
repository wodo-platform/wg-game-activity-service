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
  // set this to `true` to use wildcards
  wildcard: true,
  // the delimiter used to segment namespaces
  delimiter: '.',
  // set this to `true` if you want to emit the newListener event
  newListener: true,
  // set this to `true` if you want to emit the removeListener event
  removeListener: true,
  // the maximum amount of listeners that can be assigned to an event
  maxListeners: 20,
  // show event name in memory leak message when more than maximum amount of listeners is assigned
  verboseMemoryLeak: true,
  // disable throwing uncaughtException if an error event is emitted and it has no listeners
  ignoreErrors: false,
}),
    GameActivityModule, 
    UserStatusModule],
  controllers: [AppController],
  providers: [
    AppService],
})
export class AppModule {}
 