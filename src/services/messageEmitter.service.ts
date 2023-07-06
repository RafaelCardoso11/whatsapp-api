import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Message } from 'venom-bot';

@Injectable()
export class MessageEmitter {
  private messageReceived = new EventEmitter2();

  private getMessageReceivedEmitter(): EventEmitter2 {
    return this.messageReceived;
  }

  processMessage(message: Message) {
    console.log(message, 'processMessage');
  }

  private subscribeToMessageReceived() {
    this.getMessageReceivedEmitter().on('message', (message: string) => {
      // Lógica personalizada com base na mensagem recebida
      console.log('Mensagem recebida:', message);
      // ... faça o que for necessário com a mensagem recebida
    });
  }
}
