import { Connection } from 'mongoose';
import { SuperstarSchema } from './schemas/superstars.schema';

export const superstarsProviders = [
  {
    provide: 'SUPERSTAR_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Superstar', SuperstarSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
