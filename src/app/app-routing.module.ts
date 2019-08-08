import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NosotrosComponent } from './cambiable/nosotros/nosotros.component';
import { GaleriaComponent } from './cambiable/galeria/galeria.component';
import { CitaComponent } from './cambiable/cita/cita.component';
import { InicioComponent } from './cambiable/inicio/inicio.component';
import { BlogComponent } from './cambiable/blog/blog.component';
import { ContactanosComponent } from './cambiable/contactanos/contactanos.component';
import { EspecialidadComponent } from './cambiable/especialidad/especialidad.component';
import { PortafolioComponent } from './cambiable/portafolio/portafolio.component';
import { PreguntaComponent } from './cambiable/pregunta/pregunta.component';

const routes: Routes = [
  { path: '', component: InicioComponent},
  { path: 'nosotros', component: NosotrosComponent},
  { path: 'galeria', component: GaleriaComponent},
  { path: 'cita', component: CitaComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'contactanos', component: ContactanosComponent},
  { path: 'especialidad', component: EspecialidadComponent},
  { path: 'portafolio', component: PortafolioComponent},
  { path: 'pregunta', component: PreguntaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
