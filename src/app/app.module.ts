import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { CambiableComponent } from './cambiable/cambiable.component';
import { InicioComponent } from './cambiable/inicio/inicio.component';
import { IbodyComponent } from './cambiable/inicio/ibody/ibody.component';
import { IheaderComponent } from './cambiable/inicio/iheader/iheader.component';
import { NosotrosComponent } from './cambiable/nosotros/nosotros.component';
import { NheaderComponent } from './cambiable/nosotros/nheader/nheader.component';
import { NbodyComponent } from './cambiable/nosotros/nbody/nbody.component';
import { EspecialidadComponent } from './cambiable/especialidad/especialidad.component';
import { EbodyComponent } from './cambiable/especialidad/ebody/ebody.component';
import { EheaderComponent } from './cambiable/especialidad/eheader/eheader.component';
import { ContactanosComponent } from './cambiable/contactanos/contactanos.component';
import { CbodyComponent } from './cambiable/contactanos/cbody/cbody.component';
import { CheaderComponent } from './cambiable/contactanos/cheader/cheader.component';
import { CitaComponent } from './cambiable/cita/cita.component';
import { CiboletaComponent } from './cambiable/cita/ciboleta/ciboleta.component';
import { CiconfirmacionComponent } from './cambiable/cita/ciconfirmacion/ciconfirmacion.component';
import { CiheaderComponent } from './cambiable/cita/ciheader/ciheader.component';
import { CiespecialidadComponent } from './cambiable/cita/ciespecialidad/ciespecialidad.component';
import { CifechasComponent } from './cambiable/cita/cifechas/cifechas.component';
import { CihorasComponent } from './cambiable/cita/cihoras/cihoras.component';
import { CipagoComponent } from './cambiable/cita/cipago/cipago.component';
import { CipostergacionComponent } from './cambiable/cita/cipostergacion/cipostergacion.component';
import { CibodyComponent } from './cambiable/cita/cibody/cibody.component';
import { CilogueoComponent } from './cambiable/cita/cilogueo/cilogueo.component';
import { CiregistroComponent } from './cambiable/cita/ciregistro/ciregistro.component';
import { LoguinComponent } from './cambiable/cita/loguin/loguin.component';
import { ConsultasComponent } from './cambiable/consultas/consultas.component';
import { CoheaderComponent } from './cambiable/consultas/coheader/coheader.component';
import { CobodyComponent } from './cambiable/consultas/cobody/cobody.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CambiableComponent,
    InicioComponent,
    IbodyComponent,
    IheaderComponent,
    NosotrosComponent,
    NheaderComponent,
    NbodyComponent,
    EspecialidadComponent,
    EbodyComponent,
    EheaderComponent,
    ContactanosComponent,
    CbodyComponent,
    CheaderComponent,
    CitaComponent,
    CiboletaComponent,
    CiconfirmacionComponent,
    CiheaderComponent,
    CiespecialidadComponent,
    CifechasComponent,
    CihorasComponent,
    CipagoComponent,
    CipostergacionComponent,
    CibodyComponent,
    CilogueoComponent,
    CiregistroComponent,
    LoguinComponent,
    ConsultasComponent,
    CoheaderComponent,
    CobodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
