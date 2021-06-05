import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { TitlesController } from './titles.controller';
import { titlesProviders } from './titles.providers';
import { TitlesService } from './titles.service';

@Module({
  imports: [DatabaseModule],
  controllers: [TitlesController],
  providers: [TitlesService, ...titlesProviders],
})
export class TitlesModule {}
