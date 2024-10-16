import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BootcampController } from './controllers/bootcamp.controller';
import { CourseController } from './controllers/course.controller';
import { ReviewController } from './controllers/review.controller';
import { UserController } from './controllers/user.controller';

@Module({
  imports: [],
  controllers: [AppController, BootcampController, CourseController, ReviewController, UserController],
  providers: [AppService],
})
export class AppModule {}
