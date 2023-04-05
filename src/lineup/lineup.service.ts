import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Band_mus_isnt } from 'src/entities/band_musician_instrument.entity';

@Injectable()
export class LineupService {
  constructor(
    @InjectRepository(Band_mus_isnt)
    private lineupRepository: Repository<Band_mus_isnt>,
  ) {}

  getLineup(id: number): Promise<Band_mus_isnt[]> {
    return this.lineupRepository
      .createQueryBuilder('lineup')
      .leftJoin('lineup.band', 'band')
      .leftJoinAndSelect('lineup.musician', 'musician')
      .leftJoinAndSelect('lineup.instrument', 'instrument')
      .where('lineup.bandId = :bandId', { bandId: id })
      .getMany();
  }
}
