import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TitlesController } from './titles/titles.controller';
import { TitlesModule } from './titles/titles.module';
import { FactionController } from './faction/faction.controller';
import { FactionModule } from './faction/faction.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SuperstarsModule } from './superstars/superstars.module';
import { SuperstarsController } from './superstars/superstars.controller';

@Module({
  imports: [TitlesModule, FactionModule, SuperstarsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
