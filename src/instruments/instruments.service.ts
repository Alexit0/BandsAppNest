import { Injectable } from '@nestjs/common';
import { Instruments } from 'src/entities/instruments.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class InstrumentsService {
  constructor(
    @InjectRepository(Instruments)
    private instrumentsRepository: Repository<Instruments>, 
  ) {}

  getInstruments(): Promise<Instruments[]> {
    const results = this.instrumentsRepository.find();
    return results;
  }
}
