import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Event } from 'src/models/interfaces/event';
import { EventsService } from './events.service';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get()
  getAllEvents() {
    return this.eventsService.findAll();
  }

  @Get(':id')
  getEvent(@Param('id') eventId: string) {
    return this.eventsService.findOne(eventId);
  }

  @Post()
  addEvent(@Body('event') event: Event) {
    return this.eventsService.create(event);
  }

  @Patch(':id')
  updateEvent(
    @Param('id') eventId,
    @Body('fields')
    fieldsToUpdate: {
      name?: string;
      date?: string;
      payPerView?: boolean;
      brand?: string;
      location?: string;
      venue?: string;
    },
  ) {
    return this.eventsService.updateOne(eventId, fieldsToUpdate);
  }

  @Delete(':id')
  deleteEvent(@Param('id') eventId: string) {
    return this.eventsService.deleteOne(eventId);
  }
}
