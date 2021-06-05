import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Faction } from 'src/models/interfaces/faction';

@Injectable()
export class FactionsService {
  constructor(
    @Inject('FACTION_MODEL')
    private factionModel: Model<Faction>,
  ) {}

  async findAll(): Promise<Faction[]> {
    return this.factionModel.find().exec();
  }

  async findOne(id: string): Promise<Faction> {
    return this.factionModel.findById(id);
  }

  async create(faction: Faction): Promise<Faction> {
    const createdFaction = new this.factionModel(faction);
    return createdFaction.save();
  }

  async updateOne(
    id: string,
    fieldsToUpdate: {
      name?: string;
      members?: string[];
      debutDate?: string;
      disbandDate?: string;
    },
  ): Promise<Faction> {
    return this.factionModel.findByIdAndUpdate(id, fieldsToUpdate, {
      new: true,
    });
  }

  async deleteOne(id: string): Promise<Faction> {
    return this.factionModel.findByIdAndRemove(id);
  }
}
