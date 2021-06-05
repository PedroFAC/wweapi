import { Schema } from 'mongoose';

export const TitleSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  since: {
    type: String,
    required: true,
  },
  currentWinner: {
    type: String,
    required: true,
  },
  event: {
    type: String,
    required: true,
  },
});
