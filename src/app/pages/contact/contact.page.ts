import { Component } from '@angular/core';
import { TvShowsService } from '../../services/tv-shows.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.page.html',
  styleUrl: './contact.page.css'
})
export class ContactPage {

//inyectamos el servicio con el constructor:

constructor(private tvShowsServicio: TvShowsService){//se inyectan dependecias y que servicios usaremos


}

//En esta parte se usa el servicio
get contador():number
{
  return this.tvShowsServicio.contador;
}

public onClick():void{//disparador para activar el metodo del servicio

  this.tvShowsServicio.incrementa();//aqui ya usamos nuestro servicio
}


}
