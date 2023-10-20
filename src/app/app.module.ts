import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProyectosPageComponent } from './pages/proyectos-page/proyectos-page.component';
import { SobreMiPageComponent } from './pages/sobre-mi-page/sobre-mi-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProyectosPageComponent,
    SobreMiPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
