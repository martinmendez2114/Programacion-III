import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PerfilestudianteService } from './perfilestudiante.service';
import { CreatePerfilestudianteDto } from './dto/create-perfilestudiante.dto';

@Controller('perfilestudiante')
export class PerfilestudianteController {
  constructor(private readonly perfilestudianteService: PerfilestudianteService) {}

  @Post()
  create(@Body() createPerfilestudianteDto: CreatePerfilestudianteDto) {
    return this.perfilestudianteService.create(createPerfilestudianteDto);
  }

  @Get()
  findOne() {
    return this.perfilestudianteService.findOne();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.perfilestudianteService.remove(id);
  }
}
