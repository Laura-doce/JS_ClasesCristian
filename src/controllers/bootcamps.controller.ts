import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('bootcamps')
export class BootcampsController {
  @Get()
  getBootcamps() {
    return 'Todos los bootcamps';
  }

  @Get(':id')
  getBootcampsId(@Query('id') id: number): string {
    return `Estado: ${id}`;
  }
}
