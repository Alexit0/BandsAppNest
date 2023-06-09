import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Band_mus_isnt } from './band_musician_instrument.entity';

@Entity()
export class Bands {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  country_of_origin: string;

  @Column()
  year_formed: number;

  @Column({nullable: true})
  year_end: number;

  @Column({ nullable: true })
  spotify_id: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @Column({ nullable: true})
  status: string

  @OneToMany(() => Band_mus_isnt, (lineup) => lineup.band)
  lineup: Band_mus_isnt[];
}
