import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input} from '@angular/core';
import { Show } from '../../interfaces/show.interface';
import { TvShowsService } from '../../services/tv-shows.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [NgFor, NgIf,NgClass,RouterOutlet, RouterLink],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {

  @Input() public pelicula: Show ={
    "title": "Ed, Edd n Eddy",
    "year": 1999,
    "episodes": 80,
    "image": "https://m.media-amazon.com/images/M/MV5BMGFiZGI4Y2ItMzkzOC00OTE5LThlZDgtNzE1YTdmNTA5ZTZkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTEwMTkwOTI@._V1_.jpg",
    "id": 12
  };

  public constructor(private tvShowsServices:TvShowsService)
  {

  }

  public cambiar():void{

    this.pelicula.isSelected=!this.pelicula.isSelected;


  }
  public desappear():void{

    this.pelicula.dontAppear=true;
  }

  public detalle(value:number):void{
    
    this.tvShowsServices.idT=value;
    
    
  }


}
