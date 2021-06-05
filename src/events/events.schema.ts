import { Schema } from 'mongoose';

export const EventSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  payPerView: {
    type: Boolean,
    required: true,
  },
  brand: {
    type: String,
    required: false,
  },
  location: {
    type: String,
    required: true,
  },
  venue: {
    type: String,
    required: false,
  },
});
