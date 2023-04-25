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
import { LineupModule } from './lineup/lineup.module';
import { InstrumentsModule } from './instruments/instruments.module';
import { AuthModule } from './auth/auth.module';
import { Users } from './entities/users.entity';



@Module({
  imports: [
    InstrumentsModule,
    AuthModule,
    BandsModule,
    MusiciansModule,
    LineupModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite3',
      entities: [Bands, Musicians, Instruments, Band_mus_isnt, Users],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
