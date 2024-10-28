import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { query } from 'express';
import { Student } from './entidades/Stuents';

@Controller() //Decorador, funciona para dar un comportamiento extra predetermiando
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Como estas sapito?';
  }

  //Endpoint
  //Conector entre la comucion entre 2 componentes
  @Get('ejemplo')
  Ejemplo(): string {https://github.com/Laura-doce/classCristian.git
    return 'ejemplo';
  }
  //Endpoint con parametros
  @Get('identificacion/:id/:nombre')
  getIdenticifacion(
    //Parametros
    @Param('id') id: number,
    @Param('nombre') nom: string,
    //Parametro QUERY
    @Query('cel') cel: number,
    @Query('edad') edad: number,
  ): Student {
    return new Student(id, nom, cel, edad);
  }
  //Retorno STRING:`num de Idetificacion: ${id}, nombre: ${nom}, cel: ${cel}, edad: ${edad} `;

  //Retorno Objeto JSON
  //numero_id: id,
  //nombre: nom,
  //celular: cel,
  //edad: edad,
  //};
}
