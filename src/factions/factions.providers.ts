import { Connection } from 'mongoose';
import { FactionSchema } from './factions.schema';

export const factionsProviders = [
  {
    provide: 'FACTION_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Faction', FactionSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
