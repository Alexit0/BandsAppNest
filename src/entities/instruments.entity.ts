import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Band_mus_isnt } from './band_musician_instrument.entity';

@Entity()
export class Instruments {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Band_mus_isnt, (lineup) => lineup.instrument)
  lineup: Band_mus_isnt[];
}
