import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MoviesProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class MoviesProvider {
  private baseUrl = "https://api.themoviedb.org/3";
  private last = "/movie/now_playing?api_key=";
  private key = "69e0345a806addbe84da7a229ad48b8b";

  constructor(public http: Http) {
    console.log('Hello MoviesProvider Provider');
  }

  public getLatestMovies(){
    return this.http.get(this.baseUrl + this.last + this.key + "&language=pt-BR&region=BR")
  }

}
