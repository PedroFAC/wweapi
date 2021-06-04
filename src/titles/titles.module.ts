import { Module } from '@nestjs/common';
import { TitlesService } from './titles.service';

@Module({
  providers: [TitlesService]
})
export class TitlesModule {}
