import { OnApplicationBootstrap } from '@nestjs/common';
import { create, Message, Whatsapp } from 'venom-bot';

let numberClient = '';
export class WhatsappProvider implements OnApplicationBootstrap {
  private client: Whatsapp;
  async onApplicationBootstrap(): Promise<void> {
    try {
      const client = await create({
        session: 'fones-belem',
      });
      this.start(client);
    } catch (error) {
      console.error('Error during application bootstrap:', error);
    }
  }

  start(client: Whatsapp) {
    this.processClient(client);
  }
  processClient(client: Whatsapp) {
    this.client = client;
    client.onMessage((message: Message) => {
      this.sendMessageForAttendant(message);
    });
  }
  sendMessageForAttendant(message: Message) {
    const {
      sender: { id, name, pushname },
      content,
      timestamp,
    } = message;
    const numberAttendant = '559196320038@c.us';
    const formattedDate = new Date(timestamp).toLocaleString('pt-BR');

    if (id === numberAttendant) {
      if (numberClient) {
        this.client.sendText(
          numberClient,
          `
        *Consultor ${name}*
        ${content}
        `,
        );
      } else {
        console.log(message);
      }
    } else {
      numberClient = id;
      this.client.sendText(
        numberAttendant,
        `
        *Nome: ${name} / ${pushname} / ${id}*
        Data/Hora: ${formattedDate}
        Mensagem:  ${content}
        `,
      );
    }
  }
}
