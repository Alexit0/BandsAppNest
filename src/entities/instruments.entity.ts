import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Instruments {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
