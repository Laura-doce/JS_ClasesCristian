import { Module } from '@nestjs/common';
import { BootcampService } from './bootcamp.service';
import { BootcampController } from './bootcamp.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bootcamp } from './entities/bootcamp.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Bootcamp])],
  controllers: [BootcampController],
  providers: [BootcampService],
})
export class BootcampModule {}
