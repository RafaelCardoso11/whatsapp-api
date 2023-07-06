import { OnApplicationBootstrap } from '@nestjs/common';
import { MessageEmitter } from 'src/services/messageEmitter.service';
import { create, Message, Whatsapp } from 'venom-bot';

export class WhatsappProvider implements OnApplicationBootstrap {
  constructor(private readonly messageEmitter: MessageEmitter) {}

  async onApplicationBootstrap(): Promise<void> {
    try {
      const client = await create({ session: 'fonesBelem' });
      this.start(client);
    } catch (error) {
      console.error('Error during application bootstrap:', error);
    }
  }

  start(client: Whatsapp) {
    client.onMessage((message: Message) => this.handleMessage(message));
  }
  private handleMessage(message: Message): void {
    console.log('Received message:', message);
    this.messageEmitter.processMessage(message);
  }
}
