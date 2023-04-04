import { Module } from '@nestjs/common';
import { LineupController } from './lineup.controller';
import { LineupService } from './lineup.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Band_mus_isnt } from 'src/entities/band_musician_instrument.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Band_mus_isnt])],
  controllers: [LineupController],
  providers: [LineupService]
})
export class LineupModule {}
