import {
  Controller,
  Get,
  Post,
  HttpCode,
  Patch,
  Delete,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { BandsService } from './bands.service';
import { CreateBandDto, UpdateBandDto } from '../dtos/band.dto';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';

@Controller('bands')
export class BandsController {
  constructor(private readonly bandsService: BandsService) {}

  @Get('')
  getAllBands() {
    return this.bandsService.getAllBands();
  }

  @Get(':id')
  getBand(@Param('id', ParseIntPipe) id: number) {
    return this.bandsService.getBand(id);
  }

  @Post()
  addBand(@Body() body: CreateBandDto) {
    return this.bandsService.addBand(body);
  }

  @Patch(':id')
  editBand(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    body: UpdateBandDto,
  ) {
    console.log(body)

    return this.bandsService.editBand(id, body);
  }
  @HttpCode(204)
  @Delete(':id')
  deleteBand(@Param('id', ParseIntPipe) id: number) {
    return this.bandsService.deleteBand(id);
  }
}
