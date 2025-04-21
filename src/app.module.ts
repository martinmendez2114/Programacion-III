import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { PerfilestudianteModule } from './perfilestudiante/perfilestudiante.module';
import { ServicioModule } from './servicio/servicio.module';
import { SolicitudservicioModule } from './solicitudservicio/solicitudservicio.module';


@Module({
  imports: [UsuarioModule, PerfilestudianteModule, ServicioModule, SolicitudservicioModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
