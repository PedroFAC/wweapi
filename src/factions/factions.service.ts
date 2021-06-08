import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Faction } from 'src/models/interfaces/faction';
import { Superstar } from 'src/models/interfaces/superstar';

@Injectable()
export class FactionsService {
  constructor(
    @Inject('FACTION_MODEL')
    private factionModel: Model<Faction>,
    @Inject('SUPERSTAR_MODEL')
    private superstarModel: Model<Superstar>,
  ) {}

  async findAll(): Promise<Faction[]> {
    return this.factionModel.find().populate('members').exec();
  }

  async findOne(id: string): Promise<Faction> {
    return this.factionModel.findById(id).populate('members');
  }

  async create(faction: Faction): Promise<Faction> {
    const createdFaction = new this.factionModel(faction);
    createdFaction.members.forEach(async (member) => {
      console.log(
        await this.superstarModel.findByIdAndUpdate(
          member,
          {
            $set: { faction: createdFaction._id },
          },
          { new: true, upsert: true },
        ),
      );
    });
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
    return this.factionModel
      .findByIdAndUpdate(id, fieldsToUpdate, {
        new: true,
      })
      .populate('members');
  }

  async deleteOne(id: string): Promise<Faction> {
    return this.factionModel.findByIdAndRemove(id);
  }
}
