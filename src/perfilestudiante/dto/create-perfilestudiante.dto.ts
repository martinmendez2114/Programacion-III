import { IsArray, IsString } from "class-validator"

export class CreatePerfilestudianteDto {
    @IsString()
  universidad:      string;
  @IsString()
  carrera:    string;
  @IsString()
  descripcion :     string;
  @IsArray()
  @IsString({ each: true })
  habilidades:      string[];
}
    