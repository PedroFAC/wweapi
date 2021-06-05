import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Event } from '../models/interfaces/event';

@Injectable()
export class EventsService {
  constructor(
    @Inject('EVENT_MODEL')
    private eventModel: Model<Event>,
  ) {}

  async findAll(): Promise<Event[]> {
    return this.eventModel.find().exec();
  }

  async findOne(id: string): Promise<Event> {
    return this.eventModel.findById(id);
  }

  async create(event: Event): Promise<Event> {
    const createdEvent = new this.eventModel(event);
    return createdEvent.save();
  }

  async updateOne(
    id: string,
    fieldsToUpdate: {
      name?: string;
      date?: string;
      payPerView?: boolean;
      brand?: string;
      location?: string;
      venue?: string;
    },
  ): Promise<Event> {
    return this.eventModel.findByIdAndUpdate(id, fieldsToUpdate, {
      new: true,
    });
  }

  async deleteOne(id: string): Promise<Event> {
    return this.eventModel.findByIdAndRemove(id);
  }
}
