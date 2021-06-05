import { Module } from '@nestjs/common';
import { FactionsService } from './factions.service';
import { factionsProviders } from './factions.providers';
import { FactionsController } from './factions.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [FactionsController],
  providers: [FactionsService, ...factionsProviders],
})
export class FactionModule {}
