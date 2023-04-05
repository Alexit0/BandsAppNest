import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { Expose, Exclude } from 'class-transformer';

export class LineupResponseDto {
  id: number;
  @Exclude()
  musician: {
    id: number;
    first_name: string;
    last_name: string;
    yob: number;
    
    created_at: Date;
    updated_at: Date;
  };
  instrument: {
    id: number;
    name: string;
  };
}
