import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Pelicula } from '../interfaces/pelicula';


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
private apiKey = '2299dc6da6cc72d2d784c911618f835e';
private urlMovieDb = 'https://api.themoviedb.org/3';


  constructor(private http: HttpClient) {

   }

   getPopulares(): any {
const url = `${this.urlMovieDb}/movie/popular?api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
return this.http.jsonp(url, 'JSONP_CALLBACK').pipe<any>( map((res) => res) );
   }

   getCartelera(): any {
    const url = `${this.urlMovieDb}/movie/now_playing?api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, 'JSONP_CALLBACK').pipe<any>( map((res) => res) );
       }

    getPopularesNinios(): any {
    // tslint:disable-next-line:max-line-length
    const url = `${this.urlMovieDb}/movie/popular?api_key=${this.apiKey}&language=es&certification_country=US&certification.lte=G&sort_by=popularity.desc&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, 'JSONP_CALLBACK').pipe<any>( map((res) => res) );
        }
    getPeliculaById(id: string) {
       // tslint:disable-next-line:max-line-length
    const url = `${this.urlMovieDb}/movie/${id}?api_key=${this.apiKey}&callback=JSONP_CALLBACK&language=es`;
    return this.http.jsonp(url, 'JSONP_CALLBACK').pipe<any>( map((res) => res) );
    }

    buscarPelicula(keyword: string) {
      // tslint:disable-next-line:max-line-length
   const url = `${this.urlMovieDb}/search/movie?query=${keyword}&api_key=${this.apiKey}&callback=JSONP_CALLBACK&language=es`;
   return this.http.jsonp(url, 'JSONP_CALLBACK').pipe<any>( map((res) => res) );
   }
}
