import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Superstar } from '../models/interfaces/superstar';

@Injectable()
export class SuperstarsService {
  constructor(
    @Inject('SUPERSTAR_MODEL')
    private superStarModel: Model<Superstar>,
  ) {}

  async findAll(): Promise<Superstar[]> {
    return this.superStarModel.find().exec();
  }

  async findOne(id: string): Promise<Superstar> {
    return this.superStarModel.findById(id);
  }

  async create(superstar: Superstar): Promise<Superstar> {
    const createdSuperstar = new this.superStarModel(superstar);
    return createdSuperstar.save();
  }

  async updateOne(
    id: string,
    fieldsToUpdate: {
      name?: string;
      realName?: string;
      age?: number;
      brand?: string;
      weight?: number;
      height?: number;
      faction?: string;
    },
  ): Promise<Superstar> {
    return this.superStarModel.findByIdAndUpdate(id, fieldsToUpdate, {
      new: true,
    });

    // this.superStarModel
    //   .findById(id)
    //   .then((superstar) => {
    //     superstar.name = fieldsToUpdate.name;
    //     superstar.realName = fieldsToUpdate.realName;
    //     superstar.age = fieldsToUpdate.age;
    //     superstar.brand = fieldsToUpdate.brand;
    //     superstar.weight = fieldsToUpdate.weight;
    //     superstar.height = fieldsToUpdate.height;
    //     superstar.faction = fieldsToUpdate.faction;
    //     return superstar.save();
    //   })
    //   .catch((err) => console.log(err));
  }

  async deleteOne(id: string): Promise<Superstar> {
    return this.superStarModel.findByIdAndRemove(id);
  }
}
