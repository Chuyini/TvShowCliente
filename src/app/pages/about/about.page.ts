import { Component } from '@angular/core';
import { TvShowsService } from '../../services/tv-shows.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.page.html',
  styleUrl: './about.page.css'
})
export class AboutPage {

  //inyectamos el servicio con el constructor:

constructor(private tvShowsServicio: TvShowsService){//se inyectan dependecias y que servicios usaremos


}

//En esta parte se usa el servicio
get contador():number
{
  return this.tvShowsServicio.contador;
}

public onClick():void{//disparador para activar el metodo del servicio

  this.tvShowsServicio.decrementa();//aqui ya usamos nuestro servicio

}

}
