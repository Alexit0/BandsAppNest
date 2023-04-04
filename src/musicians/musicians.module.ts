import { Module } from '@nestjs/common';
import { MusiciansController } from './musicians.controller';
import { MusiciansService } from './musicians.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Musicians } from '../entities/musicians.entity';
import { Band_mus_isnt } from 'src/entities/band_musician_instrument.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Musicians])],
  controllers: [MusiciansController],
  providers: [MusiciansService],
})
export class MusiciansModule {}
