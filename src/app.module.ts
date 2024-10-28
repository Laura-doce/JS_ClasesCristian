import { BootcampModule } from './bootcamp/bootcamp.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BootcampsController } from './controllers/bootcamps.controller';
import { CoursesController } from './controllers/courses.controller';
import { UsersController } from './controllers/users.controller';
import { ReviewsController } from './controllers/reviews.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    BootcampModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3311,
      username: 'root',
      password: 'admin',
      database: 'bootcamps_2898754',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
      dropSchema: true,
      debug: true,
    }),
  ],
  controllers: [
    AppController,
    BootcampsController,
    CoursesController,
    UsersController,
    ReviewsController,
  ],
  providers: [AppService],
})
export class AppModule {}
