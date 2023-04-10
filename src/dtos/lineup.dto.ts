import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class LineupUpdateDto {
  @IsNotEmpty()
  @IsNumber()
  bandId: number;
  @IsNumber()
  musicianId: number;
  @IsNumber()
  instrumentId: number;
}
