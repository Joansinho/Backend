import { Injectable, Delete } from '@nestjs/common';
import { CreateBootcampDto } from './dto/create-bootcamp.dto';
import { UpdateBootcampDto } from './dto/update-bootcamp.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Bootcamp } from './entities/bootcamp.entity';
@Injectable()
export class BootcampsService {

  //Intectar: obtener una instancia del 
  //repositorio como atributo de 
  //la clase BootcampsService
  constructor(@InjectRepository(Bootcamp)
  private bootcampRepository:Repository<Bootcamp> ){

  }

  create(payload: any) {
      //crear una instancia de una entity bootcamp
      const newBootcamp = this.bootcampRepository.create(payload)
      //grabar esa instancia y retornarla   
      return this.bootcampRepository.save (newBootcamp);
  }

  findAll() {
    return this.bootcampRepository.find()
  }

  findOne(id: number) {
    return this.bootcampRepository.findOneBy(
       { id });
  }

   async update(id: number, payload: any) {
      const updBootcamp = 
          await this.bootcampRepository.findOneBy({id});
          return this.bootcampRepository.merge(updBootcamp, payload);
          return this.bootcampRepository.save(updBootcamp)
  }

  async remove(id: number) {
    const delBootcamp = 
          await this.bootcampRepository.findOneBy({id});
          this.bootcampRepository.delete(delBootcamp)
          return delBootcamp 
  }
}
