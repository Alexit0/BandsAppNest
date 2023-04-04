import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateMusicianDto {
  @IsNotEmpty()
  @IsString()
  first_name: string;

  @IsNotEmpty()
  @IsString()
  last_name: string;

  @IsNumber()
  yob: number;
}

export class UpdateMusicianDto {
  @IsOptional()
  @IsString()
  first_name: string;

  @IsOptional()
  @IsString()
  last_name: string;

  @IsOptional()
  @IsNumber()
  yob: number;
}

