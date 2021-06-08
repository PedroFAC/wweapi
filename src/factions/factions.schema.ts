import { Schema } from 'mongoose';

export const FactionSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  members: {
    type: [Schema.Types.ObjectId],
    ref: 'Superstar',
    required: true,
  },
  debutDate: {
    type: String,
    required: true,
  },
  disbandDate: {
    type: String,
    required: false,
  },
});
