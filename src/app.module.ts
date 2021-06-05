import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TitlesModule } from './titles/titles.module';
import { FactionModule } from './faction/faction.module';
import { SuperstarsModule } from './superstars/superstars.module';
import { EventsModule } from './events/events.module';

@Module({
  imports: [TitlesModule, FactionModule, SuperstarsModule, EventsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
