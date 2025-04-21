import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateSolicitudservicioDto } from './dto/create-solicitudservicio.dto';
import { UpdateSolicitudservicioDto } from './dto/update-solicitudservicio.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class SolicitudservicioService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
  create(createSolicitudservicioDto: CreateSolicitudservicioDto) {
    return this.solicitudServicio.create({
      data: createSolicitudservicioDto
    })
  }

  findOne() {
    return this.servicio.findFirst;
  }

  remove(id: string) {
    return this.servicio.delete({where: {id}});
  }
}
