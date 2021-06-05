import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { EventsController } from './events.controller';
import { EventsService } from './events.service';
import { eventsProviders } from './events.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [EventsController],
  providers: [EventsService, ...eventsProviders],
})
export class EventsModule {}
