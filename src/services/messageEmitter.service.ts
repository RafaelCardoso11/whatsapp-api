import { Injectable } from '@nestjs/common';
import { Message, Whatsapp } from 'venom-bot';

@Injectable()
export class MessageEmitter {
  private client: Whatsapp;
}
