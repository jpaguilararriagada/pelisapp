import {Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { MovieComponent } from './components/movie/movie.component';
import { NgModule } from '@angular/core';
const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search/:param', component: SearchComponent },
    { path: 'movie/:id',      component: MovieComponent },
    { path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
    { path: '**', component: HomeComponent }
  ];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
    providers: []
  })
  export class AppRoutingModule { }
