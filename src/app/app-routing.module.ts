import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NosotrosComponent } from './cambiable/nosotros/nosotros.component';
import { CitaComponent } from './cambiable/cita/cita.component';
import { InicioComponent } from './cambiable/inicio/inicio.component';
import { ContactanosComponent } from './cambiable/contactanos/contactanos.component';
import { EspecialidadComponent } from './cambiable/especialidad/especialidad.component';
import { ConsultasComponent } from './cambiable/consultas/consultas.component';

const routes: Routes = [
  { path: '', component: InicioComponent},
  { path: 'nosotros', component: NosotrosComponent},
  { path: 'cita', component: CitaComponent},
  { path: 'contactanos', component: ContactanosComponent},
  { path: 'especialidad', component: EspecialidadComponent},
  { path: 'consultas', component: ConsultasComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
