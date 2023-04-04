import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Bands } from './entities/bands.entity';
import { BandsModule } from './bands/bands.module';
import { Musicians } from './entities/musicians.entity';
import { Instruments } from './entities/instruments.entity';
import { MusiciansModule } from './musicians/musicians.module';
import { Band_mus_isnt } from './entities/band_musician_instrument.entity';

@Module({
  imports: [
    BandsModule,
    MusiciansModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite3',
      entities: [Bands, Musicians, Instruments, Band_mus_isnt],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
