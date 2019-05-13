import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {SearchComponent} from './components/search/search.component';
import {MovieComponent} from './components/movie/movie.component';
import {NgModule} from '@angular/core';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'search', component: SearchComponent},
  {path: 'search/:texto', component: SearchComponent},
  {path: 'movie/:id/:pag', component: MovieComponent},
  {path: 'movie/:id/:pag/:busqueda', component: MovieComponent},
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {path: '**', component: HomeComponent}
];


// @ts-ignore
@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
