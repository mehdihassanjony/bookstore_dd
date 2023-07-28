import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { UsersModule } from './users/users.module';
import { AmqpModule } from './amqp/amqp.module';
import { LoggerModule } from './logger/logger.module';
import { ConfigModule } from './config/config.module';
import { HealthCheckModule } from './health-check/health-check.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    BooksModule,
    UsersModule,
    AmqpModule,
    LoggerModule,
    ConfigModule,
    HealthCheckModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
