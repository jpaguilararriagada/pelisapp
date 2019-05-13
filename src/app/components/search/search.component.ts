import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';
import {PeliculasService} from '../../services/peliculas.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {


  buscar = '';

  constructor(private route: ActivatedRoute, public service: PeliculasService, private router: Router) {
    route.params.subscribe(data => {
      if (data.texto) {
        this.buscar = data.texto;
        this.buscarPelicula();
      }
    });
  }

  ngOnInit() {

  }

  buscarPelicula() {
    if (this.buscar.length == 0) {
      return;
    }

    this.service.buscarPelicula(this.buscar)
      .subscribe(data => console.log(data));
  }

}
