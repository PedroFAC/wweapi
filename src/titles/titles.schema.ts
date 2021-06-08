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
    type: Schema.Types.ObjectId,
    ref: 'Superstar',
    required: true,
  },
  event: {
    type: Schema.Types.ObjectId,
    ref: 'Event',
    required: true,
  },
});
