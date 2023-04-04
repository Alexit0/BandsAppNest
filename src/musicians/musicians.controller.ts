import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { Musicians } from '../entities/musicians.entity';
import { MusiciansService } from './musicians.service';
import { CreateMusicianDto, UpdateMusicianDto } from '../dtos/musician.dto';

@Controller('musicians')
export class MusiciansController {
  constructor(private readonly musiciansService: MusiciansService) {}

  @Get('')
  getAllMusicians() {
    return this.musiciansService.getAllMusicians();
  }

  @Get(':id')
  getMusician(@Param('id', ParseIntPipe) id: number) {
    return this.musiciansService.getMusician(id);
  }

  @Post()
  addMusician(@Body() body: CreateMusicianDto) {
    return this.musiciansService.addMusician(body);
  }

  @Patch(':id')
  editMusician(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    body: UpdateMusicianDto,
  ) {
    return this.musiciansService.editMusician(id, body);
  }

  @HttpCode(204)
  @Delete(':id')
  deleteMusician(@Param('id', ParseIntPipe) id: number) {
    return this.musiciansService.deleteMusician(id);
  }
}
