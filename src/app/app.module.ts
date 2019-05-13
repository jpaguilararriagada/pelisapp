import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { MovieComponent } from './components/movie/movie.component';
// RUTEO
import { AppRoutingModule } from './app-routing.module';
import { ControlaUrlPosterPipe } from './pipes/controla-url-poster.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GaleriaComponent } from './components/home/galeria.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    MovieComponent,
    ControlaUrlPosterPipe,
    NavbarComponent,
    GaleriaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
