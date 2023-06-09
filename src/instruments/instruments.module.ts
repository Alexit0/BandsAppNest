import { Module } from '@nestjs/common';
import { InstrumentsController } from './instruments.controller';
import { InstrumentsService } from './instruments.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Instruments } from 'src/entities/instruments.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Instruments])],
  controllers: [InstrumentsController],
  providers: [InstrumentsService]
})
export class InstrumentsModule {}
