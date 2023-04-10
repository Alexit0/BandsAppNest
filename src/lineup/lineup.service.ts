import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { Band_mus_isnt } from 'src/entities/band_musician_instrument.entity';

interface LineupUpdate {
  bandId: number;
  musicianId: number;
  instrumentId: number;
}
[];

@Injectable()
export class LineupService {
  constructor(
    @InjectRepository(Band_mus_isnt)
    private lineupRepository: Repository<Band_mus_isnt>,
    private dataSource: DataSource,
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

  async editLineup(id: number, body: LineupUpdate[]) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    console.log('connected');
    await queryRunner.manager.query('PRAGMA foreign_keys=off');
    await queryRunner.startTransaction();

    try {
      await queryRunner.manager.query(`DELETE FROM lineup WHERE bandId=${id}`);
      console.log(`Band with the ID ${id} was removed`);

      body.forEach((element) =>
        queryRunner.manager.query(
          `INSERT INTO lineup (bandId, musicianId, instrumentId) VALUES (${+element.bandId}, ${+element.musicianId}, ${+element.instrumentId})`,
        ),
      );

      await queryRunner.commitTransaction();
      await queryRunner.manager.query('PRAGMA foreign_keys=on');
      await queryRunner.startTransaction();
      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }
}
