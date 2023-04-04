import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Bands } from '../entities/bands.entity';

interface Band {
  name: string;
  country_of_origin: string;
  year_formed: number;
}

interface BandUpdate {
  name?: string;
  country_of_origin?: string;
  year_formed?: number;
}

@Injectable()
export class BandsService {
  constructor(
    @InjectRepository(Bands) private bandsRepository: Repository<Bands>,
  ) {}

  getAllBands(): Promise<Bands[]>  {
    const results = this.bandsRepository.find()
    return results;
  }

  getBand(id: number): Promise<Bands> {
    return this.bandsRepository.findOneBy({ id });
  }

  addBand({ name, country_of_origin, year_formed }: Band): Promise<Bands> {
    const newBand = {
      name,
      country_of_origin,
      year_formed,
      created_at: new Date(),
      updated_at: new Date(),
    };
    return this.bandsRepository.save(newBand);
  }

  editBand(
    id: number,
    { name, country_of_origin, year_formed }: BandUpdate,
  ): Promise<UpdateResult> {
    const newBand = {
      name,
      country_of_origin,
      year_formed,
      updated_at: new Date(),
    };
    return this.bandsRepository.update(id, newBand);
  }

  deleteBand(id: number): Promise<DeleteResult> {
    return this.bandsRepository.delete(id);
  }
}
