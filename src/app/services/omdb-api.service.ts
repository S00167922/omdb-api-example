import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class OmdbApiService {

  private _siteURL = 'http://www.omdbapi.com/?t=';
  private _param = '&apikey=';
  private _key = 'add your own OMBD API key here';

  constructor(private _http: HttpClient) { }

  getMovieData(movieName): Observable<IOMDBResponse> {
    return this._http.get<IOMDBResponse>(this._siteURL + movieName 
      + this._param + this._key)
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.log('OmdbApiService: ' + err.message);
    return Observable.throw(err.message);
  }
}

