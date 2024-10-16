import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Student } from './entities/Student.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //Endponit: puerta del software
  // Acepta peticiones de cliente bajo una url semantica 
  // Retornar el(los) datos esperados al cliente

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  // Segundo endpoint - ESTRUCTURAR UN ENDPOINT
  // 1. Verbo(Metodo) Http sobre el cual recibir
  // Metodos disponicles : GET
  // 2. firma del metodo a ejecutar 
  //    cuando se invoque el endpoint
  @Get("/ficha")
  getFicha(): string {
    return "endpoint de la ficha 2902093"
}
//tercer endpoint
@Get("/identificacion/:id/ciudad/:ciudad")
  identificacion (@Param ('id') id:string,
                  @Param('ciudad') ciudad:string,
                  @Query ('nombre')nombre:string,
                  @Query ('edad')edad:number):Student{
    return new Student(+id, nombre, edad , ciudad);
  }

}
