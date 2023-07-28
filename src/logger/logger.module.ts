import { Global, Module } from '@nestjs/common';
import { LoggerService } from './logger.service';
import { AmqpModule } from 'src/amqp/amqp.module';
import { ConfigModule } from 'src/config/config.module';

@Global()
@Module({
  imports: [ConfigModule, AmqpModule],
  providers: [LoggerService],
  exports: [LoggerService],
})
export class LoggerModule {}
