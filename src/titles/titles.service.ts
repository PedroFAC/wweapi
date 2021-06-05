import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Title } from 'src/models/interfaces/title';

@Injectable()
export class TitlesService {
  constructor(
    @Inject('TITLE_MODEL')
    private titleModel: Model<Title>,
  ) {}

  async findAll(): Promise<Title[]> {
    return this.titleModel.find().exec();
  }

  async findOne(id: string): Promise<Title> {
    return this.titleModel.findById(id);
  }

  async create(superstar: Title): Promise<Title> {
    const createdTitle = new this.titleModel(superstar);
    return createdTitle.save();
  }

  async updateOne(
    id: string,
    fieldsToUpdate: {
      name?: string;
      since?: string;
      currentWinner?: string;
      event?: string;
    },
  ): Promise<Title> {
    return this.titleModel.findByIdAndUpdate(id, fieldsToUpdate, {
      new: true,
    });
  }

  async deleteOne(id: string): Promise<Title> {
    return this.titleModel.findByIdAndRemove(id);
  }
}
