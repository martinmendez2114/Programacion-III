import { IsString } from "class-validator";

export class CreateSolicitudservicioDto {
    @IsString()
    mensaje :   string
}
