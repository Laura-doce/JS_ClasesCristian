import { Module } from '@nestjs/common';
import { BootcampsService } from './bootcamps.service';
import { BootcampsController } from './bootcamps.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bootcamp } from './entities/bootcamp.entity';
import { Course } from 'src/courses/entities/course.entity';
import { CoursesService } from 'src/courses/courses.service';
import { Review } from 'src/reviews/entities/review.entity';
import { ReviewsModule } from 'src/reviews/reviews.module';

@Module({
  imports: [TypeOrmModule.forFeature([Bootcamp, Course])],
  controllers: [BootcampsController],
  providers: [BootcampsService],
})
export class BootcampsModule {}
