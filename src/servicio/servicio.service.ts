import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateServicioDto } from './dto/create-servicio.dto';
import { UpdateServicioDto } from './dto/update-servicio.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class ServicioService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
  create(createServicioDto: CreateServicioDto) {
    return this.servicio.create({
      data: createServicioDto
    })  }

  findOne() {
    return this.servicio.findFirst ;
  }

  remove(id: string) {
    return this.servicio.delete({where: {id}});
  }
}
