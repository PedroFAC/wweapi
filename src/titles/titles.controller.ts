import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Title } from 'src/models/interfaces/title';
import { TitlesService } from './titles.service';

@Controller('titles')
export class TitlesController {
  constructor(private readonly titlesService: TitlesService) {}

  @Get()
  getAllTitles() {
    return this.titlesService.findAll();
  }

  @Get(':id')
  getTitle(@Param('id') titleId: string) {
    return this.titlesService.findOne(titleId);
  }

  @Post()
  addTitle(@Body('title') title: Title) {
    return this.titlesService.create(title);
  }

  @Patch(':id')
  updateTitle(
    @Param('id') titleId,
    @Body('fields')
    fieldsToUpdate: {
      name?: string;
      since?: string;
      currentWinner?: string;
      event?: string;
    },
  ) {
    return this.titlesService.updateOne(titleId, fieldsToUpdate);
  }

  @Delete(':id')
  deleteTitle(@Param('id') titleId: string) {
    return this.titlesService.deleteOne(titleId);
  }
}
