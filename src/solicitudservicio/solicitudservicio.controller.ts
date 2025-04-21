import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SolicitudservicioService } from './solicitudservicio.service';
import { CreateSolicitudservicioDto } from './dto/create-solicitudservicio.dto';
import { UpdateSolicitudservicioDto } from './dto/update-solicitudservicio.dto';

@Controller('solicitudservicio')
export class SolicitudservicioController {
  constructor(private readonly solicitudservicioService: SolicitudservicioService) {}

  @Post()
  create(@Body() createSolicitudservicioDto: CreateSolicitudservicioDto) {
    return this.solicitudservicioService.create(createSolicitudservicioDto);
  }

  @Get()
  findOne() {
    return this.solicitudservicioService.findOne();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.solicitudservicioService.remove(id);
  }
}
