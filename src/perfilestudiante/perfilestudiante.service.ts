import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreatePerfilestudianteDto } from './dto/create-perfilestudiante.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class PerfilestudianteService extends PrismaClient implements OnModuleInit{
 async onModuleInit() {
   await this.$connect();
 }
 create(CreatePerfilestudianteDto: CreatePerfilestudianteDto) {
  return this.perfilEstudiante.create({
    data: CreatePerfilestudianteDto
  });
 }

  findOne() {
    return this.perfilEstudiante.findFirst();
  }

  remove(id: string) {
    return this.perfilEstudiante.delete({where: {id}});
  }
}
