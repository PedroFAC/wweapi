import { Document } from 'mongoose';

export interface Title extends Document {
  name: string;
  since: string;
  currentWinner: string;
  event: string;
}
