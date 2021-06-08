import { Schema } from 'mongoose';

export const SuperstarSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  realname: {
    type: String,
    required: false,
  },
  age: {
    type: Number,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  faction: {
    type: Schema.Types.ObjectId,
    ref: 'Faction',
    required: false,
  },
  titles: {
    type: [Schema.Types.ObjectId],
    ref: 'Title',
    required: false,
  },
  isLegend: {
    type: Boolean,
    required: true,
  },
});
