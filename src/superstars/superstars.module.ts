import { Module } from '@nestjs/common';
import { SuperstarsController } from './superstars.controller';
import { SuperstarsService } from './superstars.service';
import { superstarsProviders } from './superstars.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [SuperstarsController],
  providers: [SuperstarsService, ...superstarsProviders],
})
export class SuperstarsModule {}
