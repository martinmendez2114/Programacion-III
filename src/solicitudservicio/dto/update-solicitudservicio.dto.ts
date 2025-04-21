import { PartialType } from '@nestjs/mapped-types';
import { CreateSolicitudservicioDto } from './create-solicitudservicio.dto';

export class UpdateSolicitudservicioDto extends PartialType(CreateSolicitudservicioDto) {}
