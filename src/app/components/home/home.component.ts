import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../interfaces/pelicula';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // tslint:disable-next-line:variable-name
populares: any;
cartelera: any;
popularesNinios: any;

  // tslint:disable-next-line:variable-name
  constructor(public _ps: PeliculasService) {
    this._ps.getPopulares()
    .subscribe( (data) => {
      this.populares = data;
                          });

    this._ps.getCartelera()
    .subscribe( (data: any) => {
      this.cartelera = data;
                          });

    this._ps.getPopularesNinios()
    .subscribe( (data: any) => {
      console.log(data);
      this.popularesNinios = data;
                          });
  }

  ngOnInit() {
  }

}
