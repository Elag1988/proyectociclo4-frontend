import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DomicilioFormComponent } from './domicilio/domicilio-form/domicilio-form.component';
import { DomicilioListComponent } from './domicilio/domicilio-list/domicilio-list.component';
import { ProductoFormComponent } from './producto/producto-form/producto-form.component';
import { ProductoListComponent } from './producto/producto-list/producto-list.component';
import { HomeComponent } from './shared/home/home.component';

const routes: Routes = [

  {
    path: "",
    component: HomeComponent
  },

  {
    path: "producto/list",
    component: ProductoListComponent
  },

  {
    path: "producto/create",
    component: ProductoFormComponent
  },

  {
    path: "producto/edit/:id",
    component: ProductoFormComponent
  },

  {
    path: "domicilio/list",
    component: DomicilioListComponent
  },

  {
    path: "domicilio/create",
    component: DomicilioFormComponent
  },

  {
    path: "domicilio/edit/:id",
    component: DomicilioFormComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
