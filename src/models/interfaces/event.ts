import { Document } from 'mongoose';

export interface Event extends Document {
  name: string;
  date: string;
  payPerView: boolean;
  brand?: string;
  location: string;
  venue?: string;
}
