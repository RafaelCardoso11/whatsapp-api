import { Module } from '@nestjs/common';
import { WhatsappProvider } from './providers/whatsapp/whatsapp.provider';
import { EventEmitterModule } from '@nestjs/event-emitter';
@Module({
  imports: [EventEmitterModule.forRoot()],
  providers: [WhatsappProvider],
})
export class AppModule {}
