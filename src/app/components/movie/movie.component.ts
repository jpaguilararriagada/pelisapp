import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {PeliculasService} from '../../services/peliculas.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: []
})
export class MovieComponent implements OnInit {
  pelicula: any;
  regresarA: string;
  busqueda: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: PeliculasService,
    private location: Location
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(data => {
      if (data.busqueda) {
        this.busqueda = data.busqueda;
      }
      // tslint:disable-next-line:no-shadowed-variable
      this.service.getPeliculaById(data.id).subscribe(movie => {
        this.regresarA = data.pag;
        this.pelicula = movie;
      });
    });
  }


  volver() {
    if (this.regresarA == 'home') {
      this.router.navigate(['/home']);
    } else if (this.regresarA == 'search') {
      this.router.navigate(['/search', this.busqueda]);
    }
  }
}
