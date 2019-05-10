import { Component } from '@angular/core';
import { PeliculasService } from './services/peliculas.service';
import { Pelicula } from './interfaces/pelicula';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PelisApp';
  peliculas: Pelicula[] = [];
 constructor(private route: ActivatedRoute, private service: PeliculasService, private router: Router) {
 }

buscar(params: string) {
  this.router.navigate(['/search', params]);
}

}
