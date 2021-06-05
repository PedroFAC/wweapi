import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Faction } from 'src/models/interfaces/faction';
import { FactionsService } from './factions.service';

@Controller('factions')
export class FactionsController {
  constructor(private readonly factionsService: FactionsService) {}
  @Get()
  getAllFactions() {
    return this.factionsService.findAll();
  }

  @Get(':id')
  getFaction(@Param('id') factionId: string) {
    return this.factionsService.findOne(factionId);
  }

  @Post()
  addFaction(@Body('faction') faction: Faction) {
    return this.factionsService.create(faction);
  }

  @Patch(':id')
  updateFaction(
    @Param('id') factionId,
    @Body('fields')
    fieldsToUpdate: {
      name?: string;
      members?: string[];
      debutDate?: string;
      disbandDate?: string;
    },
  ) {
    return this.factionsService.updateOne(factionId, fieldsToUpdate);
  }

  @Delete(':id')
  deleteFaction(@Param('id') factionId: string) {
    return this.factionsService.deleteOne(factionId);
  }
}
