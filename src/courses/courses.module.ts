import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoursesController } from './courses.controller';
import { Course } from './entities/course.entity';
@Module({
  imports: [TypeOrmModule.forFeature([ Course ])],
  controllers: [CoursesController],
  providers: [CoursesService],
})
export class CoursesModule {}
