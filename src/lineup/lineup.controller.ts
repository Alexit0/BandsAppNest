import {
  Controller,
  Get,
  Patch,
  Param,
  ParseIntPipe,
  Body,
} from '@nestjs/common';
import { LineupService } from './lineup.service';
import { LineupUpdateDto } from 'src/dtos/lineup.dto';

@Controller('lineup')
export class LineupController {
  constructor(private readonly lineupService: LineupService) {}

  @Get(':id')
  async getLineup(@Param('id', ParseIntPipe) id: number) {
    return this.lineupService.getLineup(id);
  }

  @Patch(':id')
  async updateLineup(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    body: LineupUpdateDto[],
  ) {
    return await this.lineupService.editLineup(id, body);
  }
}
