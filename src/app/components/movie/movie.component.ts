import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { PeliculasService } from '../../services/peliculas.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: []
})
export class MovieComponent implements OnInit {
  pelicula: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: PeliculasService,
    private location: Location
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getPeliculaById(id).subscribe(data => {
        this.pelicula = data;
      });
    console.log(this.pelicula);
  }


  volver() {
    this.location.back();
  }
}
