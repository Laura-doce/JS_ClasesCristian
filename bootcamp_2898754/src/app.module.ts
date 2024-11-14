import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BootcampsModule } from './bootcamps/bootcamps.module';
import { CoursesModule } from './courses/courses.module';
import { UsersModule } from './users/users.module';
import { ReviewsModule } from './reviews/reviews.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: "mysql",
    host:"localhost",
    port:5500,
    username: "root",
    password: "admin",
    database: "bootcamp_2898754",
    entities:[],
    synchronize:true,
    autoLoadEntities:true,
    dropSchema: true
  }), BootcampsModule, CoursesModule, UsersModule, ReviewsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
