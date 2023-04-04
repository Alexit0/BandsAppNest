import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

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

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;



}