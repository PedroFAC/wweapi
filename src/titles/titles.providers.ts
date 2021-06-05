import { Connection } from 'mongoose';
import { TitleSchema } from './titles.schema';

export const titlesProviders = [
  {
    provide: 'TITLE_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Title', TitleSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
