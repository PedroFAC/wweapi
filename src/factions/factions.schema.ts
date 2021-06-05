import { Schema } from 'mongoose';

export const FactionSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  members: {
    type: [String],
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
