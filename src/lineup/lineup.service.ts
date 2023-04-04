import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  Repository,
  UpdateResult,
  DeleteResult,
  createQueryBuilder,
} from 'typeorm';
import { Band_mus_isnt } from 'src/entities/band_musician_instrument.entity';
import { Instruments } from 'src/entities/instruments.entity';
import { Musicians } from 'src/entities/musicians.entity';
import { Bands } from 'src/entities/bands.entity';

@Injectable()
export class LineupService {
  constructor(
    @InjectRepository(Band_mus_isnt)
    private lineupRepository: Repository<Band_mus_isnt>,
    @InjectRepository(Band_mus_isnt)
    private instrumentsRepository: Repository<Instruments>,
    @InjectRepository(Band_mus_isnt)
    private musiciansRepository: Repository<Musicians>,
    @InjectRepository(Band_mus_isnt)
    private bandsRepository: Repository<Bands>,
  ) {}

  getLineup(id: number) {
    return this.lineupRepository
      .createQueryBuilder('lineup')
      .leftJoin('lineup.band', 'band')
      .leftJoin('lineup.musician', 'musician')
      .leftJoin('lineup.instrument', 'instrument')
      .where('lineup.bandId = :bandId', { bandid: id })
      .getOne();
  }
}
