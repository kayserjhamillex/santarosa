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
import { BlogComponent } from './cambiable/blog/blog.component';
import { BheaderComponent } from './cambiable/blog/bheader/bheader.component';
import { BbodyComponent } from './cambiable/blog/bbody/bbody.component';
import { PreguntaComponent } from './cambiable/pregunta/pregunta.component';
import { PrbodyComponent } from './cambiable/pregunta/prbody/prbody.component';
import { PrheaderComponent } from './cambiable/pregunta/prheader/prheader.component';
import { PortafolioComponent } from './cambiable/portafolio/portafolio.component';
import { PheaderComponent } from './cambiable/portafolio/pheader/pheader.component';
import { PbodyComponent } from './cambiable/portafolio/pbody/pbody.component';
import { GaleriaComponent } from './cambiable/galeria/galeria.component';
import { GbodyComponent } from './cambiable/galeria/gbody/gbody.component';
import { GheaderComponent } from './cambiable/galeria/gheader/gheader.component';
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
import { CiiniciadoComponent } from './cambiable/cita/ciheader/ciiniciado/ciiniciado.component';
import { CiniiniciadoComponent } from './cambiable/cita/ciheader/ciniiniciado/ciniiniciado.component';
import { CilogueoComponent } from './cambiable/cita/cilogueo/cilogueo.component';
import { CiregistroComponent } from './cambiable/cita/ciregistro/ciregistro.component';

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
    BlogComponent,
    BheaderComponent,
    BbodyComponent,
    PreguntaComponent,
    PrbodyComponent,
    PrheaderComponent,
    PortafolioComponent,
    PheaderComponent,
    PbodyComponent,
    GaleriaComponent,
    GbodyComponent,
    GheaderComponent,
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
    CiiniciadoComponent,
    CiniiniciadoComponent,
    CilogueoComponent,
    CiregistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
