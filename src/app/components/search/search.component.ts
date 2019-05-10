import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  pelicula: any;
  constructor(private route: ActivatedRoute, private service: PeliculasService, private router: Router) {
  this.buscarPeliculas();
   }

   buscarPeliculas() {
     const busqueda = this.route.snapshot.paramMap.get('param');
     console.log(busqueda);
     if (busqueda !== '') {
      this.pelicula = this.service.buscarPelicula(busqueda)
                                    .subscribe(
                                      data => {this.pelicula = data;
                                               console.log(this.pelicula);
                                              }
                                    );
    }
   }

  ngOnInit() {
this.route.params.subscribe((params: any) => {
  if (params.param !== '') {
    this.pelicula = this.service.buscarPelicula(params.param)
  .subscribe(
    data => {this.pelicula = data;
             console.log(this.pelicula);
            }
  );
  }
});
  }

}
