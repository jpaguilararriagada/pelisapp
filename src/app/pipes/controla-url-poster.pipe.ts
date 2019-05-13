import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
@Pipe({
  name: 'controlaUrlPoster'
})
export class ControlaUrlPosterPipe implements PipeTransform {
  constructor(protected sanitizer: DomSanitizer) {}

  public transform(pelicula: any, poster: boolean = false) {
    if (poster) {
      return 'http://image.tmdb.org/t/p/w500/' + pelicula.poster_path;
    }

    if (pelicula.backdrop_path) {
      return 'http://image.tmdb.org/t/p/w500/' + pelicula.backdrop_path;
    } else if (pelicula.poster_path ) {
      return 'http://image.tmdb.org/t/p/w500/' + pelicula.poster_path;
    } else {
      return '../../../assets/imagenes/noimage.jpg';
    }
  }

}
