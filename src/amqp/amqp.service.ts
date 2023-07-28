import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AmqpService {
  constructor(private readonly amqpConnection: AmqpConnection) {}

  publish(
    exchane: string,
    routingKey: string,
    message: any,
    option = {},
  ): Promise<void> {
    return this.amqpConnection.publish(exchane, routingKey, message, option);
  }
}
