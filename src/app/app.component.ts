import { Component } from '@angular/core';
import { OmdbApiService } from './services/omdb-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  movieData:IOMDBResponse;
  errorMessage: string;

  constructor(private _omdbService:OmdbApiService){
    
  }

  ngOnInit() {
    this._omdbService.getMovieData().subscribe(movieData => {
      this.movieData = movieData;
      console.log('AP: '+ this.movieData);

    },
      error => this.errorMessage = <any>error);

  }
}
