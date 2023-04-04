import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Band_mus_isnt } from './band_musician_instrument.entity';

@Entity()
export class Musicians {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  yob: number;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @OneToMany(() => Band_mus_isnt, (lineup) => lineup.musician)
  lineup: Band_mus_isnt[];
}
