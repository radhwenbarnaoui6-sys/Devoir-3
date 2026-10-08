import { Injectable } from '@angular/core';
import { Movie } from '../model/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies : Movie[]; //un tableau de Movie

  movie! : Movie;

  constructor() {
    this.movies = [
      { idMovie : 1, titreMovie : "Inception", realisateur : "Christopher Nolan", dureeMin : 148, noteMovie : 8.8, dateSortie : new Date("07/16/2010")},
      { idMovie : 2, titreMovie : "The Shawshank Redemption", realisateur : "Frank Darabont", dureeMin : 142, noteMovie : 9.3, dateSortie : new Date("09/23/1994")},
      { idMovie : 3, titreMovie : "The Dark Knight", realisateur : "Christopher Nolan", dureeMin : 152, noteMovie : 9.0, dateSortie : new Date("07/18/2008")},
      { idMovie : 4, titreMovie : "Spirited Away", realisateur : "Hayao Miyazaki", dureeMin : 125, noteMovie : 8.6, dateSortie : new Date("07/20/2001")},
      { idMovie : 5, titreMovie : "Interstellar", realisateur : "Christopher Nolan", dureeMin : 169, noteMovie : 8.7, dateSortie : new Date("11/07/2014")}
    ];
   }

    listeMovies():Movie[] {
      return this.movies;
    }

    ajouterMovie( frag: Movie){
      this.movies.push(frag);
    }

    supprimerMovie( frag: Movie){
      //supprimer la movie frag du tableau movies
       const index = this.movies.indexOf(frag, 0);
       if (index > -1) {
         this.movies.splice(index, 1);
       }
     }

     consulterMovie(id:number): Movie{
      this.movie =  this.movies.find(f => f.idMovie == id)!;
        return this.movie;
     }

     trierMovies(){
      this.movies = this.movies.sort((n1,n2) => {
        if (n1.idMovie! > n2.idMovie!) {
            return 1;
        }
       if (n1.idMovie! < n2.idMovie!) {
            return -1;
        }
      return 0;
    });
    }

    updateMovie(f:Movie)
    {
      this.supprimerMovie(f);
      this.ajouterMovie(f);
      this.trierMovies();
    }
}
