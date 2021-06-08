import { Connection } from 'mongoose';
import { SuperstarSchema } from 'src/superstars/superstars.schema';
import { FactionSchema } from './factions.schema';

export const factionsProviders = [
  {
    provide: 'FACTION_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Faction', FactionSchema),
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'SUPERSTAR_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Superstar', SuperstarSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
