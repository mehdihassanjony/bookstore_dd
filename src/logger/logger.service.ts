import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class LoggerService extends Logger {
  private readonly exchangeName: string;
  private readonly logsRoutingkey: string;
}
