import { Module } from '@nestjs/common';
import { BandsController } from './bands.controller';
import { BandsService } from './bands.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bands } from '../entities/bands.entity';
import { JwtModule } from '@nestjs/jwt/dist';

@Module({
  imports: [TypeOrmModule.forFeature([Bands])],
  controllers: [BandsController],
  providers: [BandsService],
})
export class BandsModule {}
