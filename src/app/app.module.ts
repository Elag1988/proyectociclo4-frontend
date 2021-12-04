import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoListComponent } from './producto/producto-list/producto-list.component';
import { ProductoFormComponent } from './producto/producto-form/producto-form.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './shared/home/home.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { DomicilioListComponent } from './domicilio/domicilio-list/domicilio-list.component';
import { DomicilioFormComponent } from './domicilio/domicilio-form/domicilio-form.component';
import { FooterComponent } from './shared/footer/footer.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductoListComponent,
    ProductoFormComponent,
    NavbarComponent,
    HomeComponent,
    DomicilioListComponent,
    DomicilioFormComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
