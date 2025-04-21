import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class UsuarioService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
  create(createUsuarioDto: CreateUsuarioDto) {
    return this.usuario.create({
      data: createUsuarioDto
    });
  }

  findOne() {
    return this.usuario.findFirst();
  }

  remove(id: string) {
    return this.usuario.delete({where: {id}});
  }
}
