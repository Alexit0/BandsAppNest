import { Controller, Get } from '@nestjs/common';
import { InstrumentsService } from './instruments.service';

@Controller('instruments')
export class InstrumentsController {
  constructor(private readonly instrumentsService: InstrumentsService) {}

  @Get('')
  getInstruments() {
    return this.instrumentsService.getInstruments();
  }
}
