import { Document } from 'mongoose';

export interface Superstar extends Document {
  name: string;
  realName?: string;
  age: number;
  brand: string;
  weight: number;
  height: number;
  faction?: string;
  isLegend: boolean;
  titles?: string[];
}
