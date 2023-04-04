import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Bands } from './bands.entity';
import { Musicians } from './musicians.entity';
import { Instruments } from './instruments.entity';

@Entity({ name: 'lineup' })
export class Band_mus_isnt {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Bands, (band) => band.lineup, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  band: Bands;

  @ManyToOne(() => Musicians, (musician) => musician.lineup, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  musician: Musicians;

  @ManyToOne(() => Instruments, (instrument) => instrument.lineup, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  instrument: Instruments;
}
