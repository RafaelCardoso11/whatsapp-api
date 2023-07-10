import { Module } from '@nestjs/common';
import { WhatsappProvider } from './providers/whatsapp/whatsapp.provider';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { MessageEmitter } from './services/messageEmitter.service';
@Module({
  imports: [EventEmitterModule.forRoot()],
  providers: [MessageEmitter, WhatsappProvider],
})
export class AppModule {}
