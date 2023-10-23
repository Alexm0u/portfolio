import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SobreMiPageComponent } from './pages/sobre-mi-page/sobre-mi-page.component';
import { ProyectosPageComponent } from './pages/proyectos-page/proyectos-page.component';
import { ContactoPageComponent } from './pages/contacto-page/contacto-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'sobre-mi', component: SobreMiPageComponent},
  {path: 'proyectos', component: ProyectosPageComponent},
  {path: 'contacto', component: ContactoPageComponent},
  {path: '**', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
