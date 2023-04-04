import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Musicians } from '../entities/musicians.entity';

interface Musician {
  first_name: string;
  last_name: string;
  yob: number;
}

interface MusicianUpdate {
  first_name?: string;
  last_name?: string;
  yob?: number;
}

@Injectable()
export class MusiciansService {
  constructor(
    @InjectRepository(Musicians)
    private musiciansRepository: Repository<Musicians>,
  ) {}

  getAllMusicians(): Promise<Musicians[]> {
    return this.musiciansRepository.find();
  }

  getMusician(id: number): Promise<Musicians> {
    return this.musiciansRepository.findOneBy({ id });
  }

  addMusician({ first_name, last_name, yob }: Musician): Promise<Musicians> {
    const newMusician = {
      first_name,
      last_name,
      yob,
      created_at: new Date(),
      updated_at: new Date(),
    };

    return this.musiciansRepository.save(newMusician);
  }

  editMusician(
    id: number,
    { first_name, last_name, yob }: MusicianUpdate,
  ): Promise<UpdateResult> {
    const newMusician = {
      first_name,
      last_name,
      yob,
      updated_at: new Date(),
    };

    return this.musiciansRepository.update(id, newMusician);
  }

  deleteMusician(id: number): Promise<DeleteResult> {
    return this.musiciansRepository.delete(id);
  }
}
