import { Module } from '@nestjs/common';
import { AmqpService } from './amqp.service';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';

@Module({
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule, {
      uri: 'amqp://rabbitmq:rabbitmq@localhost:5672',
    }),
    AmqpModule,
  ],
  providers: [AmqpService],
  exports: [AmqpService],
})
export class AmqpModule {}
