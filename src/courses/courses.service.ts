import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
@Injectable()
export class CoursesService {

  constructor(@InjectRepository(Course)
  private readonly courseRepository: Repository<Course>) {} 

  create(payload: any) {
      const newCourse =this.courseRepository.create(payload)
      return this.courseRepository.save (newCourse)
    }

  findAll() {
    return this.courseRepository.find()
  }

  findOne(id: number) {
    return this.courseRepository.findOneBy(
       { id : id});
  }

  
  async update(id: number, payload: any) {
    const updCourse =
    await this.courseRepository.findOneBy({id});
    return this.courseRepository.merge(updCourse, payload);
    return this.courseRepository.save(updCourse) 
   }

    async remove(id: number) {
    const delCourse = 
    await this.courseRepository.findOneBy({id});
    this.courseRepository.delete(delCourse)
    return delCourse   
  }
}
