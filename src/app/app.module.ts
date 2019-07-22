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
    NbodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
