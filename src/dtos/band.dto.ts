import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateBandDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  country_of_origin: string;

  @IsNumber()
  year_formed: number;
}

export class UpdateBandDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  country_of_origin: string;

  @IsOptional()
  @IsNumber()
  year_formed: number;
}

