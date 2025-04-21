import { Module } from '@nestjs/common';
import { SolicitudservicioService } from './solicitudservicio.service';
import { SolicitudservicioController } from './solicitudservicio.controller';

@Module({
  controllers: [SolicitudservicioController],
  providers: [SolicitudservicioService],
})
export class SolicitudservicioModule {}
