import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Logger } from 'nestjs-pino';
import { INestApplication } from '@nestjs/common';
import { config } from 'process';


export var app:INestApplication;


async function bootstrap() {
  const options = {cors: true, bufferLogs: true};

  app = await NestFactory.create(AppModule, options);
  
  app.useLogger(app.get(Logger));
  app.enableShutdownHooks();

  const configs = new DocumentBuilder()
    .setTitle('Wodo Game Activity API')
    .setDescription('Wodo Game Activity microservice in order to handle business logic for game servers and game hub relaated cases.')
    .setVersion('1.0')
    .setBasePath('api')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, configs);
  SwaggerModule.setup('/docs', app, document);

  app.setGlobalPrefix('api')
  await app.listen(3002);
  
}
bootstrap();

// sequlize database
// userid string, statatus number, description string
// entity objesi, mysql databese
// game_activities db instance
// user_status table name
// create, update, delete, read
// readme.md 
