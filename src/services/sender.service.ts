import { Injectable } from '@nestjs/common';
import { MessageEmitter } from './messageEmitter.service';

@Injectable()
export class Sender {
  constructor(private readonly messageEmitter: MessageEmitter) {}
}
