import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { LineupService } from './lineup.service';
import { LineupResponseDto } from 'src/dtos/lineup.dto';

@Controller('lineup')
export class LineupController {
  constructor(private readonly lineupService: LineupService) {}

  @Get(':id')
  async getLineup(@Param('id', ParseIntPipe) id: number) {
    return this.lineupService.getLineup(id);
  }
}
