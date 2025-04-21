import { PartialType } from '@nestjs/mapped-types';
import { CreatePerfilestudianteDto } from './create-perfilestudiante.dto';

export class UpdatePerfilestudianteDto extends PartialType(CreatePerfilestudianteDto) {}
