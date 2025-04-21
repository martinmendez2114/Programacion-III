import { Module } from '@nestjs/common';
import { PerfilestudianteService } from './perfilestudiante.service';
import { PerfilestudianteController } from './perfilestudiante.controller';

@Module({
  controllers: [PerfilestudianteController],
  providers: [PerfilestudianteService],
})
export class PerfilestudianteModule {}
