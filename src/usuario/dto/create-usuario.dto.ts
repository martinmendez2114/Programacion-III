import { IsEmail, IsEnum, IsString } from "class-validator"

export enum Rol {
  ESTUDIANTE = 'ESTUDIANTE',
  CLIENTE = 'CLIENTE'
}

export class CreateUsuarioDto {
@IsString()
  nombre:      string
@IsString()
  apellido:    string
  @IsString()
  @IsEmail()
  email:       string
  @IsString()     
  contraseña:  string
  @IsEnum(Rol)
  rol: Rol;
}

