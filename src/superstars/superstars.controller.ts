import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { Superstar } from 'src/models/interfaces/superstar';
import { SuperstarsService } from './superstars.service';

@Controller('superstars')
export class SuperstarsController {
  constructor(private readonly superstarsService: SuperstarsService) {}

  @Get()
  getAllSuperstars() {
    return this.superstarsService.findAll();
  }

  @Get(':id')
  getSuperstar(@Param('id') superstarId: string) {
    return this.superstarsService.findOne(superstarId);
  }

  @Post()
  addSuperstar(@Body('superstar') superstar: Superstar) {
    return this.superstarsService.create(superstar);
  }

  @Patch(':id')
  updateSuperstar(
    @Param('id') superstarId,
    @Body('fields')
    fieldsToChange: {
      name?: string;
      realName?: string;
      age?: number;
      brand?: string;
      weight?: number;
      height?: number;
      faction?: string;
    },
  ) {
    return this.superstarsService.updateOne(superstarId, fieldsToChange);
  }

  @Delete(':id')
  deleteSuperstar(@Param('id') superstarId: string) {
    return this.superstarsService.deleteOne(superstarId);
  }
}
