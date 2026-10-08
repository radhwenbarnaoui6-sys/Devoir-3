import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Movie } from '../model/movie.model';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-add-movie',
  imports: [FormsModule],
  templateUrl: './add-movie.html',
  styleUrl: './add-movie.css'
})
export class AddMovie {

  newMovie = new Movie();

  message! : string;

  constructor(private movieService: MovieService ) {}

  addMovie(){
   this.movieService.ajouterMovie(this.newMovie);
   this.message = "Movie "+this.newMovie.titreMovie +" ajouté avec succès !"
  }
}
