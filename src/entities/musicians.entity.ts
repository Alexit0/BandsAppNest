import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}
