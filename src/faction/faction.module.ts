import { Module } from '@nestjs/common';
import { FactionService } from './faction.service';

@Module({
  providers: [FactionService],
})
export class FactionModule {}
